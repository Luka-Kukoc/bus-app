import React from "react";
import styles from "./Card.module.css";
import Image from "next/image";
import Travel from "../public/Background.svg";
import Book from "../public/Book.svg";
import Wallet from "../public/Wallet.svg";
import Ticket from "../public/Ticket.svg";
import Bag from "../public/Bag.svg";
import Ruler from "../public/Ruler.svg";

const Card = ({ name, key, icon, href }) => {
  const icons = [Ruler, Book, Travel, Wallet, Ticket, Bag];
  return (
    <div key={key} className={styles.card}>
      <Image height={52} width={52} src={icons[icon]} />
      <p>{name}</p>
    </div>
  );
};

export default Card;
