import React from "react";
import styles from "./ToTopBtn.module.css";

import toTopBtn from "../../assets/icons/backToTopButton.svg";

const ToTopBtn = () => {
  return (
    <a className={styles.toTopBtn} href="#header">
      <img src={toTopBtn} alt="" />
    </a>
  );
};

export default ToTopBtn;
