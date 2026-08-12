import { useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

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
          Início
        </NavLink>

        <NavLink
          to="/metodologia"
          className={({ isActive }) =>
            isActive ? styles.active : ""
          }
        >
          Metodologia
        </NavLink>

        <NavLink
          to="/trajetoria"
          className={({ isActive }) =>
            isActive ? styles.active : ""
          }
        >
          Trajetória
        </NavLink>

        <NavLink
          to="/projetos"
          className={({ isActive }) =>
            isActive ? styles.active : ""
          }
        >
          Projetos
        </NavLink>
      </nav>

      {/* BOTÃO DESKTOP */}
      <NavLink
        to="/contato"
        className={({ isActive }) =>
          `${styles.button} ${isActive ? styles.buttonActive : ""}`
        }
      >
        Vamos Conversar →
      </NavLink>

      {/* BOTÃO MOBILE */}
      <button
        className={`${styles.menuButton} ${
          menuOpen ? styles.menuButtonOpen : ""
        }`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Abrir menu"
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
          Início
        </NavLink>

        <NavLink to="/metodologia" onClick={closeMenu}>
          Metodologia
        </NavLink>

        <NavLink to="/trajetoria" onClick={closeMenu}>
          Trajetória
        </NavLink>

        <NavLink to="/projetos" onClick={closeMenu}>
          Projetos
        </NavLink>

        <NavLink to="/contato" onClick={closeMenu}>
          Vamos Conversar →
        </NavLink>
      </nav>

    </header>
  );
}