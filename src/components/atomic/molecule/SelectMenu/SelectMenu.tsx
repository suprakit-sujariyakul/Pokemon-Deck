import { Select, Text } from "@atomic";
import styled from "styled-components";

const Container = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: center;

  .dropdown-wrapper {
    margin-top: 1rem;
  }
`;

const SelectMenu = ({
  label,
  options,
  onChange
}: {
  label: string;
  options: object[];
  onChange: () => void;
}) => {
  return (
    <Container>
      <Text fontSize="1rem">{label}</Text>
      <div className="dropdown-wrapper">
        <Select options={options} onChange={onChange} />
      </div>
    </Container>
  );
};

export default SelectMenu;
