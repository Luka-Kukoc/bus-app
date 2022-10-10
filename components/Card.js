import React from "react";
import styles from "./Card.module.css";
import Image from "next/image";
import Travel from "../public/Background.svg";
import Book from "../public/Book.svg";
import House from "../public/House.svg";
import Wallet from "../public/Wallet.svg";
import Ticket from "../public/Ticket.svg";
import Bag from "../public/Bag.svg";

const Card = ({ name, key, icon, href }) => {
  const icons = [Travel, Book, House, Wallet, Ticket, Bag];
  return (
    <div key={key} className={styles.card}>
      <Image height={62} width={62} src={icons[icon]} />
      <p>{name}</p>
    </div>
  );
};

export default Card;
