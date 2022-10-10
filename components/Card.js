import React from "react";
import styles from "./Card.module.css";
const Card = ({ name, key, icon, href }) => {
  return (
    <div key={key} className={styles.card}>
      <p>{name}</p>
    </div>
  );
};

export default Card;
