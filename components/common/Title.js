import { colors } from '@styles/theme';
import styled, { css } from 'styled-components';

const Title = ({ status, children }) => (
  <Wrapper status={status}>{children}</Wrapper>
);

const Wrapper = styled.h2`
  ${(props) =>
    props.status
      ? css`
          color: ${colors[props.status]};
        `
      : css`
          color: ${colors.black};
        `}
`;

export default Title;
