// PlayWinEarn.js
import React from "react";
import styles from "./style.module.css";
import play from "./play.png";
import win from "./win.png";
import earn from "./sign.png";

const PlayWinEarn = () => {
  return (
    <div className={styles.container} id="how">
      <div className={styles.text}>
        <span className={styles.title}>Play - Win - Earn</span>
        <p className={styles.subtitle}>Yes, it is that easy!</p>
      </div>

      <div className={styles.cards}>
        <div className={styles.card}>
          <div className={styles.cardContent}>
            <div className={styles.iconWrapper}>
              <img src={play} alt="Enter" className={styles.icon} />
            </div>
            <div className={styles.textWrapper}>
              <p className={styles.description}>
                Enter the tournament with a small entrance fee.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.cardContent}>
            <div className={styles.iconWrapper}>
              <img src={win} alt="Compete" className={styles.icon} />
            </div>
            <div className={styles.textWrapper}>
              <p className={styles.description}>
                Compete with players around the world
              </p>
            </div>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.cardContent}>
            <div className={styles.iconWrapper}>
              <img src={earn} alt="Earn" className={styles.icon} />
            </div>
            <div className={styles.textWrapper}>
              <p className={styles.description}>
                Rank at the top winners and earn tokens!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayWinEarn;
