import Button from '@commonComponents/Button';
import Text from '@commonComponents/Text';
import Title from '@commonComponents/Title';
import { breakpoints, colors, spacing } from '@styles/theme';
import styled from 'styled-components';

const ItemPopularRoute = ({
  routeCoverImage,
  origin,
  destination,
  departureDate,
  priceUSD,
  tripType
}) => {
  routeCoverImage = 'https://s.latamairlines.com/images/destinations/CUE.jpg';
  return (
    <Wrapper>
      <Card>
        <Image src={routeCoverImage} alt={destination} />
        <Description>
          <div>
            <Title status="primary">
              {origin} - {destination}
            </Title>
            <Text>{departureDate}</Text>
          </div>
          <Fares>
            <Text bold={true}>Fares from</Text>
            <Price>
              {`$${priceUSD}`}
              <sup>*</sup>
            </Price>
            <Text bold={true}>{tripType}</Text>
          </Fares>
          <Button>View Deal</Button>
        </Description>
      </Card>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  min-height: 510px;
  flex-basis: 100%;
  position: relative;
  padding: ${spacing.small};
  box-sizing: border-box;

  @media (min-width: ${breakpoints.xsmall}) {
    flex-basis: 50%;
  }

  @media (min-width: ${breakpoints.medium}) {
    flex-basis: 33.33%;
  }
`;

const Card = styled.div`
  background-color: white;
  border: solid 1px ${colors.grayLight};
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: ${spacing.small};
`;

const Image = styled.img`
  max-width: 100%;
  height: auto;
`;

const Description = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
`;

const Fares = styled.div`
  text-align: right;
  margin-bottom: ${spacing.medium};
  padding-right: ${spacing.small};
`;

const Price = styled.div`
  font-size: 60px;
  font-weight: bold;
  line-height: 60px;
  position: relative;
  sup {
    font-size: 25px;
    position: absolute;
    top: -15px;
  }
`;

export default ItemPopularRoute;
