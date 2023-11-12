import React from "react";
import styles from "./ToTopBtn.module.css";

import toTopBtn from "../../assets/icons/backToTopButton.svg";

// Context
import { PopUpContext } from "../../PopUpContext";

const ToTopBtn = () => {
  const [isVisible, setIsVisible] = React.useState(false);
  const { footerVisible } = React.useContext(PopUpContext);
  const goToBtn = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const listenToScroll = () => {
    let heightToHidden = 250;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    if (winScroll > heightToHidden) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  React.useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
  }, []);

  return (
    <>
      <div
        className={`${styles.toTopBtn} ${isVisible && styles.toTopBtnTrue} ${
          footerVisible && styles.toTopBtnFooter
        }`}
        onClick={goToBtn}
      >
        <img src={toTopBtn} alt="" />
      </div>
    </>
  );
};

export default ToTopBtn;
