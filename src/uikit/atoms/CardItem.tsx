"use client";
import React from "react";
import { Card, Tag } from "antd";
import styles from "./styles.module.css";

const { Meta } = Card;

const CardItem = ({
  imageUrl,
  tag,
  createDate,
  description,
  ...rest
}: {
  imageUrl: string;
  tag: string;
  createDate: string;
  description: string;
}) => {
  return (
    <div className={`${styles.cardItem} gap-8 flex-column`}>
      <div className={styles.cardImage}>
        <img src={imageUrl} alt="" />
      </div>

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
