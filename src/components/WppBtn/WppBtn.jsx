import React from "react";
import styles from "./WppBtn.module.css";

import wpp from "../../assets/icons/whatsappBtn.svg";

const WppBtn = () => {
  return (
    <div>
      <a className={styles.wppBtn} href="google.com">
        <img src={wpp} alt="" />
      </a>
    </div>
  );
};

export default WppBtn;
