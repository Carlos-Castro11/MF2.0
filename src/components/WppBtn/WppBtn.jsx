import React from "react";
import styles from "./WppBtn.module.css";

import wpp from "../../assets/icons/whatsappBtn.svg";

// Context
import { PopUpContext } from "../../PopUpContext";

const WppBtn = () => {
  const { footerVisible } = React.useContext(PopUpContext);

  return (
    <>
      <a
        className={`${styles.wppBtn} ${
          footerVisible && styles.wppBtnInvisible
        }`}
        href="https://wa.me/5538999178079" 
      >
        <img src={wpp} alt="" />
      </a>
    </>
  );
};

export default WppBtn;
