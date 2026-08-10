import styles from "./projetos.module.css";

function Projetos() {
  return (
    <section className={styles.projectsSection}>

      <div className={styles.projectsContent}>

        <span className={styles.sectionLabel}>
          COMING SOON
        </span>

        <h1>
          Something new is <em>taking shape.</em>
        </h1>

        <span className={styles.projectsLine}></span>

        <p>
          More coming soon.
        </p>

      </div>

    </section>
  );
}

export default Projetos;