
import styles from "./projetos.module.css";
import { useLanguage } from "../../context/LanguageContext";


function Projetos() {
  const { language } = useLanguage();

  return (
    <section className={styles.projectsSection}>

      <div className={styles.projectsContent}>

        <span className={styles.sectionLabel}>
          {language === "pt" ? "EM BREVE" : "COMING SOON"}
        </span>


        <h1>
          {language === "pt" ? (
            <>
              Algo novo está <em>tomando forma.</em>
            </>
          ) : (
            <>
              Something new is <em>taking shape.</em>
            </>
          )}
        </h1>


        <span className={styles.projectsLine}></span>


        <p>
          {language === "pt"
            ? "Mais novidades em breve."
            : "More coming soon."}
        </p>

      </div>

    </section>
  );
}


export default Projetos;
