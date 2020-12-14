import fetchPopularRoutes from '@api/popularRoutes';
import Layout from '@commonComponents/Layout';
import Title from '@commonComponents/Title';
import RoutesList from '@components/RoutesList';

export const getServerSideProps = async () => {
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
      <Title textAlign={'center'}>Welcome to Airlines Homework!</Title>
      <RoutesList routes={popularRoutes} />
    </Layout>
  );
}
