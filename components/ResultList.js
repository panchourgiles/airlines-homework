import Link from '@commonComponents/Link';
import Title from '@commonComponents/Title';
import ResultTable from '@components/ResultTable';
import useDataAPI from '@lib/useDataApi';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

const ResultList = () => {
  const router = useRouter();
  const { state: searchState, fetchData } = useDataAPI({});
  const [tripType, setTripType] = useState(null);
  useEffect(() => {
    if (router.query.tripType) {
      const {
        tripType,
        origin,
        destination,
        departureDate,
        returnDate,
        passengerCount,
        promoCode
      } = router.query;

      const bodyParams = {
        tripType,
        origin,
        destination,
        departureDate,
        returnDate,
        passengerCount: parseInt(passengerCount),
        promoCode
      };

      setTripType(tripType);

      const fetchParams = {
        url: `${process.env.API_URL}/search/${process.env.API_KEY}`,
        method: 'POST',
        bodyParam: bodyParams
      };
      fetchData(fetchParams);
    }
  }, [router.query]);

  if (searchState.isError) {
    return (
      <WrapperMessage>
        <Title>We&rsquo;re sorry, there was a problem please try again</Title>
        <NextLink href="/" passHref>
          <Link>Try Again</Link>
        </NextLink>
      </WrapperMessage>
    );
  }

  if (searchState.isLoading) {
    return (
      <WrapperMessage>
        <Title>Searching... Please wait</Title>
      </WrapperMessage>
    );
  }

  return (
    <>
      {searchState.data.length ? (
        <>
          <Header>
            <Title>Choose Your Flight</Title>
            <NextLink href="/" passHref>
              <Link>New Search</Link>
            </NextLink>
          </Header>
          <ResultTable tripType={tripType} results={searchState.data} />
        </>
      ) : (
        <WrapperMessage>
          <Title>
            We&rsquo;re sorry, we couldn&rsquo;t find anything for this search.
          </Title>
          <NextLink href="/" passHref>
            <Link>New Search</Link>
          </NextLink>
        </WrapperMessage>
      )}
    </>
  );
};

const Header = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
`;

const WrapperMessage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default ResultList;
