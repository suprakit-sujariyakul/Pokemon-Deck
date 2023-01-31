import styled from "styled-components";
import { Row, Col } from "antd";
import { Logo, SelectMenu, Search } from "@atomic";
import pokemonLogo from "@assets/images/pokedex.png";
import { regions, types, sortby } from "./helper";

const Container = styled.div`
  text-align: center;
`;

const StyledRow = styled(Row)`
  margin: auto;
  margin-top 2rem;
  padding: 2rem;
`;

const SearchPage = () => {
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

  return (
    <Container>
      <Logo src={pokemonLogo} width={200} />
      <StyledRow>
        <Col xs={24} sm={12} md={6}>
          <SelectMenu
            label="REGION"
            defaultValue="Select"
            options={regionDropdownItems}
          />
        </Col>
        <Col xs={24} sm={12} md={6}>
          <SelectMenu
            label="TYPES"
            defaultValue="Select"
            options={typesDropdownItems}
          />
        </Col>
        <Col xs={24} sm={12} md={6}>
          <SelectMenu
            label="SORT BY"
            defaultValue="Select"
            options={sortbyDropdownItems}
          />
        </Col>
        <Col xs={24} sm={12} md={6}>
          <Search label="SEARCH" />
        </Col>
      </StyledRow>
    </Container>
  );
};

export default SearchPage;
