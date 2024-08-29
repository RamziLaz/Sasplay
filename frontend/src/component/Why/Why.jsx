// SasPlay.js
import React from 'react';
import styles from './style.module.css';
import coin from "./coin.svg"
import nft from "./nft.svg"
import cible from "./cible.svg"
const Why = () => {
  return (
    <div className={styles.container} id='Features'>
      <div className={styles.title}>
        Why SasPlay is the Next BIG thing <br />  <span className={styles.highlight}>in Mobile Gaming?</span>
      </div>
      <div className={styles.cards}>
        <div className={styles.card}>
          <div className={styles.iconWrapper}>
            <img src={cible} alt="Rewarding Skill" className={styles.icon} />
          </div>
          <div className={styles.textWrapper}>
            <p className={styles.description}>
              Rewarding skill and strategy, not luck or speculation
            </p>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.iconWrapper}>
            <img src={nft} alt="Blockchain Technology" className={styles.icon} />
          </div>
          <div className={styles.textWrapper}>
            <p className={styles.description}>
              Built on blockchain technology, ensuring a transparent and secure gaming environment
            </p>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.iconWrapper}>
            <img src={coin} alt="Earn Tokens" className={styles.icon} />
          </div>
          <div className={styles.textWrapper}>
            <p className={styles.description}>
              Play games you love and earn tokens based on your ranking
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Why;
