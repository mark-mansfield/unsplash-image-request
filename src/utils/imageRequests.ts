import { ApiResponse, IApi } from '../types';
import axios, { AxiosError } from 'axios';
const ACCESS_KEY = process.env.REACT_APP__UNSPLASH_API_KEY;

export const getImagesFetch = async (query: string): Promise<ApiResponse> => {
  console.log('hi from fetch');
  const url = `https://api.unsplash.com/search/photos?query=${query}&client_id=${ACCESS_KEY}&per_page=20&squarish=squarish`;
  console.log('url', url);

  let data;
  try {
    const response = await fetch(url);
    // fetch wont report http errors itself
    if (response.status === 404) {
      throw new Error('Page not found');
    } else if (response.status === 500) {
      throw new Error('Server error');
    } else if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    data = await response.json();
    return data;
  } catch (error) {
    throw new Error('Page not found');
  }
};

// added this here to show the easy path
export const getImagesAxios = async (query: string): Promise<ApiResponse> => {
  console.log('hi from axios');
  const url = `https://api.unsplash.com/search/photos?query=${query}&client_id=${ACCESS_KEY}&per_page=20&squarish=squarish`;
  try {
    const { data } = await axios.get(url);
    return data;
  } catch (error) {
    throw new Error((error as AxiosError).message);
  }
};

export function requestApi(
  api: IApi,
  query: string,
  fetchMethod: (query: string) => ApiResponse | Promise<ApiResponse>,
  axiosMethod: (query: string) => ApiResponse | Promise<ApiResponse>
) {
  if (api === 'fetch') {
    return fetchMethod(query);
  }

  return axiosMethod(query);
}
