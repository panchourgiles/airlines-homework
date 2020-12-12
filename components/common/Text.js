import { colors } from '@styles/theme';
import styled, { css } from 'styled-components';

const Text = ({ children, bold = false }) => (
  <Wrapper bold={bold}>{children}</Wrapper>
);

const Wrapper = styled.span`
  color: ${colors.black};
  ${(props) =>
    props.bold
      ? css`
          font-weight: bold;
        `
      : css`
          font-weight: normal;
        `}
`;

export default Text;
