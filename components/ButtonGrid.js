import React from "react";
import styles from "./ButtonGrid.module.css";
import Card from "./Card";

const ButtonGrid = () => {
  const items = [
    {
      name: "Planiraj putovanje",
      icon: 0,
      href: "/",
    },
    {
      name: "Vozni red",
      icon: 1,
      href: "/",
    },
    {
      name: "Prodajna mjesta",
      icon: 2,
      href: "/",
    },
    {
      name: "42,00kn",
      icon: 3,
      href: "/",
    },
    {
      name: "Moje karte",
      icon: 4,
      href: "/",
    },
    {
      name: "Kupi kartu",
      icon: 5,
      href: "/",
    },
  ];

  return (
    <div className={styles.buttonGrid}>
      {items.map((item) => (
        <Card name={item.name} key={item.name} icon={item.icon} />
      ))}
    </div>
  );
};

export default ButtonGrid;
