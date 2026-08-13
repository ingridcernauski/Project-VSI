import styles from "./studyCase.module.css";
import { useLanguage } from "../../../context/LanguageContext"; 
import { useNavigate } from "react-router-dom";


  function StudyCase() {
  const { language } = useLanguage();
  const navigate = useNavigate();

  return (
    <main className={styles.studyCase}>

      {/* =====================================================
          HERO
          ===================================================== */}

      <section className={styles.hero}>

        <span className={styles.label}>
          {language === "pt" ? "ESTUDO DE CASO" : "CASE STUDY"}
        </span>

        <div className={styles.sideVisual} aria-hidden="true">

          {/* LEFT */}

          <div className={styles.leftVisual}>

            <span className={`${styles.dot} ${styles.dotL1}`}></span>
            <span className={`${styles.dot} ${styles.dotL2}`}></span>
            <span className={`${styles.dot} ${styles.dotL3}`}></span>

            <span className={`${styles.line} ${styles.lineL1}`}></span>
            <span className={`${styles.line} ${styles.lineL2}`}></span>
            <span className={`${styles.line} ${styles.lineL3}`}></span>

            <span className={`${styles.tick} ${styles.tickL1}`}></span>
            <span className={`${styles.tick} ${styles.tickL2}`}></span>

          </div>


          {/* RIGHT */}

          <div className={styles.rightVisual}>

            <span className={`${styles.dot} ${styles.dotR1}`}></span>
            <span className={`${styles.dot} ${styles.dotR2}`}></span>
            <span className={`${styles.dot} ${styles.dotR3}`}></span>

            <span className={`${styles.line} ${styles.lineR1}`}></span>
            <span className={`${styles.line} ${styles.lineR2}`}></span>
            <span className={`${styles.line} ${styles.lineR3}`}></span>

            <span className={`${styles.tick} ${styles.tickR1}`}></span>
            <span className={`${styles.tick} ${styles.tickR2}`}></span>

          </div>

        </div>


        <h1>
          THE AI <em>ECONOMY</em>
        </h1>


        <p>
          {language === "pt"
            ? "Como a inteligência artificial está transformando pessoas, trabalho e mercados."
            : "How artificial intelligence is changing people, work and markets."}
        </p>


        <span className={styles.year}>
          {language === "pt"
            ? "BRASIL · 2025"
            : "BRAZIL · 2025"}
        </span>

      </section>

{/* =====================================================
    CASE STUDY — NARRATIVE INTRO
    ===================================================== */}

<section className={styles.narrativeGrid}>

  {/* 01 — A PERGUNTA */}

  <article className={styles.narrativeCard}>

    <span className={styles.narrativeNumber}>
      01
    </span>

    <span className={styles.narrativeLabel}>
      {language === "pt"
        ? "A PERGUNTA"
        : "THE QUESTION"}
    </span>

    <h2>
      {language === "pt"
        ? "A inteligência artificial está mudando apenas a forma como trabalhamos — ou está criando uma nova economia?"
        : "Is artificial intelligence only changing the way we work — or is it creating a new economy?"}
    </h2>

  </article>


  {/* 02 — A HIPÓTESE */}

  <article className={styles.narrativeCard}>

    <span className={styles.narrativeNumber}>
      02
    </span>

    <span className={styles.narrativeLabel}>
      {language === "pt"
        ? "A HIPÓTESE"
        : "THE HYPOTHESIS"}
    </span>

    <h2>
      {language === "pt"
        ? "A IA pode estar criando uma nova camada da economia — mas seu impacto pode não ser distribuído igualmente."
        : "AI may be creating a new layer of the economy — but its impact may not be distributed equally."}
    </h2>

  </article>


  {/* 03 — O QUE INVESTIGAMOS */}

  <article className={styles.narrativeCard}>

    <span className={styles.narrativeNumber}>
      03
    </span>

    <span className={styles.narrativeLabel}>
      {language === "pt"
        ? "O QUE INVESTIGAMOS"
        : "WHAT WE INVESTIGATE"}
    </span>

    <div className={styles.investigationList}>

      <span>PEOPLE</span>
      <span>WORK</span>
      <span>MARKETS</span>

    </div>

  </article>

</section>  

<section className={styles.dataSection}>

  <div className={styles.dataHeader}>

    <span className={styles.dataNumber}>
      04
    </span>

    <span className={styles.dataLabel}>
      {language === "pt" ? "OS DADOS" : "THE DATA"}
    </span>

  </div>


  <div className={styles.dataIntro}>

  <div className={styles.dataIntroHeader}>

    <h2>
      {language === "pt"
        ? <>De onde vem a <em>evidência?</em></>
        : <>Where does the <em>evidence</em> come from?</>}
    </h2>

    <div className={styles.exploreData}>
<button
  type="button"
  className={styles.exploreButton}
  onClick={() => navigate("/projects/the-ai-economy/dash")}
>
  {language === "pt"
    ? "EXPLORAR OS DADOS"
    : "EXPLORE THE DATA"}

  <span>→</span>
</button>
    </div>

  </div>

  <p>
    {language === "pt"
      ? "Antes de interpretar o impacto da inteligência artificial, precisamos entender os dados que sustentam essa investigação."
      : "Before interpreting the impact of artificial intelligence, we need to understand the data behind the investigation."}
  </p>

</div>

<div className={styles.dataMetrics}>

 <div className={styles.dataMetric}>
    <span>01</span>

    <div className={styles.metricRow}>
      <strong>PEOPLE</strong>
      <b>1,8 bi</b>
    </div>

    <small>
  {language === "pt"
    ? "usuários de IA"
    : "AI users"}
</small>
  </div> 


  <div className={styles.dataMetric}>
    <span>02</span>

    <div className={styles.metricRow}>
      <strong>WORK</strong>
      <b>25%</b>
    </div>

    <small>
  {language === "pt"
    ? "dos empregos expostos"
    : "of jobs exposed"}
</small>
  </div>


  <div className={styles.dataMetric}>
    <span>03</span>

    <div className={styles.metricRow}>
      <strong>MARKETS</strong>
      <b>US$ 344,7 bi</b>
    </div>

    <small>
  {language === "pt"
    ? "investidos em IA"
    : "invested in AI"}
</small>
  </div>

</div>


  <div className={styles.dataVisual} aria-hidden="true">

    <div className={styles.dataGlow}></div>

    <span className={styles.dataSource}>
  SOURCE · DATASET / 2025
</span>

<div className={styles.dataVisual} aria-hidden="true">

  <div className={styles.dataGlow}></div>

  <div className={styles.dataLine}></div>

  <span className={`${styles.dataPoint} ${styles.dataPoint1}`}></span>
  <span className={`${styles.dataPoint} ${styles.dataPoint2}`}></span>
  <span className={`${styles.dataPoint} ${styles.dataPoint3}`}></span>
  <span className={`${styles.dataPoint} ${styles.dataPoint4}`}></span>
  <span className={`${styles.dataPoint} ${styles.dataPoint5}`}></span>

</div>

</div>

<footer className={styles.footer}>

  <div className={styles.footerTop}>

    <span className={styles.footerTitle}>
      THE AI <em>ECONOMY</em>
    </span>

    <span className={styles.footerMeta}>
      VSI · 2025
    </span>

  </div>

  <div className={styles.footerBottom}>

    <span>
      {language === "pt"
        ? "Uma investigação visual sobre inteligência artificial, pessoas, trabalho e mercados."
        : "A visual investigation into artificial intelligence, people, work and markets."}
    </span>

    <span>
      {language === "pt"
        ? "ESTUDO DE CASO"
        : "CASE STUDY"}
    </span>

  </div>

</footer>

</section>
    </main>
  );
}

export default StudyCase;