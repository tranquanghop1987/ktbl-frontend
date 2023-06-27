import { fetchAPI } from '@/app/shared/utils/fetch-api';

/**
 * get all remote variable from server
 * @author hoang.pt
 */

export const TITLE = 'title';
export const DESCRIPTION = 'description';
export const TYPE = 'type';
export const FEATURE_IMAGE_URL = 'feature_image.url';
export const FEATURE_IMAGE_ALTTEXT = 'feature_image.alternativeText';

export const getArticles = async (filters: any, start?: number, limit?: number): Promise<any> => {
  const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;
  if (!token) throw new Error('The Strapi API Token variable is not set.');

  // build params
  const path = `/articles`;
  const options = { headers: { Authorization: `Bearer ${token}` } };
  const urlParamsObject = {
    sort: { publishedAt: 'desc' },
    populate: [TITLE, DESCRIPTION, TYPE, FEATURE_IMAGE_URL, FEATURE_IMAGE_ALTTEXT],
    pagination: {
      start: start,
      limit: limit,
    },
    filters: filters,
  };

  const response = await fetchAPI(path, urlParamsObject, options);
  return response.data;
};
