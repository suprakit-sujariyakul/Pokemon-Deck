import { Select, Text } from "@atomic";
import styled from "styled-components";

const Container = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: center;

  .dropdown-wrapper {
    min-width: 20rem;
    padding: 1rem;
  }
`;

const SelectMenu = ({
  label,
  defaultValue,
  options
}: {
  label: string;
  defaultValue: string;
  options: object[];
}) => {
  return (
    <Container>
      <Text fontSize="1rem">{label}</Text>
      <div className="dropdown-wrapper">
        <Select defaultValue={defaultValue} options={options} />
      </div>
    </Container>
  );
};

export default SelectMenu;
