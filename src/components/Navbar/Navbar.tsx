
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext";
import styles from "./Navbar.module.css";


export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { language, setLanguage } = useLanguage();


  const closeMenu = () => setMenuOpen(false);


  return (
    <header className={styles.navbar}>


      <div className={styles.logo}>
        <img src="/brand/logo.png" alt="Ingrid Cernauski" />
      </div>


      {/* MENU DESKTOP */}
      <nav className={styles.menu}>
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            isActive ? styles.active : ""
          }
        >
          {language === "pt" ? "Início" : "Home"}
        </NavLink>


        <NavLink
          to="/metodologia"
          className={({ isActive }) =>
            isActive ? styles.active : ""
          }
        >
          {language === "pt" ? "Metodologia" : "Methodology"}
        </NavLink>


        <NavLink
          to="/trajetoria"
          className={({ isActive }) =>
            isActive ? styles.active : ""
          }
        >
          {language === "pt" ? "Trajetória" : "Journey"}
        </NavLink>


        <NavLink
          to="/projetos"
          className={({ isActive }) =>
            isActive ? styles.active : ""
          }
        >
          {language === "pt" ? "Projetos" : "Projects"}
        </NavLink>
      </nav>


      {/* BOTÃO DESKTOP */}
      <NavLink
        to="/contato"
        className={({ isActive }) =>
          `${styles.button} ${isActive ? styles.buttonActive : ""}`
        }
      >
        {language === "pt"
          ? "Vamos Conversar →"
          : "Let's Talk →"}
      </NavLink>


      <div className={styles.languageSwitch}>
        <button
          className={language === "pt" ? styles.languageActive : ""}
          onClick={() => setLanguage("pt")}
        >
          PT
        </button>


        <span>|</span>


        <button
          className={language === "en" ? styles.languageActive : ""}
          onClick={() => setLanguage("en")}
        >
          EN
        </button>
      </div>


      {/* BOTÃO MOBILE */}
      <button
        className={`${styles.menuButton} ${
          menuOpen ? styles.menuButtonOpen : ""
        }`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label={
          language === "pt"
            ? "Abrir menu"
            : "Open menu"
        }
        aria-expanded={menuOpen}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>


      {/* MENU MOBILE */}
      <nav
        className={`${styles.mobileMenu} ${
          menuOpen ? styles.mobileMenuOpen : ""
        }`}
      >
        <NavLink to="/" end onClick={closeMenu}>
          {language === "pt" ? "Início" : "Home"}
        </NavLink>


        <NavLink to="/metodologia" onClick={closeMenu}>
          {language === "pt"
            ? "Metodologia"
            : "Methodology"}
        </NavLink>


        <NavLink to="/trajetoria" onClick={closeMenu}>
          {language === "pt"
            ? "Trajetória"
            : "Journey"}
        </NavLink>


        <NavLink to="/projetos" onClick={closeMenu}>
          {language === "pt"
            ? "Projetos"
            : "Projects"}
        </NavLink>


        <NavLink to="/contato" onClick={closeMenu}>
          {language === "pt"
            ? "Vamos Conversar →"
            : "Let's Talk →"}
        </NavLink>
      </nav>


    </header>
  );
}
