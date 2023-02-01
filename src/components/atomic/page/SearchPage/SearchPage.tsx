import styled from "styled-components";
import { Row, Col, Spin } from "antd";
import { Logo, SelectMenu, Search, PokemonCard } from "@atomic";
import pokemonLogo from "@assets/images/pokedex.png";
import {
  regions,
  types,
  sortby,
  filterBySearch,
  filterByType,
  sortingBy
} from "./helper";
import { useState, useEffect } from "react";
import { pokemonApiV2 } from "@utilities";
import { filter } from "lodash";

const Container = styled.div`
  text-align: center;
`;

const StyledRow = styled(Row)`
  margin: auto;
  margin-top 2rem;
  padding: 2rem;
`;

const PokemonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 2rem;
  justify-content: space-around;
`;

const regionDropdownItems = regions.map((r) => {
  return {
    ...r,
    key: r?.name,
    value: r?.name,
    label: `${r?.name} (${r?.offset} - ${r?.limit + r?.offset})`
  };
});

const typesDropdownItems = types.map((t) => ({
  key: t,
  value: t,
  label: t
}));

const sortbyDropdownItems = sortby.map((s) => ({
  key: s,
  value: s,
  label: s
}));

const getQueryString = (region) => {
  if (!region) return null;

  let query = new URLSearchParams();

  query.append("limit", region?.limit);
  query.append("offset", region?.offset);

  return query.toString();
};

const getPokemonList = (pokemons = [], filters = {}) => {
  const { search, type, sortBy } = filters;

  const pokemonLists = filter(pokemons, (pokemon) => {
    let remove = false;

    if (search && !filterBySearch(pokemon, search)) {
      remove = true;
    }

    if (
      type &&
      type?.value !== "all types" &&
      !filterByType(pokemon, type?.value)
    ) {
      remove = true;
    }

    return !remove;
  });

  const sortedPokemonList = pokemonLists.sort(sortingBy(sortBy?.value));

  const result = sortedPokemonList.map((pokemon) => {
    return {
      ...pokemon,
      image: pokemon?.sprites?.other?.dream_world?.front_default
    };
  });

  return result;
};

const initial = {
  data: [],
  loading: false,
  error: null
};

const SearchPage = () => {
  const [filters, setFilter] = useState({});
  const [state, setState] = useState(initial);

  const onFilterChange = (key, value) => {
    setFilter((prevFilter) => ({
      ...prevFilter,
      [key]: value
    }));
  };

  const queryString = getQueryString(filters?.region);
  const pokemonLists = getPokemonList(state?.data, filters);

  const fetchPokemonList = async () => {
    if (!queryString) return;

    let pokemonList = [];
    let fetchError = null;

    setState((prev) => ({
      ...prev,
      loading: true
    }));

    try {
      const response = await pokemonApiV2.get(`pokemon?${queryString}`);
      const pokemonResults = response?.data?.results || [];

      for (let pokemon of pokemonResults) {
        const response = await pokemonApiV2.get(`pokemon/${pokemon?.name}`);
        const monster = await response?.data;
        await pokemonList.push(monster);
      }
    } catch (error) {
      fetchError = error;
    }

    setState((prev) => ({
      ...prev,
      loading: false,
      data: pokemonList,
      error: fetchError
    }));
  };

  useEffect(() => {
    queryString && fetchPokemonList();
  }, [queryString]);

  return (
    <Container>
      <Logo src={pokemonLogo} width={200} />
      <StyledRow>
        <Col xs={24} sm={12} md={6}>
          <SelectMenu
            label="REGION"
            options={regionDropdownItems}
            onChange={(item) => onFilterChange("region", item)}
          />
        </Col>
        <Col xs={24} sm={12} md={6}>
          <SelectMenu
            label="TYPE"
            options={typesDropdownItems}
            onChange={(item) => onFilterChange("type", item)}
          />
        </Col>
        <Col xs={24} sm={12} md={6}>
          <SelectMenu
            label="SORT BY"
            options={sortbyDropdownItems}
            onChange={(item) => onFilterChange("sortBy", item)}
          />
        </Col>
        <Col xs={24} sm={12} md={6}>
          <Search
            label="SEARCH"
            onChange={(value) => onFilterChange("search", value)}
          />
        </Col>
      </StyledRow>
      <PokemonContainer>
        {state?.loading ? (
          <Spin />
        ) : (
          [...pokemonLists].map((pokemon) => (
            <PokemonCard key={pokemon?.id} pokemon={pokemon} />
          ))
        )}
      </PokemonContainer>
    </Container>
  );
};

export default SearchPage;
