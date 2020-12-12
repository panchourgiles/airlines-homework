import RoutesItem from '@components/RoutesItem';
import { useDispatchRoute } from '@context/RoutesContext';
import { nanoid } from 'nanoid';
import styled from 'styled-components';

const RoutesList = ({ popularRoutes }) => {
  const dispatch = useDispatchRoute();

  const handleRoute = ({ origin, destination, departureDate, tripType }) => {
    dispatch({
      type: 'ADD_ROUTE',
      payload: {
        origin,
        destination,
        departureDate,
        tripType
      }
    });
  };

  return (
    <Wrapper>
      {popularRoutes.map((popularRoute) => {
        return (
          <RoutesItem
            key={nanoid(8)}
            routeCoverImage={popularRoute.routeCoverImage}
            origin={popularRoute.origin}
            destination={popularRoute.destination}
            departureDate={popularRoute.departureDate}
            priceUSD={popularRoute.priceUSD}
            tripType={popularRoute.tripType}
            onClick={() =>
              handleRoute({
                origin: popularRoute.origin,
                destination: popularRoute.destination,
                departureDate: popularRoute.departureDate,
                tripType: popularRoute.tripType
              })
            }
          />
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
`;

export default RoutesList;
