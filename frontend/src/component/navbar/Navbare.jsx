import React, { useState, useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import classes from "./style.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faTelegram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import logo from "./sasplay.svg";

const Navbare = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [navbarFixed, setNavbarFixed] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setNavbarFixed(true);
      } else {
        setNavbarFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`${classes.navbar} ${menuOpen ? classes.active : ""} ${
        navbarFixed ? classes.fixed : ""
      }`}
    >
      <div>
        <RouterLink to="">
          <img src={logo} className={classes.logo} />
        </RouterLink>
      </div>
      <ul className={menuOpen ? classes.active : ""}>
        <li>
          <ScrollLink to="Home" smooth={true} duration={500}>
            Home
          </ScrollLink>{" "}
        </li>
        <li>
          <ScrollLink to="About" smooth={true} duration={500}>
            About
          </ScrollLink>
        </li>
        <li>
          <ScrollLink to="how" smooth={true} duration={500}>
            How to play
          </ScrollLink>
        </li>
        <li>
          <ScrollLink to="Features" smooth={true} duration={500}>
            Features
          </ScrollLink>
        </li>
        <li>
          <RouterLink to="/">Team</RouterLink>
        </li>
        <div className={classes.navbar_icons}>
          <a
            href="https://telegram.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faTelegram} />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faTwitter} />
          </a>
        </div>
      </ul>

      <button className={classes.menuToggle} onClick={toggleMenu}>
        <FontAwesomeIcon icon={faBars} />
      </button>
    </nav>
  );
};

export default Navbare;
