import styled from "styled-components";
import { Row, Col } from "antd";
import { Logo, SelectMenu, Search } from "@atomic";
import pokemonLogo from "@assets/images/pokedex.png";
import { regions, types, sortby } from "./helper";
import { useState } from "react";

const Container = styled.div`
  text-align: center;
`;

const StyledRow = styled(Row)`
  margin: auto;
  margin-top 2rem;
  padding: 2rem;
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

const getFetchPokemonFilters = (filters) => {
  return filters;
};

const SearchPage = () => {
  const [filter, setFilter] = useState({});
  const onFilterChange = (key, value) => {
    setFilter((prevFilter) => ({
      ...prevFilter,
      [key]: value
    }));
  };

  const pokemonFilters = getFetchPokemonFilters(filter);
  console.log({ pokemonFilters });

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
    </Container>
  );
};

export default SearchPage;
