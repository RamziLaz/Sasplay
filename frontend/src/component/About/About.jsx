import React from "react";
import styles from "./style.module.css";
import phone from "./phone23.png";
const About = () => {
  return (
    <div className={styles.container} id="About">
      <div className={styles.title}>
        <span >
          Better your <span className={styles.highlight}>Gaming Skills</span>,
          <br />
          Higher the <span className={styles.highlight}>Rewards!</span>
        </span>
      </div>
      <div className={styles.sections}>
        <div className={styles.section}>
          <div className={styles.imageWrapper}>
            <img src={phone} alt="Mockup" className={styles.mockupImage} />
          </div>
          <div className={styles.textWrapper}>
            <p>SastaPlay is the future of decentralized gaming.</p>
            <p>
              We are revolutionising the industry with our Rank-to-Earn model,
              focusing on skill, not speculation.
            </p>
            <p>
              Say goodbye to complex and scam-ridden platforms with our
              transparent and skill-based model of gaming!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
