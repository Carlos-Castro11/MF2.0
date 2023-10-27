import React from "react";
import styles from "./Footer.module.css";

// Images and Icons
import logo from "../../assets/images/Logo.svg";
import instagram from "../../assets/icons/instagram.svg";
import whatsapp from "../../assets/icons/whatsapp.svg";
import email from "../../assets/icons/email.svg";

const Footer = () => {
  return (
    <>
      <footer id="footer" className={styles.footer}>
        <div className={styles.info}>
          <div className={styles.logo}>
            <img src={logo} alt="" />
          </div>
          <div className={styles.contact}>
            <ul className={styles.contactList}>
              <a target="_blank" href="https://wa.me/5538999178079">
                <li className={styles.contactItem}>
                  <img src={whatsapp} alt="" />
                  <span>(38) 9 9917-8079</span>
                </li>
              </a>
              <a target="_blank" href="https://instagram.com">
                <li className={styles.contactItem}>
                  <img src={instagram} alt="" />
                  <span>@marquesfinelliemp</span>
                </li>
              </a>
              <a target="_blank" href="mailto: marquesefinelli@gmail.com">
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
