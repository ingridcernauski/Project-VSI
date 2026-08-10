import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <header className={styles.navbar}>

      <div className={styles.logo}>
        <img src="/brand/logo.png" alt="Ingrid Cernauski" />
      </div>

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

   <NavLink
  to="/contato"
  className={({ isActive }) =>
    `${styles.button} ${isActive ? styles.buttonActive : ""}`
  }
>
  Vamos Conversar →
</NavLink>

    </header>
  );
}