import React from "react";
import styles from "./PopUp.module.css";

// CONTEXT
import { PopUpContext } from "../../PopUpContext";

const PopUp = ({ src, houses }) => {
  const { popUpActive } = React.useContext(PopUpContext);
  const { setPopUpActive } = React.useContext(PopUpContext);
  var slides = [{}];
  houses.imgs.forEach((item) => {
    slides.push({ id: +1, image: item });
  });
  return (
    <div className={`${styles.popUp} animeLeft`}>
      <button
        className={styles.btn}
        onClick={() => {
          setPopUpActive(false);
        }}
      >
        x
      </button>
      <img className={`${styles.popUpImage}`} src={src} alt="" />
    </div>
  );
};

export default PopUp;
