import styles from "./Executive.module.css";

import { useLanguage } from "../../context/LanguageContext";

import {
  BarChart3,
  TrendingUp,
  BrainCircuit,
  Cog,
  Target,
  MonitorSmartphone
} from "lucide-react";


export default function Executive() {
  const { language } = useLanguage();

  const pt = language === "pt";

  return (
    <section className={styles.executive} id="executive">

      <div className={styles.background}></div>

      <div className={styles.container}>

        {/* TOP */}

        <div className={styles.top}>

          {/* INTRO */}

          <div className={styles.intro}>

            <span className={styles.label}>
              {pt ? "PERFIL EXECUTIVO" : "EXECUTIVE PROFILE"}
            </span>

            <div className={styles.labelLine}></div>

            <h2 className={styles.title}>
              {pt ? (
                <>
                  Business Intelligence
                  <br />
                  que conecta estratégia,
                  <br />
                  dados e <span>decisão.</span>
                </>
              ) : (
                <>
                  Business Intelligence
                  <br />
                  connecting strategy,
                  <br />
                  data and <span>decision.</span>
                </>
              )}
            </h2>

            <p className={styles.description}>
              {pt
                ? "Mais de 9 anos transformando dados complexos em insights acionáveis, dashboards executivos e soluções analíticas que geram impacto real nos negócios."
                : "Over 9 years transforming complex data into actionable insights, executive dashboards, and analytical solutions that create real business impact."}
            </p>

          </div>


          {/* METRICS */}

          <div className={styles.metrics}>

            <div className={styles.metric}>

              <div className={styles.metricIcon}>
                <BarChart3 size={34} />
              </div>

              <h3>9+</h3>

              <h4>{pt ? "ANOS" : "YEARS"}</h4>

              <div className={styles.metricLine}></div>

              <p>
                {pt ? (
                  <>
                    de experiência em
                    <br />
                    Business Intelligence
                    <br />
                    e Analytics
                  </>
                ) : (
                  <>
                    of experience in
                    <br />
                    Business Intelligence
                    <br />
                    and Analytics
                  </>
                )}
              </p>

            </div>


            <div className={styles.metric}>

              <div className={styles.metricIcon}>
                <Target size={34} />
              </div>

              <h3>100+</h3>

              <h4>{pt ? "DASHBOARDS" : "DASHBOARDS"}</h4>

              <div className={styles.metricLine}></div>

              <p>
                {pt ? (
                  <>
                    executivos entregues
                    <br />
                    para tomada de decisão
                    <br />
                    estratégica
                  </>
                ) : (
                  <>
                    executive dashboards
                    <br />
                    delivered for strategic
                    <br />
                    decision-making
                  </>
                )}
              </p>

            </div>


            <div className={styles.metric}>

              <div className={styles.metricIcon}>
                <MonitorSmartphone size={34} />
              </div>

              <h3>40+</h3>

              <h4>{pt ? "PROJETOS" : "PROJECTS"}</h4>

              <div className={styles.metricLine}></div>

              <p>
                {pt ? (
                  <>
                    de BI, automação e
                    <br />
                    análise de dados com
                    <br />
                    impacto mensurável
                  </>
                ) : (
                  <>
                    in BI, automation and
                    <br />
                    data analytics with
                    <br />
                    measurable impact
                  </>
                )}
              </p>

            </div>

          </div>

        </div>


        <div className={styles.divider}></div>


        {/* BOTTOM */}

        <div className={styles.bottom}>

          {/* ESQUERDA */}

          <div className={styles.expertiseIntro}>

            <span className={styles.label}>
              {pt ? "EXPERTISE" : "EXPERTISE"}
            </span>

            <div className={styles.labelLine}></div>

            <h2 className={styles.expertiseTitle}>
              {pt ? (
                <>
                  Competências que
                  <br />
                  geram <span>valor.</span>
                </>
              ) : (
                <>
                  Skills that
                  <br />
                  create <span>value.</span>
                </>
              )}
            </h2>

            <p className={styles.expertiseDescription}>
              {pt
                ? "Atuação end-to-end: da estratégia à entrega, unindo análise crítica, tecnologia e visão de negócio para impulsionar resultados."
                : "End-to-end expertise: from strategy to delivery, combining critical analysis, technology, and business vision to drive results."}
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
                {pt
                  ? "Dashboards executivos e KPIs que direcionam decisões estratégicas."
                  : "Executive dashboards and KPIs that drive strategic decisions."}
              </p>

            </div>


            {/* Data Analytics */}

            <div className={styles.card}>

              <div className={styles.icon}>
                <TrendingUp size={42} />
              </div>

              <h3>
                Data <br />Analytics
              </h3>

              <div className={styles.cardLine}></div>

              <p>
                {pt
                  ? "Análises profundas que transformam dados em insights acionáveis."
                  : "Deep analysis that transforms data into actionable insights."}
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
                {pt
                  ? "Aplicação de IA para previsão, classificação e automação inteligente."
                  : "AI applications for prediction, classification, and intelligent automation."}
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
                {pt
                  ? "Automação de processos e rotinas para ganho de eficiência operacional."
                  : "Process and routine automation to improve operational efficiency."}
              </p>

            </div>


            {/* Data Strategy */}

            <div className={styles.card}>

              <div className={styles.icon}>
                <Target size={42} />
              </div>

              <h3>
                Data <br />Strategy
              </h3>

              <div className={styles.cardLine}></div>

              <p>
                {pt
                  ? "Estratégias de dados alinhadas ao negócio e geração de valor."
                  : "Data strategies aligned with business goals and value creation."}
              </p>

            </div>

          </div>

        </div>


        <div className={styles.divider}></div>


        <footer className={styles.footer}>

          <p>© 2026 Ingrid Cernauski</p>

          <span>
            Business Intelligence • Data Strategy • AI
          </span>

        </footer>

      </div>

    </section>
  );
}