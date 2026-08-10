import styles from "./Trajetoria.module.css";
import {
  Database,
  BarChart3,
  GraduationCap,
  Target,
  BrainCircuit
} from "lucide-react";

import {  Languages } from "lucide-react";


function Trajetoria() {
  return (
    <main className={styles.journey}>

      <section className={styles.journey}>

  <div className={styles.curve}>
    <div className={styles.flare}></div>
  </div>

  <div className={styles.journeyHeader}>
    <span>JORNADA</span>

    {/*<h2>
      O caminho <em>até aqui.</em>
    </h2>*/}
  </div>


  {/*TIMELINE*/}

  <div className={styles.timeline}>

  <div className={styles.timelineLine}></div>

  <div className={styles.timelineItem}>
    <div className={styles.timelineIcon}>
  <Database size={20} strokeWidth={1.5} />
</div>
    <span className={styles.timelineYear}>2016</span>
    <h3>Início</h3>
    <p>Entrada no universo de dados.</p>
  </div>

  <div className={styles.timelineItem}>
    <div className={styles.timelineIcon}>
  <BarChart3 size={20} strokeWidth={1.5} />
</div>
    <span className={styles.timelineYear}>2019</span>
    <h3>Evolução</h3>
    <p>Expansão em Bl e indicadores.</p>
  </div>

  <div className={styles.timelineItem}>
    <div className={styles.timelineIcon}>
  <GraduationCap size={20} strokeWidth={1.5} />
</div>
    <span className={styles.timelineYear}>2020</span>
    <h3>Especialização</h3>
    <p>Dados • Power BI •
    Analytics.</p>
  </div>

  <div className={styles.timelineItem}>
    <div className={styles.timelineIcon}>
  <Target size={20} strokeWidth={1.5} />
</div>
    <span className={styles.timelineYear}>2021</span>
    <h3>Estratégia</h3>
    <p>Projetos de maior impacto.</p>
  </div>

    <div className={styles.timelineItem}>
    <div className={styles.timelineIcon}>
  <BrainCircuit size={20} strokeWidth={1.5} />
</div>
    <span className={styles.timelineYear}>2026</span>
    <h3>Novas Fronteiras</h3>
    <p>Inteligência Artificial •
      Programação • Tecnologia.</p>


  </div>

</div>

</section>

{/* =========================================================
    FORMAÇÃO & IDIOMAS
    ========================================================= */}

<section className={styles.educationSection}>

  <div className={styles.educationHeader}>

    <span className={styles.sectionLabel}>
      FORMAÇÃO & IDIOMAS
    </span>

    <h2>
      Formação <em>&</em> Idiomas
    </h2>

    <p>
    </p>

  </div>


  <div className={styles.educationContent}>

    {/* FORMAÇÃO */}

    <div className={styles.educationColumn}>

      <div className={styles.educationColumnHeader}>
        <GraduationCap />
        <h3>FORMAÇÃO</h3>
      </div>

      <div className={styles.educationItem}>
        <h4>Pós-graduação em Gestão de Projetos</h4>
        <p>Anhembi Morumbi</p>
        <span className={styles.educationPeriod}>
          Em curso
        </span>
      </div>

      <div className={styles.educationItem}>
        <h4>Produção Audiovisual</h4>
        <p>Faculdade das Américas</p>
        <span className={styles.educationPeriod}>
          2018
        </span>
      </div>

    </div>


    {/* IDIOMAS */}

    <div className={styles.educationColumn}>

      <div className={styles.educationColumnHeader}>
        <Languages />
        <h3>IDIOMAS</h3>
      </div>

      <div className={styles.languageList}>

        <div className={styles.languageItem}>
          <span className={styles.languageName}>
            Português
          </span>

          <span className={styles.languageLevel}>
            NATIVO
          </span>
        </div>

        <div className={styles.languageItem}>
          <span className={styles.languageName}>
            Inglês
          </span>

          <span className={styles.languageLevel}>
            C1 - AVANÇADO
          </span>
        </div>

        <div className={styles.languageItem}>
          <span className={styles.languageName}>
            Francês
          </span>

          <span className={styles.languageLevel}>
            EM DESENVOLVIMENTO
          </span>
        </div>

      </div>

    </div>

  </div>

</section>





{/*CURRICULUM*/}

<section className={styles.curriculumSection}>
  <div className={styles.curriculumHeader}>
  <span className={styles.sectionLabel}>CURRÍCULO</span>

  <h2>
    Experiência <em>Profissional</em>
  </h2>

  <p>
      Profissional de Business Intelligence com experiência em dados,
      analytics e tecnologia, conectando visão de negócio, análise
      estratégica e soluções orientadas a resultados.
    </p>
</div>

{/* =========================================================
    EXPERIÊNCIA PROFISSIONAL
========================================================= */}

<section className={styles.experience}>

  {/* TIMELINE */}

  <div className={styles.experienceTimeline}>

    <div className={styles.experiencePeriod}>
      <span>10/2024 - 03/2026</span>
        <div className={styles.experienceDot}></div>

    </div>

    <div className={styles.experienceDotStart}></div>

    <div className={styles.experienceLine}></div>

    

  </div>


  {/* CONTEÚDO */}

  <div className={`${styles.experienceContent} ${styles.experienceContentSecond}`}>

    <h3>
      Telefônica Brasil <em>(Vivo)</em>
    </h3>

    <h4>
      Analista Sênior de Dados | BI
    </h4>

    <p className={styles.experienceIntro}>
      Liderança técnica em Business Intelligence, conectando dados,
      tecnologia e estratégia de negócio.
    </p>


    {/* PROJETOS / DESTAQUES */}

    <div className={styles.experienceProjects}>

      <div className={styles.projectHighlight}>
        <span>01</span>

        <h5>
          Dashboards Executivos
        </h5>

        <p>
          Desenvolvimento de dashboards em Power BI para
          acompanhamento de KPIs e suporte à tomada de decisão.
        </p>
      </div>


      <div className={styles.projectHighlight}>
        <span>02</span>

        <h5>
          Apresentações para Diretoria
        </h5>

        <p>
          Consolidação e análise de indicadores estratégicos
          para apresentações executivas e comunicação de insights.
        </p>
      </div>


      <div className={styles.projectHighlight}>
        <span>03</span>

        <h5>
          Data & Analytics
        </h5>

        <p>
          Investigação de dados, consultas SQL, validação de
          informações e análise de inconsistências.
        </p>
      </div>

    </div>


    {/* TECNOLOGIAS */}

    <div className={styles.experienceTags}>
      <span>POWER BI</span>
      <span>SQL</span>
      <span>DATA ANALYTICS</span>
      <span>BUSINESS INTELLIGENCE</span>
    </div>

  </div>
  <div className={styles.experienceSpacer}></div>

{/* =========================================================
EXPERIÊNCIA 02 — ANALISTA PLENO DE DADOS | BI
========================================================= */}

{/* TIMELINE */}

<div className={styles.experiencePeriodSecond}>
  <span>10/2022 - 10/2024</span>
  <div className={styles.experienceDot}></div>
</div>

<div className={styles.experienceDotStart}></div>


{/* CONTEÚDO */}

  <div className={`${styles.experienceContent} ${styles.experienceContentSecond}`}>

<h3>
  Telefônica Brasil <em>(Vivo)</em>
</h3>

<h4>
  Analista Pleno de Dados | BI
</h4>

<p className={styles.experienceIntro}>
  Atuação em Business Intelligence, análise de dados e desenvolvimento
  de soluções para suporte às áreas de negócio.
</p>


{/* PROJETOS / DESTAQUES */}

<div className={styles.experienceProjects}>

  <div className={styles.projectHighlight}>
    <span>01</span>

    <h5>
      SQL & Data Analytics
    </h5>

    <p>
      Desenvolvimento de consultas SQL, análise e validação de dados,
      consolidação de bases e identificação de inconsistências.
    </p>
  </div>


  <div className={styles.projectHighlight}>
    <span>02</span>

    <h5>
      Indicadores Estratégicos
    </h5>

    <p>
      Construção e consolidação de indicadores, apoio na definição
      de regras de negócio e suporte às áreas através de análises.
    </p>
  </div>


  <div className={styles.projectHighlight}>
    <span>03</span>

    <h5>
      Dashboards & Business Support
    </h5>

    <p>
      Desenvolvimento de dashboards analíticos e participação em
      projetos de melhoria contínua orientados às necessidades do negócio.
    </p>
  </div>

</div>


{/* TECNOLOGIAS */}

<div className={styles.experienceTags}>
  <span>POWER BI</span>
  <span>SQL</span>
  <span>DATA ANALYTICS</span>
  <span>BUSINESS INTELLIGENCE</span>
</div>

  <div className={styles.experienceSpacer2}></div>


  


{/* =========================================================
EXPERIÊNCIA 03 — ANALISTA JÚNIOR DE DADOS | BI
========================================================= */}

{/* TIMELINE */}

<div className={styles.experiencePeriodThird}>
  <span>03/2021 - 10/2022</span>
  <div className={styles.experienceDot}></div>
</div>

<div className={styles.experienceDotStart}></div>

<div className={styles.experienceLine}></div>


{/* CONTEÚDO */}

<h3>
  Telefônica Brasil <em>(Vivo)</em>
</h3>

<h4>
  Analista Júnior de Dados | BI
</h4>

<p className={styles.experienceIntro}>
  Atuação em Business Intelligence, análise de dados e suporte
  às operações através de indicadores e soluções analíticas.
</p>


{/* PROJETOS / DESTAQUES */}

<div className={styles.experienceProjects}>

  <div className={styles.projectHighlight}>
    <span>01</span>

    <h5>
      Monitoramento & Indicadores
    </h5>

    <p>
      Monitoramento dos principais indicadores operacionais,
      desenvolvimento de relatórios gerenciais e acompanhamento
      de resultados.
    </p>
  </div>


  <div className={styles.projectHighlight}>
    <span>02</span>

    <h5>
      Dashboards & Análise de Dados
    </h5>

    <p>
      Desenvolvimento de dashboards e análises de dados para
      suporte às operações e identificação de oportunidades
      de melhoria.
    </p>
  </div>


  <div className={styles.projectHighlight}>
    <span>03</span>

    <h5>
      Expansão da Rede de Fibra
    </h5>

    <p>
      Apoio a projetos relacionados à expansão da rede de fibra
      óptica e análise de dados para suporte às decisões operacionais.
    </p>
  </div>

</div>


{/* TECNOLOGIAS */}

<div className={styles.experienceTags}>
  <span>POWER BI</span>
  <span>SQL</span>
  <span>DATA ANALYTICS</span>
  <span>BUSINESS INTELLIGENCE</span>
</div>
</div>
</section>


</section>

{/*HARD & SOFT SKILLS*/}
{/* =========================================================
    HARD & SOFT SKILLS
    ========================================================= */}

  

<section className={styles.skillsSection}>

  {/* TRANSIÇÃO */}

  <div className={styles.skillsTransition}></div>


  {/* CABEÇALHO */}

  <div className={styles.skillsHeader}>

    <span>
      COMPETÊNCIAS
    </span>

    <h2>
      Hard Skills <em>&</em> Soft Skills
    </h2>

    <p>
      Conhecimento técnico aliado ao pensamento estratégico
      e à resolução de problemas orientada ao negócio.
    </p>

  </div>


<div className={styles.skillsContent}>

 {/* =========================================================
    HARD SKILLS
    ========================================================= */}

<div className={styles.skillsBox}>

  <div className={styles.skillsColumnHeader}>
    <Database />
    <h3>HARD SKILLS</h3>
  </div>

  <div className={styles.hardSkillsList}>

    <span className={styles.featuredSkill}>
      Power BI
    </span>

    <span className={styles.featuredSkill}>
      SQL
    </span>

    <span className={styles.featuredSkill}>
      DAX
    </span>

    <span>
      Python
    </span>

    <span>
      Power Query
    </span>

    <span>
      Excel
    </span>

    <span>
      Tableau
    </span>

    <span>
      Data Analytics
    </span>

    <span>
      Business Intelligence
    </span>

    <span>
      AWS
    </span>

  </div>

</div>


{/* =========================================================
    SOFT SKILLS
    ========================================================= */}

<div className={styles.skillsBox}>

  <div className={styles.skillsColumnHeader}>
    <BrainCircuit />
    <h3>SOFT SKILLS</h3>
  </div>

  <div className={styles.softSkillsList}>

    <div className={styles.softSkill}>
      <span>01</span>
      <p>Pensamento estratégico</p>
    </div>

    <div className={styles.softSkill}>
      <span>02</span>
      <p>Comunicação executiva</p>
    </div>

    <div className={styles.softSkill}>
      <span>03</span>
      <p>Resolução de problemas</p>
    </div>

    <div className={styles.softSkill}>
      <span>04</span>
      <p>Visão analítica</p>
    </div>

    <div className={styles.softSkill}>
      <span>05</span>
      <p>Gestão de projetos</p>
    </div>

    <div className={styles.softSkill}>
      <span>06</span>
      <p>Storytelling com dados</p>
    </div>

  </div>

</div>
</div>
</section>
{/* =========================================================
    FOOTER
    ========================================================= */}

<section className={styles.footerSection}>

  <footer className={styles.footer}>

    <p>© 2026 Ingrid Cernauski</p>

    <span>
      Business Intelligence • Data Strategy • AI
    </span>

  </footer>

</section>


    </main>
  );
}

export default Trajetoria;