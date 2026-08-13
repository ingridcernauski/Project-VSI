import styles from "./aiEconomy.module.css";
import { useLanguage } from "../../../context/LanguageContext";

function AIEconomy() {
  const { language } = useLanguage();

  return (
    <main className={styles.aiEconomy}>
      <section className={styles.comingSoon}>

        <span className={styles.dashboardLabel}>
          {language === "pt" ? "EM CONSTRUÇÃO" : "UNDER CONSTRUCTION"}
        </span>

        <h1>
          THE AI <em>ECONOMY</em>
        </h1>

        <p>
          {language === "pt"
            ? "O dashboard está sendo desenvolvido."
            : "The dashboard is currently under development."}
        </p>

        <strong>
          {language === "pt"
            ? "LANÇAMENTO · 15.08.2026"
            : "LAUNCH · 15.08.2026"}
        </strong>

      </section>
    </main>
  );
}

export default AIEconomy;