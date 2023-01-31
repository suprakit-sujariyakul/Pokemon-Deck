import { Typography } from "antd";
import styled from "styled-components";

const { Text: TextAntd } = Typography;

const StyledText = styled(TextAntd)`
  font-size: ${({ fontSize }) => fontSize || "1.6rem"};
`;

const Text = ({
  children,
  style,
  ...props
}: {
  children: string;
  style?: object;
  props?: object;
}) => {
  return (
    <StyledText style={style} {...props}>
      {children}
    </StyledText>
  );
};

export default Text;
