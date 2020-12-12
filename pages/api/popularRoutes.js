import axios from 'axios';
const API_URL = process.env.API_URL;
const API_KEY = process.env.API_KEY;

export default async function fetchPopularRoutes() {
  const popularRoutes = await axios
    .get(`${API_URL}/popularRoutes/${API_KEY}`, {
      responseType: 'json'
    })
    .then(({ data }) => data);

  return popularRoutes;
}
