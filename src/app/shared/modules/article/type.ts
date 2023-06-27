/**
 * DTO
 */
export interface IArticleMinInfo {
  type: string;
  description: string;
  title: string;
  featureImage: {
    url: string;
    altText: string;
  };
}
