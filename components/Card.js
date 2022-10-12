import React from "react";
import styles from "./Card.module.css";
import Image from "next/image";
import Travel from "../public/Background.svg";
import Book from "../public/Book.svg";
import Wallet from "../public/Wallet.svg";
import Ticket from "../public/Ticket.svg";
import Bag from "../public/Bag.svg";
import Ruler from "../public/Ruler.svg";
import { useRouter } from "next/router";
const Card = ({ name, key, icon, href }) => {
  const router = useRouter();
  const icons = [Ruler, Book, Travel, Wallet, Ticket, Bag];
  return (
    <div key={key} className={styles.card} onClick={() => router.push(href)}>
      <Image height={52} width={52} src={icons[icon]} />
      {name === "42,00kn" && (
        <p
          style={{
            margin: 0,
            fontSize: "13px",
            opacity: "0.5",
            fontWeight: "100",
          }}
        >
          Stanje u e-novčaniku
        </p>
      )}
      <p style={name === "42,00kn" ? { margin: 0 } : {}}>{name}</p>
      {name === "42,00kn" && (
        <p
          style={{
            margin: 0,
            fontSize: "12px",
            opacity: "0.5",
            fontWeight: "100",
          }}
        >
          5,57 eur
        </p>
      )}
    </div>
  );
};

export default Card;
