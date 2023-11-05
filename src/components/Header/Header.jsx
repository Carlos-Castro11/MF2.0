import React from "react";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";

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

    return () => {
      window.removeEventListener("scroll", () => {
        setMobileActive(false);
      });
    };
  }, []);

  return (
    <>
      <header className={`${styles.header}`} id="header">
        <div className={`container ${styles.headerContent}`}>
          <div className={styles.logo}>
            <Link onClick={() => setMobileActive(false)} to="/">
              <img src={logo} alt="logo" />
            </Link>
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
              <Link onClick={() => setMobileActive(false)} to="/">
                <li
                  className={`${
                    mobile ? styles.navItemMobile : styles.navItem
                  }`}
                >
                  {mobile && <img src={house} alt="house icon" />}
                  Início
                </li>
              </Link>
              <Link onClick={() => setMobileActive(false)} to="/enterprises">
                <li
                  className={`${
                    mobile ? styles.navItemMobile : styles.navItem
                  }`}
                >
                  {mobile && <img src={money} alt="money icon" />}
                  Empreendimentos
                </li>
              </Link>
              <Link onClick={() => setMobileActive(false)} to="/releases">
                <li
                  className={`${
                    mobile ? styles.navItemMobile : styles.navItem
                  }`}
                >
                  {mobile && <img src={tools} alt="tools icon" />}
                  Lançamentos
                </li>
              </Link>
              <Link onClick={() => setMobileActive(false)} to="/futureProjects">
                <li
                  className={`${
                    mobile ? styles.navItemMobile : styles.navItem
                  }`}
                >
                  {mobile && <img src={project} alt="projects icon" />}
                  Futuros Projetos
                </li>
              </Link>
              <a onClick={() => setMobileActive(false)} href="#footer">
                <li
                  className={`${
                    mobile ? styles.navItemMobile : styles.navItem
                  }`}
                >
                  {mobile && <img src={contact} alt="contact icon" />}
                  Contato
                </li>
              </a>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
