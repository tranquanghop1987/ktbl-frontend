import React from 'react';
import styles from './styles.module.css';

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
    <div className={`${styles.cardItem} gap-8 flex-column`}>
      <div className={styles.cardImage}>{imageUrl && <img src={imageUrl} alt="" />}</div>

      <div className={`${styles.content} flex-column gap-8 `}>
        <div className={`flex flex-sb `}>
          <span className={styles.tag}>{tag}</span>
          <div className={styles.createDate}>{createDate}</div>
        </div>
        <div className={styles.description}>{description}</div>
      </div>
    </div>
  );
};

export default CardItem;
