import React from "react";
import styles from "./Header.module.css";

// Hooks
import useMedia from "../../Hooks/useMedia";

// Images
import logo from "../../assets/images/Logo.svg";
import house from "../../assets/icons/house.svg";
import contact from "../../assets/icons/contact.svg";
import money from "../../assets/icons/money.svg";
import project from "../../assets/icons/project.svg";
import tools from "../../assets/icons/tools.svg";

const Header = () => {
  const mobile = useMedia("(max-width: 750px)");
  const [mobileActive, setMobileActive] = React.useState(false);

  function changeMobileActive() {
    setMobileActive(!mobileActive);
  }

  React.useEffect(() => {
    window.addEventListener("scroll", () => {
      setMobileActive(false);
    });
  }, []);

  return (
    <>
      <header className={`${styles.header}`} id="header">
        <div className={styles.logo}>
          <a href="">
            <img src={logo} alt="logo" />
          </a>
        </div>
        <div className={`${mobile ? styles.navMobile : styles.nav}`}>
          {mobile && (
            <button
              onClick={changeMobileActive}
              className={`${styles.menuMobile} ${
                mobileActive && styles.menuMobileActive
              }`}
            ></button>
          )}
          <ul
            className={`${mobile ? styles.navListMobile : styles.navList} ${
              mobileActive && styles.navListMobileActive
            }`}
          >
            <a href="">
              <li
                className={`${mobile ? styles.navItemMobile : styles.navItem}`}
              >
                {mobile && <img src={house} alt="house icon" />}
                Início
              </li>
            </a>
            <a href="">
              <li
                className={`${mobile ? styles.navItemMobile : styles.navItem}`}
              >
                {mobile && <img src={money} alt="money icon" />}
                Empreendimentos
              </li>
            </a>
            <a href="">
              <li
                className={`${mobile ? styles.navItemMobile : styles.navItem}`}
              >
                {mobile && <img src={tools} alt="tools icon" />}
                Lançamentos
              </li>
            </a>
            <a href="">
              <li
                className={`${mobile ? styles.navItemMobile : styles.navItem}`}
              >
                {mobile && <img src={project} alt="projects icon" />}
                Futuros Projetos
              </li>
            </a>
            <a href="#footer">
              <li
                className={`${mobile ? styles.navItemMobile : styles.navItem}`}
              >
                {mobile && <img src={contact} alt="contact icon" />}
                Contato
              </li>
            </a>
          </ul>
        </div>
      </header>
    </>
  );
};

export default Header;
