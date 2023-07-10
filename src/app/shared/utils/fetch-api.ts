import qs from 'qs';
import { getBackendURL } from '../../../lib/api-helper';

export const fetchAPI = async (path: string, urlParamsObject = {}, options = {}) => {
  try {
    // Merge default and user options
    const mergedOptions = {
      next: { revalidate: 60 },
      headers: {
        'Content-Type': 'application/json',
      },
      ...options,
    };

    // Build request URL
    const queryString = qs.stringify(urlParamsObject);
    const requestUrl = `${getBackendURL(`/api${path}${queryString ? `?${queryString}` : ''}`)}`;

    // Trigger API call
    const response = await fetch(requestUrl, mergedOptions);
    const data = await response.json();
    return data;
  } catch (error: any) {
    throw new Error(`${error?.stack}`);
  }
};
