import React from "react";
import styles from "./ButtonGrid.module.css";
import Card from "./Card";
import Image from "next/image";
import Profile from "../public/Profile.svg";
import EU from "../public/EULicence.jpeg";
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
    <>
      <div className={styles.buttonGrid}>
        {items.map((item) => (
          <Card name={item.name} key={item.name} icon={item.icon} />
        ))}
        <div className={styles.buttonGriddiv}>
          <Image src={Profile} width={52} height={52} />
          <p>Aktiviraj puni profil</p>
        </div>
      </div>
      <div className={styles.bottomPart}>
        <div className={styles.imageContainer}>
          <Image src={EU} layout="intrinsic"></Image>
        </div>
      </div>
    </>
  );
};

export default ButtonGrid;
