import React from "react";
import styles from "./ToTopBtn.module.css";

import toTopBtn from "../../assets/icons/backToTopButton.png";

const ToTopBtn = () => {
  return (
    <a className={styles.toTopBtn} href="google.com">
      <img src={toTopBtn} alt="" />
    </a>
  );
};

export default ToTopBtn;
