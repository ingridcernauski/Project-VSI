import styles from "./Executive.module.css";


import {
  BarChart3,
  TrendingUp,
  BrainCircuit,
  Cog,
  Target,
  MonitorSmartphone
} from "lucide-react";

export default function Executive() {
  return (
    <section className={styles.executive} id="executive">

      <div className={styles.background}></div>

      <div className={styles.container}>

        {/* ==========================================
            TOP
        ========================================== */}

        <div className={styles.top}>

          {/* INTRO */}

          <div className={styles.intro}>

            <span className={styles.label}>
              PERFIL EXECUTIVO
            </span>

            <div className={styles.labelLine}></div>

            <h2 className={styles.title}>
              Business Intelligence
              <br />
              que conecta estratégia,
              <br />
              dados e <span>decisão.</span>
            </h2>

            <p className={styles.description}>
              Mais de 9 anos transformando dados complexos em
              insights acionáveis, dashboards executivos e soluções
              analíticas que geram impacto real nos negócios.
            </p>

          </div>

          {/* METRICS */}

          <div className={styles.metrics}>

            <div className={styles.metric}>

              <div className={styles.metricIcon}>
             <BarChart3 size={34}/>
</div>

              <h3>9+</h3>

              <h4>ANOS</h4>

              <div className={styles.metricLine}></div>

              <p>
                de experiência em
                <br />
                Business Intelligence
                <br />
                e Analytics
              </p>

            </div>

            <div className={styles.metric}>

              

              <div className={styles.metricIcon}>
              <Target size={34}/>
              </div>

              <h3>100+</h3>

              <h4>DASHBOARDS</h4>

              <div className={styles.metricLine}></div>

              <p>
                executivos entregues
                <br />
                para tomada de decisão
                <br />
                estratégica
              </p>

            </div>

            <div className={styles.metric}>

              

             <div className={styles.metricIcon}>
              <MonitorSmartphone size={34}/>
</div>

              <h3>40+</h3>

              <h4>PROJETOS</h4>

              <div className={styles.metricLine}></div>

              <p>
                de BI, automação e
                <br />
                análise de dados com
                <br />
                impacto mensurável
              </p>

            </div>

          </div>

        </div>

        <div className={styles.divider}></div>

        {/* ==========================================
            BOTTOM
        ========================================== */}

        <div className={styles.bottom}>

          {/* ESQUERDA */}

          <div className={styles.expertiseIntro}>

            <span className={styles.label}>
              EXPERTISE
            </span>

            <div className={styles.labelLine}></div>

            <h2 className={styles.expertiseTitle}>
              Competências que
              <br />
              geram <span>valor.</span>
            </h2>

            <p className={styles.expertiseDescription}>
              Atuação end-to-end: da estratégia à entrega,
              unindo análise crítica, tecnologia e visão
              de negócio para impulsionar resultados.
            </p>

          </div>

       {/* CARDS */}

<div className={styles.cards}>

  {/* Business Intelligence */}

  <div className={styles.card}>

    <div className={styles.icon}>
      <BarChart3 size={42} />
    </div>

    <h3>Business Intelligence</h3>

    <div className={styles.cardLine}></div>

    <p>
      Dashboards executivos e KPIs que direcionam
      decisões estratégicas.
    </p>

  </div>

  {/* Data Analytics */}

  <div className={styles.card}>

    <div className={styles.icon}>
      <TrendingUp size={42} />
    </div>

    <h3>Data   <br />Analytics</h3>

    <div className={styles.cardLine}></div>

    <p>
      Análises profundas que transformam
      dados em insights acionáveis.
    </p>

  </div>

  {/* Artificial Intelligence */}

  <div className={styles.card}>

    <div className={styles.icon}>
      <BrainCircuit size={42} />
    </div>

    <h3>Artificial Intelligence</h3>

    <div className={styles.cardLine}></div>

    <p>
      Aplicação de IA para previsão,
      classificação e automação inteligente.
    </p>

  </div>

  {/* Process Automation */}

  <div className={styles.card}>

    <div className={styles.icon}>
      <Cog size={42} />
    </div>

    <h3>Process Automation</h3>

    <div className={styles.cardLine}></div>

    <p>
      Automação de processos e rotinas
      para ganho de eficiência operacional.
    </p>

  </div>

  {/* Data Strategy */}

  <div className={styles.card}>

    <div className={styles.icon}>
      <Target size={42} />
    </div>

    <h3>Data   <br />Strategy</h3>

    <div className={styles.cardLine}></div>

    <p>
      Estratégias de dados alinhadas
      ao negócio e geração de valor.
    </p>

</div> {/* cards */}
 </div> {/* card */}

</div> {/* bottom */}

<div className={styles.divider}></div>

<footer className={styles.footer}>

  <p>© 2026 Ingrid Cernauski</p>

  <span>
    Business Intelligence • Data Strategy • AI
  </span>

</footer>

</div> {/* container */}

</section>

);
}