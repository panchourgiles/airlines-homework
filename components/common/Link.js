import { colors, fonts, spacing } from '@styles';
import React from 'react';
import styled from 'styled-components';

const Link = React.forwardRef(function Link(props, ref) {
  return <Wrapper {...props} ref={ref} />;
});

const Wrapper = styled.a`
  background: ${colors.white};
  border: 1px solid ${colors.primary};
  border-radius: 4px;
  display: block;
  font-size: ${fonts.size.medium};
  font-weight: bold;
  padding: ${spacing.small} ${spacing.medium};
  text-transform: uppercase;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

export default Link;
