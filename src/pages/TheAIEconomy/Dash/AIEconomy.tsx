import styles from "./aiEconomy.module.css";
import { useLanguage } from "../../../context/LanguageContext";

function AIEconomy() {
  const { language } = useLanguage();

  return (
    <main className={styles.aiEconomy}>

      {/* =====================================================
          HEADER
          ===================================================== */}

      <header className={styles.dashboardHeader}>

        <div>
          <span className={styles.dashboardLabel}>
            {language === "pt" ? "VISÃO GERAL" : "OVERVIEW"}
          </span>

          <h1>
            THE AI <em>ECONOMY</em>
          </h1>
        </div>

      </header>


      {/* =====================================================
          KPI ROW
          ===================================================== */}

      <section className={styles.kpiGrid}>

        <article className={styles.kpiCard}>
          <strong>1,8B</strong>
          <span>
            {language === "pt" ? "USUÁRIOS DE IA" : "AI USERS"}
          </span>
        </article>

        <article className={styles.kpiCard}>
          <strong>25%</strong>
          <span>
            {language === "pt" ? "EMPREGOS EXPOSTOS" : "JOBS EXPOSED"}
          </span>
        </article>

        <article className={styles.kpiCard}>
          <strong>US$ 344,7B</strong>
          <span>
            {language === "pt" ? "INVESTIMENTO EM IA" : "AI INVESTMENT"}
          </span>
        </article>

        <article className={styles.kpiCard}>
          <strong>+XX%</strong>
          <span>
            {language === "pt" ? "CRESCIMENTO" : "GROWTH"}
          </span>
        </article>

        <article className={styles.kpiCard}>
          <strong>US$ XXT</strong>
          <span>
            {language === "pt" ? "MERCADO DE IA" : "AI MARKET"}
          </span>
        </article>

      </section>


      {/* =====================================================
          MAIN CHARTS
          ===================================================== */}

      <section className={styles.mainGrid}>

        <article className={`${styles.chartCard} ${styles.marketGrowth}`}>

          <div className={styles.chartHeader}>
            <span>01</span>

            <h2>
              {language === "pt"
                ? "Crescimento do mercado de IA"
                : "AI market growth"}
            </h2>
          </div>

          <div className={styles.chartPlaceholder}>
            {/* gráfico entra aqui */}
          </div>

        </article>


        <article className={styles.chartCard}>

          <div className={styles.chartHeader}>
            <span>02</span>

            <h2>
              {language === "pt"
                ? "Adoção de IA por país"
                : "AI adoption by country"}
            </h2>
          </div>

          <div className={styles.chartPlaceholder}>
            {/* gráfico entra aqui */}
          </div>

        </article>

      </section>


      {/* =====================================================
          COUNTRY ANALYSIS
          ===================================================== */}

      <section className={styles.bottomGrid}>

        <article className={styles.chartCard}>

          <div className={styles.chartHeader}>
            <span>03</span>

            <h2>
              {language === "pt"
                ? "Usuários de IA por país"
                : "AI users by country"}
            </h2>
          </div>

          <div className={styles.chartPlaceholder}>
            {/* gráfico entra aqui */}
          </div>

        </article>


        <article className={styles.chartCard}>

          <div className={styles.chartHeader}>
            <span>04</span>

            <h2>
              {language === "pt"
                ? "Investimento em IA por país"
                : "AI investment by country"}
            </h2>
          </div>

          <div className={styles.chartPlaceholder}>
            {/* gráfico entra aqui */}
          </div>

        </article>

      </section>


      {/* =====================================================
          FOOTER
          ===================================================== */}

      <footer className={styles.dashboardFooter}>
        <span>THE AI ECONOMY</span>
        <span>VSI · 2025</span>
      </footer>

    </main>
  );
}

export default AIEconomy;