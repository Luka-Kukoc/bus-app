import React from "react";
import Image from "next/image";
import styles from "./Navbar.module.css";
import PrometEU from "../public/PrometEU.jpg";
import Bell from "../public/Bell.svg";
import Star from "../public/Star.svg";
const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.bannerContainer}>
        <Image src={PrometEU} layout="intrinsic" />
      </div>
      <div className={styles.iconContainer}>
        <Image src={Bell} layout="intrinsic" />
        <Image src={Star} layout="intrinsic" />
      </div>
    </div>
  );
};

export default Navbar;
