import React from "react";
import styles from "./styles.module.scss";

const CardItem = ({
  imageUrl,
  tag,
  createDate,
  description,
}: {
  imageUrl: string | null;
  tag: string;
  createDate: string;
  description: string;
  [x: string]: any;
}) => {
  return (
    <div className={`${styles.cardItem}`}>
      <div className={styles.cardImage}>
        {imageUrl && <img src={imageUrl} alt="" />}
      </div>
      <div className={`${styles.content}`}>
        <div className={`flex flex-sb mb-2`}>
          <span className={styles.tag}>{tag}</span>
          <div className={styles.createDate}>{createDate}</div>
        </div>
        <div className={styles.description}>{description}</div>
      </div>
    </div>
  );
};

export default CardItem;
