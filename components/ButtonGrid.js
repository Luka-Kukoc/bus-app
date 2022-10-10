import React from "react";
import styles from "./ButtonGrid.module.css";
import Card from "./Card";

const ButtonGrid = () => {
  const items = [
    {
      name: "Planiraj putovanje",
      icon: "",
      href: "/",
    },
    {
      name: "Vozni red",
      icon: "",
      href: "/",
    },
    {
      name: "Prodajna mjesta",
      icon: "",
      href: "/",
    },
    {
      name: "42,00kn",
      icon: "",
      href: "/",
    },
    {
      name: "Moje karte",
      icon: "",
      href: "/",
    },
    {
      name: "Kupi kartu",
      icon: "",
      href: "/",
    },
  ];

  return (
    <div className={styles.buttonGrid}>
      {items.map((item) => (
        <Card name={item.name} key={item.name} />
      ))}
    </div>
  );
};

export default ButtonGrid;
