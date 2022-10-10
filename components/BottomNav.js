import React from "react";
import styles from "./BottomNav.module.css";
import Link from "next/link";
import Image from "next/image";
import House from "../public/House.svg";
import Qr from "../public/QR.svg";
import Profile from "../public/ProfileBlue.svg";
import Book from "../public/BookBlue.svg";

const BottomNav = () => {
  return (
    <div className={styles.bottomNav}>
      <div>
        <Link href="/">
          <>
            <Image src={House} width={32} height={32} />
            <p>Početna</p>
          </>
        </Link>
      </div>
      <div>
        <Link href="/karte">
          <>
            <Image src={Qr} width={32} height={32} />
            <p>Karte</p>
          </>
        </Link>
      </div>
      <div>
        <Link href="/linije">
          <>
            <Image src={Book} width={32} height={32} />
            <p>Linije</p>
          </>
        </Link>
      </div>
      <div>
        <Link href="/profil">
          <>
            <Image src={Profile} width={32} height={32} />
            <p>Profil</p>
          </>
        </Link>
      </div>
    </div>
  );
};

export default BottomNav;
