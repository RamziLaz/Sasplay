// Footer.js
import React from 'react';
import styles from './style.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import logo from "../navbar/sasplay.svg"
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.section}>
          <img src={logo} alt="" className={styles.logo}/>

          <p className={styles.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore  magna aliqua.
          </p>
          <div className={styles.socialIcons}>
            <a href="#" className={styles.icon}>
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a href="#" className={styles.icon}>
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="#" className={styles.icon}>
              <FontAwesomeIcon icon={faTwitter} />
            </a>
          </div>
        </div>
        <div className={styles.section} id={styles.section1}>
          <h3 className={styles.sectionTitle}>Pages</h3>
          <ul className={styles.links}>
            <li><a href="#">About Us</a></li>
            <li><a href="#">How it works</a></li>
            <li><a href="#">Features</a></li>
            <li><a href="#">Team</a></li>
          </ul>
        </div>
        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>Contact Us</h3>
          <p className={styles.description}>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium
          </p>
          <div className={styles.subscription}>
            <input type="email" placeholder="Your Email" className={styles.emailInput} />
            <button className={styles.subscribeButton}>Subscribe</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
