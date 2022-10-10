import React from "react";
import styles from "./BottomPart.module.css";
import Image from "next/image";
import Profile from "../public/Profile.svg";
import EU from "../public/EULicence.jpeg";
const BottomPart = () => {
  return (
    <div className={styles.bottomPart}>
      <div>
        <Image src={Profile} width={52} height={52} />
        <p>Aktiviraj puni profil</p>
      </div>
      <div className={styles.imageContainer}>
        <Image src={EU} layout="intrinsic"></Image>
      </div>
    </div>
  );
};

export default BottomPart;
