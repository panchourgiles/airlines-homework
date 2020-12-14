import { colors } from '@styles';
import styled, { css } from 'styled-components';

const Title = ({ status, textAlign, children, ...rest }) => (
  <Wrapper status={status} textAlign={textAlign} {...rest}>
    {children}
  </Wrapper>
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
  ${(props) =>
    props.textAlign
      ? css`
          text-align: ${props.textAlign};
        `
      : css`
          text-align: left;
        `}
`;

export default Title;
