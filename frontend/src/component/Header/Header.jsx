// src/pages/Home.jsx
import React, { useState } from "react";
import axios from "axios";
import styles from "./style.module.css"; // Import CSS module
import phone from "./phone.png";
import Navbare from "../navbar/Navbare";




const Header = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = async () => {
    try {
      await axios.post("http://localhost:5000/api/emails_sasplay", { email });
      alert("Email added to the waitlist!");
      setEmail(""); // Clear the input field
    } catch (err) {
      console.error(err);
      alert("Error adding email to the waitlist");
    }
  };
  return (
    <div className={styles.home} id="home">
      <Navbare />
      <div className={styles.container}>
        <header className={styles.header}>
          <h1>Welcome <br />To SasPlay</h1>
          <div className={styles.emailForm}>
            <input
              type="email"
              placeholder="sasplay@email.com"
              className={styles.emailInput}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button className={styles.joinButton} onClick={handleSubmit}>Join Waitlist</button>
          </div>
        </header>
        <div className={styles.mockup}>
          <img src={phone} alt="Mockup" className={styles.mockupImage} />
        </div>
      </div>
    </div>
  );
};

export default Header;
