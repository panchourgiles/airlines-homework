import { colors } from '@styles';
import styled, { css } from 'styled-components';

const Subtitle = ({ status, children, ...rest }) => (
  <Wrapper status={status} {...rest}>
    {children}
  </Wrapper>
);

const Wrapper = styled.h3`
  font-weight: normal;
  ${(props) =>
    props.status
      ? css`
          color: ${colors[props.status]};
        `
      : css`
          color: ${colors.black};
        `}
`;

export default Subtitle;
