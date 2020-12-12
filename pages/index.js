import fetchPopularRoutes from '@api/popularRoutes';
import Layout from '@commonComponents/Layout';
import RoutesList from '@components/RoutesList';

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
      <RoutesList popularRoutes={popularRoutes} />
    </Layout>
  );
}
