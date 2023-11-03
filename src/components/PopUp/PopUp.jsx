import React from "react";
import styles from "./PopUp.module.css";

// CONTEXT
import { PopUpContext } from "../../PopUpContext";

const PopUp = ({ src }) => {
  const { popUpActive } = React.useContext(PopUpContext);
  const { setPopUpActive } = React.useContext(PopUpContext);

  return (
    <div className={styles.popUp}>
      <button
        className={styles.btn}
        onClick={() => {
          setPopUpActive(false);
        }}
      >
        x
      </button>
      <img className={styles.popUpImage} src={src} alt="" />
    </div>
  );
};

export default PopUp;
