import styles from "./About.module.css";
import { Link } from "react-router-dom";


export default function About() {
  return (
    <section className={styles.about} id="sobre">

      <div className={styles.container}>

        {/* ESQUERDA */}

        <div className={styles.left}>

          <span className={styles.label}>
            SOBRE MIM
          </span>

          <div className={styles.line}></div>

          <h2 className={styles.title}>
            Muito além dos dashboards.
          </h2>

          <p className={styles.text}>
            Minha carreira foi construída conectando dados,
            estratégia e comunicação para apoiar decisões que
            geram impacto real.
          </p>

          <p className={styles.text}>
            Ao longo de quase uma década, desenvolvi soluções
            de Business Intelligence para diferentes áreas do
            negócio, sempre com o mesmo propósito: transformar
            informações complexas em decisões simples,
            inteligentes e orientadas por dados.
          </p>

          <p className={styles.text}>
            Hoje, esse propósito evoluiu para o
            <strong> Visual Storytelling Intelligence</strong>,
            uma metodologia que une análise, narrativa e
            experiência visual para transformar dados em
            conhecimento estratégico.
          </p>

          <Link
  to="/trajetoria"
  className={styles.button}
>
  Conheça minha trajetória →
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