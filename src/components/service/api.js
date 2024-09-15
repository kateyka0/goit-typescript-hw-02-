import axios from 'axios';

const UNSPLASH_ACCESS_KEY = 'HTOowemuFyO0qOqT2X65pwniYefQn2yCUa0rkzU8ppE';

const fetchImages = async (query, page = 1) => {
  const response = await axios.get('https://api.unsplash.com/search/photos', {
    params: {
      query: query,
      page: page,
      per_page: 15,
    },
    headers: {
      Authorization: `Client-ID ${UNSPLASH_ACCESS_KEY}`,
    },
  });

  return response.data;
};
export default fetchImages;