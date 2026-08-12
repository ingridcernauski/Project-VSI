import styles from "./About.module.css";
import { Link } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext";


export default function About() {
  const { language } = useLanguage();

  return (
    <section className={styles.about} id="sobre">

      <div className={styles.container}>

        {/* ESQUERDA */}

        <div className={styles.left}>

          <span className={styles.label}>
            {language === "pt" ? "SOBRE MIM" : "ABOUT ME"}
          </span>

          <div className={styles.line}></div>

          <h2 className={styles.title}>
            {language === "pt"
              ? "Muito além dos dashboards."
              : "Beyond dashboards."}
          </h2>

          <p className={styles.text}>
            {language === "pt"
              ? "Minha carreira foi construída conectando dados, estratégia e comunicação para apoiar decisões que geram impacto real."
              : "My career has been built around connecting data, strategy, and communication to support decisions that create real impact."}
          </p>

          <p className={styles.text}>
            {language === "pt"
              ? "Ao longo de quase uma década, desenvolvi soluções de Business Intelligence para diferentes áreas do negócio, sempre com o mesmo propósito: transformar informações complexas em decisões simples, inteligentes e orientadas por dados."
              : "Over nearly a decade, I have developed Business Intelligence solutions for different areas of the business, always with the same purpose: turning complex information into simple, intelligent, and data-driven decisions."}
          </p>

          <p className={styles.text}>
            {language === "pt"
              ? "Hoje, esse propósito evoluiu para o"
              : "Today, this purpose has evolved into the"}
            <strong> Visual Storytelling Intelligence</strong>
            {language === "pt"
              ? ", uma metodologia que une análise, narrativa e experiência visual para transformar dados em conhecimento estratégico."
              : ", a methodology that combines analysis, storytelling, and visual experience to transform data into strategic knowledge."}
          </p>

          <Link
            to="/trajetoria"
            className={styles.button}
          >
            {language === "pt"
              ? "Conheça minha trajetória →"
              : "Discover my journey →"}
          </Link>

        </div>

        {/* DIREITA */}

        <div className={styles.right}>

          <img
            src="/images/about-photo.png"
            alt="Ingrid Cernauski"
            className={styles.photo}
          />

        </div>

      </div>

    </section>
  );
}