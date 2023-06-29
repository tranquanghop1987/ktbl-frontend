import { useCallback, useEffect, useState } from "react";
import { getArticles } from "@/app/shared/modules/article/repo";

/**
 * use for article listing slide, no show more or pagination
 * @param type
 * @param limit
 */
export const useFindArticles = (type: string, limit: number) => {
  const [isLoading, setLoading] = useState(true);
  const [articles, setArticles] = useState<any[]>([]);

  const fetchData = useCallback(async (type: string) => {
    setLoading(true);
    try {
      const filters = {
        type: type,
      };
      const articles = await getArticles(filters, 0, limit);
      setArticles(articles);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }, []);

  // only call 1 times
  useEffect(() => {
    fetchData(type);
  }, []);

  return { articles, isLoading };
};
