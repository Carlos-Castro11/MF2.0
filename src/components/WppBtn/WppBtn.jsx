import React from "react";
import styles from "./WppBtn.module.css";

import wpp from "../../assets/icons/whatsappBtn.svg";

const WppBtn = () => {
  const [teste, setTeste] = React.useState(true);

  function handleScroll() {
    console.log(window.innerHeight);
    if (window.innerHeight > 663) {
      setTeste(false);
    }
  }

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      {teste ? (
        <a className={styles.wppBtn} href="google.com">
          <img src={wpp} alt="" />
        </a>
      ) : null}
    </div>
  );
};

export default WppBtn;
