/**
 * get backend_url, support failsafe
 * @param path
 * @author hoang.pt
 */
export const getBackendURL = (path = "") => {
  return `${
    process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1337"
  }${path}`;
};

/**
 * get media_url for multiple database
 * @param path
 * @author hoang.pt
 */
export const getMediaURL = (path = "") => {
  return `${
    process.env.NEXT_PUBLIC_MEDIA_URL ||
    process.env.NEXT_PUBLIC_STRAPI_API_URL ||
    "http://localhost:1337"
  }${path}`;
};

/**
 * prepend url, for SEO
 * @param url
 * @author hoang.pt
 */
export const getBackendSeoMedia = (url: string | null) => {
  if (url == null) {
    return null;
  }

  // Return the full URL if the media is hosted on an external provider
  if (url.startsWith("http") || url.startsWith("//")) {
    return url;
  }

  // Otherwise prepend the URL path with the Strapi URL
  return `${getMediaURL()}${url}`;
};

/**
 * ADDS DELAY TO SIMULATE SLOW API (REMOVE FOR PRODUCTION)
 * @param time
 */
export const delay = (time: number) => {
  return new Promise((resolve) => setTimeout(() => resolve(1), time));
};
