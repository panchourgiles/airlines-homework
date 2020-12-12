import styled from 'styled-components';

const ListPopularRoute = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

const Wrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
`;

export default ListPopularRoute;
