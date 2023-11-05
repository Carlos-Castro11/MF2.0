import React from "react";
import styles from "./WppBtn.module.css";

import wpp from "../../assets/icons/whatsapp.svg";

const WppBtn = () => {
  return (
    <a className={styles.wppBtn} href="google.com">
      <img src={wpp} alt="" />
    </a>
  );
};

export default WppBtn;
