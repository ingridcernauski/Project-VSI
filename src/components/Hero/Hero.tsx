import styles from "./Hero.module.css";
import { Link } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext";


export default function Hero() {
  const { language } = useLanguage();
  return (
    <section className={styles.hero}>

      {/* Imagem de fundo */}
      <img
        src="/images/hero-graph.png"
        alt="Visual Storytelling Intelligence"
        className={styles.backgroundGraph}
      />

      <div className={styles.content}>

        <div className={styles.left}>

          <h1 className={styles.title}>
            <span>Visual</span>
            <span>Storytelling</span>
            <span className={styles.highlight}>Intelligence</span>
          </h1>

          <div className={styles.line}></div>

          <h2 className={styles.subtitle}>
  {language === "pt"
    ? "Um Framework de Business Intelligence."
    : "A Business Intelligence Framework."}
</h2>

          <p className={styles.description}>
  {language === "pt"
    ? "Transformando dados complexos em comunicação estratégica que impulsiona decisões, conecta pessoas, negócios e tecnologia através do Visual Storytelling."
    : "Transforming complex data into strategic communication that drives decisions and connects people, business, and technology through Visual Storytelling."}
</p>

         <Link
  to="/metodologia"
  className={styles.cta}
>
  {language === "pt"
    ? "Conheça meu trabalho →"
    : "Discover my work →"}
</Link>

        </div>

      </div>

    </section>
  );
}