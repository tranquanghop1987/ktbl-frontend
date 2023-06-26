/**
 * get backend_url, support failsafe
 * @param path
 * @author hoang.pt
 */
export const getStrapiURL = (path = '') => {
  return `${process.env.NEXT_PUBLIC_STRAPI_API_URL || 'http://localhost:1337'}${path}`;
}


/**
 * prepend url, for SEO
 * @param url
 * @author hoang.pt
 */
export const getStrapiMedia = (url: string | null) => {
  if (url == null) {
    return null;
  }

  // Return the full URL if the media is hosted on an external provider
  if (url.startsWith('http') || url.startsWith('//')) {
    return url;
  }

  // Otherwise prepend the URL path with the Strapi URL
  return `${getStrapiURL()}${url}`;
}


/**
 * format Date for Frontend
 * @param dateString
 * @author hoang.pt
 */
export const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
  return date.toLocaleDateString('en-US', options);
}


/**
 * ADDS DELAY TO SIMULATE SLOW API (REMOVE FOR PRODUCTION)
 * @param time
 */
export const delay = (time: number) => {
  return new Promise((resolve) => setTimeout(() => resolve(1), time));
}
