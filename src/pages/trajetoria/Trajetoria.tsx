
import styles from "./Trajetoria.module.css";
import {
  Database,
  BarChart3,
  GraduationCap,
  Target,
  BrainCircuit,
  Languages
} from "lucide-react";

import { useLanguage } from "../../context/LanguageContext";


function Trajetoria() {
  const { language } = useLanguage();

  return (
    <main className={styles.journey}>

      <section className={styles.journey}>

        <div className={styles.curve}>
          <div className={styles.flare}></div>
        </div>

        <div className={styles.journeyHeader}>
          <span>
            {language === "pt" ? "JORNADA" : "JOURNEY"}
          </span>
        </div>

        {/* TIMELINE */}

        <div className={styles.timeline}>

          <div className={styles.timelineLine}></div>

          <div className={styles.timelineItem}>
            <div className={styles.timelineIcon}>
              <Database size={20} strokeWidth={1.5} />
            </div>

            <span className={styles.timelineYear}>2016</span>

            <h3>
              {language === "pt" ? "Início" : "Beginning"}
            </h3>

            <p>
              {language === "pt"
                ? "Entrada no universo de dados."
                : "Entering the world of data."}
            </p>
          </div>


          <div className={styles.timelineItem}>
            <div className={styles.timelineIcon}>
              <BarChart3 size={20} strokeWidth={1.5} />
            </div>

            <span className={styles.timelineYear}>2019</span>

            <h3>
              {language === "pt" ? "Evolução" : "Growth"}
            </h3>

            <p>
              {language === "pt"
                ? "Expansão em BI e indicadores."
                : "Expanding into BI and performance indicators."}
            </p>
          </div>


          <div className={styles.timelineItem}>
            <div className={styles.timelineIcon}>
              <GraduationCap size={20} strokeWidth={1.5} />
            </div>

            <span className={styles.timelineYear}>2020</span>

            <h3>
              {language === "pt"
                ? "Especialização"
                : "Specialization"}
            </h3>

            <p>
              {language === "pt"
                ? "Dados • Power BI • Analytics."
                : "Data • Power BI • Analytics."}
            </p>
          </div>


          <div className={styles.timelineItem}>
            <div className={styles.timelineIcon}>
              <Target size={20} strokeWidth={1.5} />
            </div>

            <span className={styles.timelineYear}>2021</span>

            <h3>
              {language === "pt" ? "Estratégia" : "Strategy"}
            </h3>

            <p>
              {language === "pt"
                ? "Projetos de maior impacto."
                : "Higher-impact projects."}
            </p>
          </div>


          <div className={styles.timelineItem}>
            <div className={styles.timelineIcon}>
              <BrainCircuit size={20} strokeWidth={1.5} />
            </div>

            <span className={styles.timelineYear}>2026</span>

            <h3>
              {language === "pt"
                ? "Novas Fronteiras"
                : "New Frontiers"}
            </h3>

            <p>
              {language === "pt"
                ? "Inteligência Artificial • Programação • Tecnologia."
                : "Artificial Intelligence • Programming • Technology."}
            </p>
          </div>

        </div>

      </section>


      {/* =========================================================
          FORMAÇÃO & IDIOMAS
          ========================================================= */}

      <section className={styles.educationSection}>

        <div className={styles.educationHeader}>

          <span className={styles.sectionLabel}>
            {language === "pt"
              ? "FORMAÇÃO & IDIOMAS"
              : "EDUCATION & LANGUAGES"}
          </span>

          <h2>
            {language === "pt" ? (
              <>
                Formação <em>&</em> Idiomas
              </>
            ) : (
              <>
                Education <em>&</em> Languages
              </>
            )}
          </h2>

          <p></p>

        </div>


        <div className={styles.educationContent}>

          {/* FORMAÇÃO */}

          <div className={styles.educationColumn}>

            <div className={styles.educationColumnHeader}>
              <GraduationCap />

              <h3>
                {language === "pt" ? "FORMAÇÃO" : "EDUCATION"}
              </h3>
            </div>


            <div className={styles.educationItem}>

              <h4>
                {language === "pt"
                  ? "Pós-graduação em Gestão de Projetos"
                  : "Postgraduate Degree in Project Management"}
              </h4>

              <p>Anhembi Morumbi</p>

              <span className={styles.educationPeriod}>
                {language === "pt" ? "Em curso" : "In progress"}
              </span>

            </div>


            <div className={styles.educationItem}>

              <h4>
                {language === "pt"
                  ? "Produção Audiovisual"
                  : "Audiovisual Production"}
              </h4>

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

              <h3>
                {language === "pt" ? "IDIOMAS" : "LANGUAGES"}
              </h3>
            </div>


            <div className={styles.languageList}>

              <div className={styles.languageItem}>

                <span className={styles.languageName}>
                  {language === "pt" ? "Português" : "Portuguese"}
                </span>

                <span className={styles.languageLevel}>
                  {language === "pt" ? "NATIVO" : "NATIVE"}
                </span>

              </div>


              <div className={styles.languageItem}>

                <span className={styles.languageName}>
                  {language === "pt" ? "Inglês" : "English"}
                </span>

                <span className={styles.languageLevel}>
                  {language === "pt"
                    ? "C1 - AVANÇADO"
                    : "C1 - ADVANCED"}
                </span>

              </div>


              <div className={styles.languageItem}>

                <span className={styles.languageName}>
                  {language === "pt" ? "Francês" : "French"}
                </span>

                <span className={styles.languageLevel}>
                  {language === "pt"
                    ? "EM DESENVOLVIMENTO"
                    : "IN DEVELOPMENT"}
                </span>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* CURRICULUM */}

      <section className={styles.curriculumSection}>

        <div className={styles.curriculumHeader}>

          <span className={styles.sectionLabel}>
            {language === "pt" ? "CURRÍCULO" : "RESUME"}
          </span>

          <h2>
            {language === "pt" ? (
              <>
                Experiência <em>Profissional</em>
              </>
            ) : (
              <>
                Professional <em>Experience</em>
              </>
            )}
          </h2>

          <p>
            {language === "pt"
              ? "Profissional de Business Intelligence com experiência em dados, analytics e tecnologia, conectando visão de negócio, análise estratégica e soluções orientadas a resultados."
              : "Business Intelligence professional with experience in data, analytics, and technology, connecting business vision, strategic analysis, and results-driven solutions."}
          </p>

        </div>


        {/* =========================================================
            EXPERIÊNCIA PROFISSIONAL
            ========================================================= */}

        <section className={styles.experience}>

          {/* EXPERIÊNCIA 01 */}

          <div className={styles.experienceTimeline}>

            <div className={styles.experiencePeriod}>
              <span>10/2024 - 03/2026</span>

              <div className={styles.experienceDot}></div>
            </div>

            <div className={styles.experienceDotStart}></div>

            <div className={styles.experienceLine}></div>

          </div>


          <div className={`${styles.experienceContent} ${styles.experienceContentSecond}`}>

            <h3>
              Telefônica Brasil <em>(Vivo)</em>
            </h3>

            <h4>
              {language === "pt"
                ? "Analista Sênior de Dados | BI"
                : "Senior Data Analyst | BI"}
            </h4>

            <p className={styles.experienceIntro}>
              {language === "pt"
                ? "Liderança técnica em Business Intelligence, conectando dados, tecnologia e estratégia de negócio."
                : "Technical leadership in Business Intelligence, connecting data, technology, and business strategy."}
            </p>


            <div className={styles.experienceProjects}>

              <div className={styles.projectHighlight}>

                <span>01</span>

                <h5>
                  {language === "pt"
                    ? "Dashboards Executivos"
                    : "Executive Dashboards"}
                </h5>

                <p>
                  {language === "pt"
                    ? "Desenvolvimento de dashboards em Power BI para acompanhamento de KPIs e suporte à tomada de decisão."
                    : "Development of Power BI dashboards for KPI monitoring and decision-making support."}
                </p>

              </div>


              <div className={styles.projectHighlight}>

                <span>02</span>

                <h5>
                  {language === "pt"
                    ? "Apresentações para Diretoria"
                    : "Executive Presentations"}
                </h5>

                <p>
                  {language === "pt"
                    ? "Consolidação e análise de indicadores estratégicos para apresentações executivas e comunicação de insights."
                    : "Consolidation and analysis of strategic indicators for executive presentations and insight communication."}
                </p>

              </div>


              <div className={styles.projectHighlight}>

                <span>03</span>

                <h5>
                  Data & Analytics
                </h5>

                <p>
                  {language === "pt"
                    ? "Investigação de dados, consultas SQL, validação de informações e análise de inconsistências."
                    : "Data investigation, SQL queries, information validation, and inconsistency analysis."}
                </p>

              </div>

            </div>


            <div className={styles.experienceTags}>
              <span>POWER BI</span>
              <span>SQL</span>
              <span>DATA ANALYTICS</span>
              <span>BUSINESS INTELLIGENCE</span>
            </div>

          </div>

          <div className={styles.experienceSpacer}></div>


          {/* EXPERIÊNCIA 02 */}

          <div className={styles.experiencePeriodSecond}>

            <span>10/2022 - 10/2024</span>

            <div className={styles.experienceDot}></div>

          </div>

          <div className={styles.experienceDotStart}></div>


          <div className={`${styles.experienceContent} ${styles.experienceContentSecond}`}>

            <h3>
              Telefônica Brasil <em>(Vivo)</em>
            </h3>

            <h4>
              {language === "pt"
                ? "Analista Pleno de Dados | BI"
                : "Mid-Level Data Analyst | BI"}
            </h4>

            <p className={styles.experienceIntro}>
              {language === "pt"
                ? "Atuação em Business Intelligence, análise de dados e desenvolvimento de soluções para suporte às áreas de negócio."
                : "Worked across Business Intelligence, data analysis, and solution development to support business teams."}
            </p>


            <div className={styles.experienceProjects}>

              <div className={styles.projectHighlight}>

                <span>01</span>

                <h5>
                  SQL & Data Analytics
                </h5>

                <p>
                  {language === "pt"
                    ? "Desenvolvimento de consultas SQL, análise e validação de dados, consolidação de bases e identificação de inconsistências."
                    : "Development of SQL queries, data analysis and validation, data consolidation, and identification of inconsistencies."}
                </p>

              </div>


              <div className={styles.projectHighlight}>

                <span>02</span>

                <h5>
                  {language === "pt"
                    ? "Indicadores Estratégicos"
                    : "Strategic Indicators"}
                </h5>

                <p>
                  {language === "pt"
                    ? "Construção e consolidação de indicadores, apoio na definição de regras de negócio e suporte às áreas através de análises."
                    : "Development and consolidation of indicators, support in defining business rules, and analytical support for business teams."}
                </p>

              </div>


              <div className={styles.projectHighlight}>

                <span>03</span>

                <h5>
                  Dashboards & Business Support
                </h5>

                <p>
                  {language === "pt"
                    ? "Desenvolvimento de dashboards analíticos e participação em projetos de melhoria contínua orientados às necessidades do negócio."
                    : "Development of analytical dashboards and participation in continuous improvement projects aligned with business needs."}
                </p>

              </div>

            </div>


            <div className={styles.experienceTags}>
              <span>POWER BI</span>
              <span>SQL</span>
              <span>DATA ANALYTICS</span>
              <span>BUSINESS INTELLIGENCE</span>
            </div>

          </div>

          <div className={styles.experienceSpacer2}></div>


          {/* EXPERIÊNCIA 03 */}

          <div className={styles.experiencePeriodThird}>

            <span>03/2021 - 10/2022</span>

            <div className={styles.experienceDot}></div>

          </div>

          <div className={styles.experienceDotStart}></div>

          <div className={styles.experienceLine}></div>


          <h3>
            Telefônica Brasil <em>(Vivo)</em>
          </h3>

          <h4>
            {language === "pt"
              ? "Analista Júnior de Dados | BI"
              : "Junior Data Analyst | BI"}
          </h4>

          <p className={styles.experienceIntro}>
            {language === "pt"
              ? "Atuação em Business Intelligence, análise de dados e suporte às operações através de indicadores e soluções analíticas."
              : "Worked across Business Intelligence, data analysis, and operational support through performance indicators and analytical solutions."}
          </p>


          <div className={styles.experienceProjects}>

            <div className={styles.projectHighlight}>

              <span>01</span>

              <h5>
                {language === "pt"
                  ? "Monitoramento & Indicadores"
                  : "Monitoring & Indicators"}
              </h5>

              <p>
                {language === "pt"
                  ? "Monitoramento dos principais indicadores operacionais, desenvolvimento de relatórios gerenciais e acompanhamento de resultados."
                  : "Monitoring key operational indicators, developing management reports, and tracking performance."}
              </p>

            </div>


            <div className={styles.projectHighlight}>

              <span>02</span>

              <h5>
                {language === "pt"
                  ? "Dashboards & Análise de Dados"
                  : "Dashboards & Data Analysis"}
              </h5>

              <p>
                {language === "pt"
                  ? "Desenvolvimento de dashboards e análises de dados para suporte às operações e identificação de oportunidades de melhoria."
                  : "Development of dashboards and data analyses to support operations and identify improvement opportunities."}
              </p>

            </div>


            <div className={styles.projectHighlight}>

              <span>03</span>

              <h5>
                {language === "pt"
                  ? "Expansão da Rede de Fibra"
                  : "Fiber Network Expansion"}
              </h5>

              <p>
                {language === "pt"
                  ? "Apoio a projetos relacionados à expansão da rede de fibra óptica e análise de dados para suporte às decisões operacionais."
                  : "Support for fiber network expansion projects and data analysis to inform operational decisions."}
              </p>

            </div>

          </div>


          <div className={styles.experienceTags}>
            <span>POWER BI</span>
            <span>SQL</span>
            <span>DATA ANALYTICS</span>
            <span>BUSINESS INTELLIGENCE</span>
          </div>

        </section>

      </section>


      {/* =========================================================
          HARD & SOFT SKILLS
          ========================================================= */}

      <section className={styles.skillsSection}>

        <div className={styles.skillsTransition}></div>


        <div className={styles.skillsHeader}>

          <span>
            {language === "pt" ? "COMPETÊNCIAS" : "SKILLS"}
          </span>

          <h2>
            Hard Skills <em>&</em> Soft Skills
          </h2>

          <p>
            {language === "pt"
              ? "Conhecimento técnico aliado ao pensamento estratégico e à resolução de problemas orientada ao negócio."
              : "Technical expertise combined with strategic thinking and business-oriented problem solving."}
          </p>

        </div>


        <div className={styles.skillsContent}>

          {/* HARD SKILLS */}

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

              <span>Python</span>
              <span>Power Query</span>
              <span>Excel</span>
              <span>Tableau</span>
              <span>Data Analytics</span>
              <span>Business Intelligence</span>
              <span>AWS</span>

            </div>

          </div>


          {/* SOFT SKILLS */}

          <div className={styles.skillsBox}>

            <div className={styles.skillsColumnHeader}>
              <BrainCircuit />

              <h3>SOFT SKILLS</h3>
            </div>


            <div className={styles.softSkillsList}>

              <div className={styles.softSkill}>
                <span>01</span>

                <p>
                  {language === "pt"
                    ? "Pensamento estratégico"
                    : "Strategic thinking"}
                </p>
              </div>


              <div className={styles.softSkill}>
                <span>02</span>

                <p>
                  {language === "pt"
                    ? "Comunicação executiva"
                    : "Executive communication"}
                </p>
              </div>


              <div className={styles.softSkill}>
                <span>03</span>

                <p>
                  {language === "pt"
                    ? "Resolução de problemas"
                    : "Problem solving"}
                </p>
              </div>


              <div className={styles.softSkill}>
                <span>04</span>

                <p>
                  {language === "pt"
                    ? "Visão analítica"
                    : "Analytical thinking"}
                </p>
              </div>


              <div className={styles.softSkill}>
                <span>05</span>

                <p>
                  {language === "pt"
                    ? "Gestão de projetos"
                    : "Project management"}
                </p>
              </div>


              <div className={styles.softSkill}>
                <span>06</span>

                <p>
                  {language === "pt"
                    ? "Storytelling com dados"
                    : "Data storytelling"}
                </p>
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
