import styled from 'styled-components';
import { breakpoints, spacing } from 'styles/theme';

const Layout = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

const Wrapper = styled.div`
  height: 100%;
  margin: 0 auto;
  padding: ${spacing.small};
  @media (min-width: ${breakpoints.small}) {
    max-width: 100%;
  }

  @media (min-width: ${breakpoints.medium}) {
    max-width: ${breakpoints.medium};
  }

  @media (min-width: ${breakpoints.large}) {
    max-width: ${breakpoints.large};
  }
`;

export default Layout;
