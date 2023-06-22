import { fetchAPI } from '@/app/shared/utils/fetch-api';

export const getGlobal = async (): Promise<any> => {
  const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;

  if (!token) throw new Error('The Strapi API Token variable is not set.');

  const path = `/global`;
  const options = { headers: { Authorization: `Bearer ${token}` } };

  const urlParamsObject = {
    populate: 'deep',
  };

  const response = await fetchAPI(path, urlParamsObject, options);
  return response;
};
