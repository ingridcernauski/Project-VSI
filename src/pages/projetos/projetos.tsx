import styles from "./projetos.module.css";
import { useLanguage } from "../../context/LanguageContext";
import { Link } from "react-router-dom";

function Projetos() {
  const { language } = useLanguage();

  return (
    <section className={styles.projectsSection}>
      <div className={styles.projectsContent}>

        <span className={styles.sectionLabel}>
          {language === "pt" ? "PROJETOS" : "PROJECTS"}
        </span>

        <div className={styles.projectsGrid}>

          {/* =====================================================
              PROJETO 01 — THE AI ECONOMY
              ===================================================== */}

          <article className={styles.projectCard}>

            <span className={styles.projectNumber}>
  01
</span>

<span className={styles.projectTag}>
  ● POWER BI
</span>
            <div className={styles.projectInfo}>

              <h1>
                THE AI <em>ECONOMY</em>
              </h1>

              <p>
                {language === "pt"
                  ? "Como a inteligência artificial está transformando pessoas, trabalho e mercados."
                  : "How artificial intelligence is changing people, work and markets."}
              </p>

            </div>

            <Link
  to="/projects/the-ai-economy/study-case"
  className={styles.exploreButton}
>
  {language === "pt"
    ? "EXPLORAR DADOS →"
    : "EXPLORE DATA →"}
</Link>

          </article>

        </div>

      </div>
    </section>
  );
}

export default Projetos;