import styles from "./Hero.module.css";
import { Link } from "react-router-dom";


export default function Hero() {
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
            Um Framework de Business Intelligence.
          </h2>

          <p className={styles.description}>
            Transformando dados complexos em comunicação estratégica
            que impulsiona decisões, conecta pessoas, negócios e
            tecnologia através do Visual Storytelling.
          </p>

         <Link
  to="/metodologia"
  className={styles.cta}
>
  Conheça meu trabalho →
</Link>

        </div>

      </div>

    </section>
  );
}