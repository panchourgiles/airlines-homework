import { colors, fonts, spacing } from '@styles';
import styled from 'styled-components';

const Button = ({ children, type = 'button', onClick, ...rest }) => (
  <Wrapper type={type} onClick={onClick} {...rest}>
    {children}
  </Wrapper>
);

const Wrapper = styled.button`
  background: ${colors.primary};
  border: none;
  border-radius: 4px;
  color: ${colors.white};
  cursor: pointer;
  display: inline-block;
  font-size: ${fonts.size.medium};
  font-weight: bold;
  padding: ${spacing.small} ${spacing.medium};
  text-transform: uppercase;
  &:hover {
    text-decoration: underline;
  }
`;

export default Button;
