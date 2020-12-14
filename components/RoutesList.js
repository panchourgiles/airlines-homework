import RoutesItem from '@components/RoutesItem';
import SearchForm from '@components/SearchForm';
import { useModal } from '@context/ModalContext';
import { useDispatchRoute } from '@context/RoutesContext';
import { nanoid } from 'nanoid';
import styled from 'styled-components';

const RoutesList = ({ routes }) => {
  const dispatch = useDispatchRoute();
  const { handleModal } = useModal();

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

    const origins = routes.map((route) => route.origin);
    const destinations = routes.map((route) => route.destination);
    handleModal(<SearchForm origins={origins} destinations={destinations} />);
  };

  return (
    <Wrapper>
      {routes.map((route) => {
        return (
          <RoutesItem
            key={nanoid(8)}
            routeCoverImage={route.routeCoverImage}
            origin={route.origin}
            destination={route.destination}
            departureDate={route.departureDate}
            priceUSD={route.priceUSD}
            tripType={route.tripType}
            onClick={() =>
              handleRoute({
                origin: route.origin,
                destination: route.destination,
                departureDate: route.departureDate,
                tripType: route.tripType
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
