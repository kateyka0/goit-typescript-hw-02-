import axios, { AxiosResponse } from 'axios';

const UNSPLASH_ACCESS_KEY = 'HTOowemuFyO0qOqT2X65pwniYefQn2yCUa0rkzU8ppE';


interface UnsplashImage {
  id: string;
  alt_description: string;
  urls: {
    small: string;
    regular: string;
  };
  user: {
    name: string;
  };
}

interface UnsplashResponse {
  total: number;
  total_pages: number;
  results: UnsplashImage[];
}

const fetchImages = async (query: string, page: number = 1): Promise<UnsplashResponse> => {
  const response: AxiosResponse<UnsplashResponse> = await axios.get('https://api.unsplash.com/search/photos', {
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
