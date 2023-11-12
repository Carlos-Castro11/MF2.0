import React from "react";
import styles from "./Footer.module.css";

// Images and Icons
import logo from "../../assets/images/Logo.svg";
import instagram from "../../assets/icons/instagram.svg";
import whatsapp from "../../assets/icons/whatsapp.svg";
import email from "../../assets/icons/email.svg";
// Hooks
import useMedia from "../../Hooks/useMedia";
// Context
import { PopUpContext } from "../../PopUpContext";

const Footer = () => {
  const mobile = useMedia("(max-width: 750px)");
  const { setFooterVisible } = React.useContext(PopUpContext);
  const windowHalf2 = window.innerHeight * 0.8;
  const handleHeight = () => {
    const footer = document.querySelector("#footer");
    const x = 170;
    const y = 0;
    const footerTop = footer.getBoundingClientRect().top;
    const isFooterVisible = footerTop - windowHalf2 < 200;
    const isFooterInvisible = footerTop - windowHalf2 > (mobile ? x : y);
    if (isFooterVisible) {
      setFooterVisible(true);
    }
    if (isFooterInvisible) {
      setFooterVisible(false);
    }
  };
  React.useEffect(() => {
    window.addEventListener("scroll", handleHeight);
  }, []);

  return (
    <>
      <footer id="footer" className={styles.footer}>
        <div className={styles.info}>
          <div className={styles.logo}>
            <img src={logo} alt="" />
          </div>
          <div className={styles.contact}>
            <ul className={styles.contactList}>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://wa.me/5538999178079"
              >
                <li className={styles.contactItem}>
                  <img src={whatsapp} alt="" />
                  <span>(38) 9 9917-8079</span>
                </li>
              </a>
              <a target="_blank" rel="noreferrer" href="https://instagram.com">
                <li className={styles.contactItem}>
                  <img src={instagram} alt="" />
                  <span>@marques&finelli_empreendimentos</span>
                </li>
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="mailto: marquesefinelli@gmail.com"
              >
                <li className={styles.contactItem}>
                  <img src={email} alt="" />
                  <span>marquesefinelliemp@gmail.com</span>
                </li>
              </a>
            </ul>
          </div>
        </div>
      </footer>
      <div className={styles.rights}>
        <div className={styles.clients}>
          <span>
            Marques & Finelli Empreendimentos Imobiliários | 2023 © Todos os
            direitos reservados.
          </span>
        </div>
        <div className={styles.devs}>
          <span>
            Desenvolvido por © <strong>DEV BCM </strong>
          </span>
        </div>
      </div>
    </>
  );
};

export default Footer;
