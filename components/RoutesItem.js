import Button from '@commonComponents/Button';
import Text from '@commonComponents/Text';
import Title from '@commonComponents/Title';
import { breakpoints, colors, spacing } from '@styles';
import styled, { css } from 'styled-components';

const RoutesItem = ({
  routeCoverImage,
  origin,
  destination,
  departureDate,
  priceUSD,
  tripType,
  onClick
}) => {
  return (
    <Wrapper>
      <Card>
        <Image image={routeCoverImage} />
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
          <Button onClick={onClick}>View Deal</Button>
        </Description>
      </Card>
    </Wrapper>
  );
};

const Wrapper = styled.div`
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
  transition: border-color 0.25s, box-shadow 0.25s;
  &:hover {
    box-shadow: 0 0px 10px rgba(0, 0, 0, 0.3);
  }
`;

const Image = styled.div`
  ${(props) =>
    props.image &&
    css`
      background-image: url(${props.image});
    `}
  background-repeat: no-repeat;
  background-size: cover;
  min-width: 100%;
  height: 143px;
  background-position: center;
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

export default RoutesItem;
