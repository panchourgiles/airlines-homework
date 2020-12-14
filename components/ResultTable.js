import Subtitle from '@commonComponents/Subtitle';
import Text from '@commonComponents/Text';
import Title from '@commonComponents/Title';
import { colors, spacing } from '@styles';
import { nanoid } from 'nanoid';
import styled from 'styled-components';

const ResultTable = ({ tripType, results }) => {
  const origin = results[0];
  const destination = tripType === 'roundTrip' ? results[1] : null;
  return (
    <>
      <WrapperTitle>
        <Title>{`${origin.origin} to ${origin.destination}`}</Title>
        <Text>Fare Class: {origin.fareClass}</Text>
      </WrapperTitle>
      <Subtitle>{origin.departureDate}</Subtitle>

      <HeaderTable>
        <Text bold={true}>Depart</Text>
        <Text bold={true}>Arrive</Text>
        <Text bold={true}>Price USD</Text>
      </HeaderTable>
      {origin.routes.map((route) => {
        return (
          <RowTable key={nanoid(8)}>
            <Subtitle>{route.departureTime}</Subtitle>
            <Subtitle>{route.arrivalTime}</Subtitle>
            <Subtitle>${route.priceUSD}</Subtitle>
          </RowTable>
        );
      })}
      {tripType === 'roundTrip' ? (
        <>
          <WrapperTitle>
            <Title>{`${destination.origin} to ${destination.destination}`}</Title>
          </WrapperTitle>
          <Subtitle>{destination.departureDate}</Subtitle>

          <HeaderTable>
            <Text bold={true}>Depart</Text>
            <Text bold={true}>Arrive</Text>
            <Text bold={true}>Price USD</Text>
          </HeaderTable>
          {destination.routes.map((route) => {
            return (
              <RowTable key={nanoid(8)}>
                <Subtitle>{route.departureTime}</Subtitle>
                <Subtitle>{route.arrivalTime}</Subtitle>
                <Subtitle>${route.priceUSD}</Subtitle>
              </RowTable>
            );
          })}
        </>
      ) : null}
    </>
  );
};

const WrapperTitle = styled.div`
  padding: ${spacing.xsmall} 0;
  border-bottom: 1px solid ${colors.grayLightest};
`;

const HeaderTable = styled.div`
  background: ${colors.grayLightest};
  border: 1px solid ${colors.grayLight};
  border-radius: 6px;
  display: flex;
  justify-content: space-between;
  padding: ${spacing.xsmall};
`;

const RowTable = styled.div`
  border-radius: 6px;
  border: 1px solid ${colors.grayLight};
  display: flex;
  justify-content: space-between;
  padding: ${spacing.small} ${spacing.xsmall};
  margin: ${spacing.small} 0;
`;

export default ResultTable;
