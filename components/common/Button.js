import { colors, fonts, spacing } from '@styles/theme';
import styled from 'styled-components';

const Button = ({ children }) => <Wrapper>{children}</Wrapper>;

const Wrapper = styled.button`
  background: ${colors.primary};
  border: none;
  border-radius: 4px;
  color: ${colors.white};
  cursor: pointer;
  display: inline-block;
  font-size: ${fonts.size.medium};
  padding: ${spacing.small} ${spacing.medium};
  text-transform: uppercase;
`;

export default Button;
