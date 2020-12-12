import fetchPopularRoutes from '@api/popularRoutes';
import Layout from '@commonComponents/Layout';
import ItemPopularRoute from '@components/ItemPopularRoute';
import ListPopularRoute from '@components/ListPopularRoute';
import { nanoid } from 'nanoid';

export const getStaticProps = async () => {
  const popularRoutes = await fetchPopularRoutes();

  return {
    props: {
      popularRoutes
    }
  };
};

export default function Home({ popularRoutes }) {
  return (
    <Layout>
      <ListPopularRoute>
        {popularRoutes.map((popularRoute) => {
          return (
            <ItemPopularRoute
              key={nanoid(8)}
              routeCoverImage={popularRoute.routeCoverImage}
              origin={popularRoute.origin}
              destination={popularRoute.destination}
              departureDate={popularRoute.departureDate}
              priceUSD={popularRoute.priceUSD}
              tripType={popularRoute.tripType}
            />
          );
        })}
      </ListPopularRoute>
    </Layout>
  );
}
