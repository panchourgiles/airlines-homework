import 'react-datepicker/dist/react-datepicker.css';

import Button from '@commonComponents/Button';
import DatePicker from '@commonComponents/DatePicker';
import RadioInput from '@commonComponents/RadioInput';
import Select from '@commonComponents/Select';
import TextInput from '@commonComponents/TextInput';
import { useModal } from '@context/ModalContext';
import { useRoute } from '@context/RoutesContext';
import { breakpoints, colors, spacing } from '@styles';
import { convertArrayToSelectFormat } from '@utils/array';
import { useRouter } from 'next/router';
import { useState } from 'react';
import styled from 'styled-components';

const SearchForm = ({ origins, destinations }) => {
  const { handleModal } = useModal();
  const router = useRouter();
  const currentRoute = useRoute();

  const [errorForm, setErrorForm] = useState(null);
  const [inputsFormData, setInputsFormData] = useState({
    tripType: currentRoute.tripType,
    departureDate: currentRoute.departureDate,
    returnDate: null,
    passengerCount: 1
  });

  const [originFormData, setOriginFormData] = useState({
    label: currentRoute.origin,
    value: currentRoute.origin
  });

  const [destinationFormData, setDestinationFormData] = useState({
    label: currentRoute.destination,
    value: currentRoute.destination
  });

  const originRoutes = convertArrayToSelectFormat(origins);
  const destinationRoutes = convertArrayToSelectFormat(destinations);

  function handleInput(event) {
    let {
      target: { name, value }
    } = event;

    if (name === 'passengerCount') {
      let { min, max } = event.target;
      value = Math.max(Number(min), Math.min(Number(max), Number(value)));
    }

    setInputsFormData({
      ...inputsFormData,
      [name]: value
    });
  }

  function validateTripType() {
    if (
      inputsFormData.tripType === 'roundTrip' &&
      inputsFormData.returnDate === null
    ) {
      return false;
    }
    return true;
  }

  function getDataWithFormat() {
    return {
      ...inputsFormData,
      departureDate: new Date(
        inputsFormData.departureDate
      ).toLocaleDateString(),
      returnDate:
        inputsFormData.tripType === 'roundTrip' && inputsFormData.returnDate
          ? inputsFormData.returnDate.toLocaleDateString()
          : null,
      origin: originFormData.value,
      destination: destinationFormData.value
    };
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (validateTripType()) {
      setErrorForm(null);
      const formData = getDataWithFormat();
      handleModal(false);
      router.push({
        pathname: '/search',
        query: {
          ...formData
        }
      });
    } else {
      setErrorForm('Please fill out all the required fields(*)');
    }
  }

  return (
    <Wrapper>
      <form onSubmit={handleSubmit}>
        <WrapperTripType>
          <RadioInput
            label="Round-trip"
            name="tripType"
            value="roundTrip"
            id="roundTrip"
            checked={inputsFormData.tripType === 'roundTrip'}
            onChange={handleInput}
          />
          <RadioInput
            label="One Way"
            name="tripType"
            value="oneWay"
            id="oneWay"
            checked={inputsFormData.tripType === 'oneWay'}
            onChange={handleInput}
          />
        </WrapperTripType>
        <Row>
          <Column>
            <Select
              label="From"
              name="origin"
              required={true}
              options={originRoutes}
              value={originFormData}
              onChange={(value) => setOriginFormData(value)}
            />
          </Column>
          <Column>
            <Select
              label="To"
              name="destination"
              required={true}
              options={destinationRoutes}
              value={destinationFormData}
              onChange={(value) => setDestinationFormData(value)}
            />
          </Column>
        </Row>
        <Row>
          <Column>
            <DatePicker
              label="Depart"
              name="departureDate"
              required={true}
              value={inputsFormData.departureDate}
              onChange={(date) =>
                handleInput({ target: { name: 'departureDate', value: date } })
              }
            />
          </Column>
          <Column>
            <DatePicker
              label="Return"
              name="returnDate"
              required={true}
              value={
                inputsFormData.tripType === 'oneWay'
                  ? null
                  : inputsFormData.returnDate
              }
              onChange={(date) =>
                handleInput({ target: { name: 'returnDate', value: date } })
              }
              disabled={inputsFormData.tripType === 'oneWay'}
            />
          </Column>
        </Row>
        <Row>
          <Column>
            <TextInput
              label="Passenger(s)"
              name="passengerCount"
              value={inputsFormData.passengerCount}
              onChange={handleInput}
              type="number"
              min="1"
              max="9"
            />
          </Column>
          <Column>
            <TextInput
              label="Promo Code"
              name="promoCode"
              value={inputsFormData.promoCode}
              onChange={handleInput}
            />
          </Column>
        </Row>
        <WrapperSubmitButton>
          <Error>{errorForm}</Error>
          <Button type="submit">Search Flights</Button>
        </WrapperSubmitButton>
      </form>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: ${spacing.small} 0;
  @media (min-width: ${breakpoints.small}) {
    max-width: ${breakpoints.small};
  }
`;

const WrapperTripType = styled.div`
  margin: ${spacing.small} 0;
  padding: 0 ${spacing.small};
`;

const Row = styled.div`
  display: flex;
  flex-flow: row wrap;
`;

const Column = styled.div`
  box-sizing: border-box;
  flex: 1;
  margin-bottom: ${spacing.small};
  padding: 0 ${spacing.small};
  text-align: left;
  @media (min-width: ${breakpoints.small}) {
    flex: 50%;
  }
`;

const WrapperSubmitButton = styled.div`
  margin: ${spacing.small} 0;
  padding: 0 ${spacing.small};
  text-align: right;
`;

const Error = styled.div`
  color: ${colors.red};
  margin: ${spacing.small} 0; ;
`;

export default SearchForm;
