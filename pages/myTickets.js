import Image from "next/image";
import React from "react";
import BottomNav from "../components/BottomNav";
import styles from "../styles/myTickets.module.css";
import Qr from "../public/QR.svg";
const myTickets = () => {
  return (
    <>
      <div className={styles.myTickets}>
        <header>
          <h1>Moje karte</h1>
          <button>+Kupi</button>
        </header>
        <p>KUPLJENE KARTE</p>
        <section>
          <div>
            <>
              <h6>Split</h6>
              <p>Vrijedi za: Split</p>
            </>
            <Image src={Qr} width={42} height={36} />
          </div>
          <span />
          <div>
            <p>Pojedinačna karta</p>
            <p>60 min</p>
          </div>
        </section>
        <button>Iskorištene karte</button>
      </div>
      <BottomNav />
    </>
  );
};

export default myTickets;
