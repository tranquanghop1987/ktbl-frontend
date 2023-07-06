/**
 * DTO
 */
export interface IArticleMin {
  type: string;
  description: string;
  title: string;
  featureImageUrl: string;
}

export interface IArticle {
  type: string;
  description: string;
  title: string;
  featureImageUrl: string;
  content: string;
  author: string;
}
