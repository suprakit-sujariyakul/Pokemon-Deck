import { Card as CardAntd } from "antd";
import styled from "styled-components";

const StyledCard = styled(CardAntd)`
  width: ${({ width }) => width || "20rem"};
  padding: ${({ padding }) => padding || "2rem"};
  background: ${({ bgColors }) =>
    `linear-gradient(${bgColors[0]}, ${bgColors[1]})`};
  .ant-card-body {
    padding: 0;
  }

  border-radius: ${({ borderRadius }) => borderRadius || "20rem"};
`;

const StyledHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Header = ({ left, right, children }) => {
  return (
    <>
      <StyledHeaderContainer>
        {left && <div>{left}</div>}
        {right && <div>{right}</div>}
      </StyledHeaderContainer>
      {children}
    </>
  );
};

const Card = ({ children, left, right, bgColors, ...props }) => {
  const header = <Header left={left} right={right} />;
  return (
    <StyledCard bgColors={bgColors} {...props}>
      {header && header}
      {children}
    </StyledCard>
  );
};

export default Card;
