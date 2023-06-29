"use client";
import CardItem from "@/uikit/atoms/CardItem";
import styles from "./styles.module.scss";
import "../../../assets/css/slick.css";
import "../../../assets/css/slick-theme.css";
import Loader from "@/uikit/atoms/Loader";
import { getBackendSeoMedia } from "@/lib/api-helper";
import { formatDate } from "@/app/shared/utils/date";
import { useFindArticles } from "@/app/shared/modules/article/usecase";
import Link from "next/link";
import { useInView } from "react-intersection-observer";
//import {itemList} from "@/app/shared/modules/article/mock";

/**
 *  Section UI
 */
const ArticleCardList = ({ articleType }: { articleType: string }) => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    rootMargin: "-100px 0px",
  });

  const ARTICLE_LIMIT = 4;
  const { articles, isLoading } = useFindArticles(articleType, ARTICLE_LIMIT);

  if (isLoading) return <Loader />;

  return (
    <div
      ref={ref}
      className={`container mx-auto ${styles.article} ${
        inView ? ` ${styles.animation}` : ` ${styles.animationOut}`
      }`}
    >
      <div className={styles.header}>
        <div className={styles.title}>บทความ</div>
        <Link href={"/#"} style={{ color: "#0080BD", border: "none" }}>
          ดูทั้งหมด
        </Link>
      </div>
      <div className={`grid grid-cols-1 gap-20 sm:grid-cols-2 md:grid-cols-4`}>
        {articles.map((press, index) => {
          const seoImgUrl = getBackendSeoMedia(
            press.attributes.feature_image?.data?.attributes?.url
          );
          const humanCreatedDate = formatDate(press.attributes.publishedAt);

          return (
            <div className={styles.newDetail} key={index}>
              <CardItem
                class={"items"}
                imageUrl={seoImgUrl}
                tag={press.attributes.type}
                description={press.attributes.description}
                createDate={humanCreatedDate}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default ArticleCardList;
