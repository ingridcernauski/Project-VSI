import styles from "./Metodologia.module.css";
import { Video, Eye, ChartNoAxesCombined, UserRound  } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";


export default function Metodologia() {
  const { language } = useLanguage();
  return (
    <main className={styles.page}>

<svg width="0" height="0" style={{ position: "absolute" }}>
  <defs>
    <linearGradient
      id="iconGradient"
      x1="0%"
      y1="0%"
      x2="100%"
      y2="100%"
    >
      <stop offset="0%" stopColor="#FFFFFF" />
      <stop offset="45%" stopColor="#DCC8FF" />
      <stop offset="100%" stopColor="#9B5CFF" />
    </linearGradient>
  </defs>
</svg>


      <section className={styles.intro}>

        <div
  style={{
    position: "relative",
    zIndex: 100,
    display: "block",
    margin: "0 0 4px",
    color: "#C9A8FF",
    fontFamily: "Manrope, sans-serif",
    fontSize: "11px",
    fontWeight: 500,
    lineHeight: 1,
    letterSpacing: ".48em",
    textTransform: "uppercase",
    opacity: 1,
    visibility: "visible",
  }}
>
  {language === "pt" ? "METODOLOGIA" : "METHODOLOGY"}
</div>

        <h1 className={styles.vsi}>
          VSI
        </h1>

        <h2 className={styles.name}>

          <span className={styles.storytelling}>
            VISUAL STORYTELLING
          </span>
          <br />
          <span className={styles.highlight}>
            INTELLIGENCE
          </span>

        </h2>


          <div className={styles.curve}>
  <span className={styles.flare}></span>


  <p className={styles.finalStatement}>
  {language === "pt" ? (
    <>
      Transformar informação em <span>significado.</span>
      <br />
      Transformar significado em <span>decisão.</span>
    </>
  ) : (
    <>
      Transform information into <span>meaning.</span>
      <br />
      Transform meaning into <span>decision.</span>
    </>
  )}
</p>



</div>


      </section>

<section className={styles.origin}>
<div className={styles.originHeader}>
  <span>{language === "pt" ? "A ORIGEM" : "THE ORIGIN"}</span>

  <div className={styles.originLine}></div>
</div>

   
  

  <div className={styles.originContent}>
    <h2 className={styles.originTitle}>
  {language === "pt" ? (
    <>
      Interseção entre <span>mundos.</span>
    </>
  ) : (
    <>
      Intersection between <span>worlds.</span>
    </>
  )}
</h2>

    <p className={styles.originText}>
  {language === "pt"
    ? "O VSI nasceu da união entre diferentes disciplinas e experiências que se complementam para gerar impacto real."
    : "VSI was born from the intersection of different disciplines and experiences that complement each other to create real impact."}
</p>



  </div>
</section>

{/*AUDIOVISUAL*/}

<section className={styles.intersection}>

  {/* AUDIOVISUAL */}
  <div className={styles.intersectionItem}>
    <div className={styles.intersectionIcon}>
      <Video />
    </div>

    <h3>{language === "pt" ? "AUDIOVISUAL" : "AUDIOVISUAL"}</h3>

<p>
  {language === "pt"
    ? "Narrativas visuais que conectam e comunicam ideias."
    : "Visual narratives that connect and communicate ideas."}
</p>
  </div>


{/*SEMIOTICA*/}
     <div className={styles.intersectionItem}>
    <div className={styles.intersectionIcon}>
      <Eye />
    </div>

    <h3>{language === "pt" ? "SEMÓTICA" : "SEMIOTICS"}</h3>

<p>
  {language === "pt"
    ? "Significados que transformam dados em compreensão."
    : "Meanings that transform data into understanding."}
</p>
  </div>


  {/*CENTRO*/}

      <div className={styles.intersectionCore}>
  <div className={`${styles.coreCircle} ${styles.circleTop}`}></div>
  <div className={`${styles.coreCircle} ${styles.circleRight}`}></div>
  <div className={`${styles.coreCircle} ${styles.circleBottom}`}></div>
  <div className={`${styles.coreCircle} ${styles.circleLeft}`}></div>
  <div className={styles.coreOrbit}></div>
  <div className={styles.coreGlow}></div>
  <div className={styles.corePoint}></div>
  <div className={styles.orbitPointTop}></div>
<div className={styles.orbitPointRight}></div>
<div className={styles.orbitPointBottom}></div>
<div className={styles.orbitPointLeft}></div>
</div>



{/*DADOS*/}


      <div className={styles.intersectionItem}>
    <div className={styles.intersectionIcon}>
      <ChartNoAxesCombined />
    </div>

    <h3>{language === "pt" ? "DADOS" : "DATA"}</h3>

<p>
  {language === "pt"
    ? "Informações que revelam padrões e geram inteligência."
    : "Information that reveals patterns and generates intelligence."}
</p>
  </div>


{/*NEGOCIO*/}


      <div className={styles.intersectionItem}>
    <div className={styles.intersectionIcon}>
      <UserRound />
    </div>

    <h3>{language === "pt" ? "NEGÓCIO" : "BUSINESS"}</h3>

<p>
  {language === "pt"
    ? "Contexto que transforma insights em decisões e resultados."
    : "Context that transforms insights into decisions and results."}
</p>
  </div>

</section>

{/*METODO*/}

<section className={styles.methodSection}>

  <div className={styles.methodHeader}>
  <span>{language === "pt" ? "O MÉTODO" : "THE METHOD"}</span>
  <div className={styles.methodLine}></div>
</div>




</section>



<section className={styles.methodExplanation}>

  <div className={styles.methodIntro}>
    <h2>
  {language === "pt"
    ? "Por que Storytelling e Semiótica?"
    : "Why Storytelling and Semiotics?"}
</h2>

    <p>
  {language === "pt" ? (
    <>
      Um relatório não precisa apenas mostrar dados.
      Precisa fazer com que{" "}
      <span>Storytelling e Semiótica</span>{" "}
      sejam compreendidos.
    </>
  ) : (
    <>
      A report should not simply display data.
      It needs to make{" "}
      <span>Storytelling and Semiotics</span>{" "}
      understandable.
    </>
  )}
</p>
  </div>


  <div className={styles.methodColumns}>

    <article className={styles.methodColumn}>

      <div className={styles.methodIcon}>
        <Video />
      </div>

      <h3>
  {language === "pt"
    ? "O que é Storytelling?"
    : "What is Storytelling?"}
</h3>

      <p>
  {language === "pt"
    ? "É a construção de uma narrativa a partir das informações apresentadas. Em um relatório, significa organizar dados, análises e evidências em uma sequência que facilite a compreensão do contexto, destaque os pontos relevantes e conduza o leitor até a conclusão."
    : "It is the construction of a narrative from the information presented. In a report, it means organizing data, analysis, and evidence in a sequence that facilitates understanding of the context, highlights relevant points, and guides the reader toward a conclusion."}
</p>

      <p>
  {language === "pt"
    ? "Não se trata de contar uma história fictícia, mas de definir o que precisa ser mostrado, em qual ordem e com qual contexto para que a informação faça sentido."
    : "It is not about telling a fictional story, but about defining what needs to be shown, in what order, and with what context so that the information makes sense."}
</p>

    </article>


    <article className={styles.methodColumn}>

      <div className={styles.methodIcon}>
        <Eye />
      </div>

      <h3>
  {language === "pt"
    ? "O que é Semiótica?"
    : "What is Semiotics?"}
</h3>

      <p>
  {language === "pt"
    ? "É o estudo dos significados construídos por signos, símbolos, imagens, palavras e relações visuais."
    : "It is the study of meanings constructed through signs, symbols, images, words, and visual relationships."}
</p>

      <p>
  {language === "pt"
    ? "Aplicada a um relatório, ajuda a compreender como uma informação é percebida e interpretada."
    : "Applied to a report, it helps us understand how information is perceived and interpreted."}
</p>

      <p>
  {language === "pt"
    ? "Cores, formas, hierarquia, ícones, gráficos, títulos e até a posição de um elemento na página comunicam algo e influenciam a leitura dos dados."
    : "Colors, shapes, hierarchy, icons, charts, titles, and even the position of an element on the page communicate meaning and influence how data is read."}
</p>

    </article>


    <article className={styles.methodColumn}>

      <div className={styles.methodIcon}>
        <ChartNoAxesCombined />
      </div>

      <h3>
  {language === "pt"
    ? "Como trabalham juntas?"
    : "How do they work together?"}
</h3>

      <p>
  {language === "pt"
    ? "A Semiótica orienta como os elementos comunicam significado. O Storytelling organiza esses significados em uma narrativa compreensível."
    : "Semiotics guides how elements communicate meaning. Storytelling organizes those meanings into an understandable narrative."}
</p>

      <p>
  {language === "pt"
    ? "Assim, o relatório não apenas apresenta informações, mas estabelece uma leitura coerente entre dados, contexto e interpretação."
    : "In this way, the report does not simply present information, but establishes a coherent connection between data, context, and interpretation."}
</p>

      <p>
  {language === "pt"
    ? "O resultado é uma comunicação clara, que conecta informação à decisão."
    : "The result is clear communication that connects information to decision-making."}
</p>

    </article>

  </div>

  {/*PRATICA*/}

  <div className={styles.practiceSection}>

  <div className={styles.practiceIntro}>

    <h2>
  {language === "pt" ? "Na prática" : "In practice"}
</h2>

   <p>
  {language === "pt"
    ? "A aplicação desses conceitos pode ser percebida ao comparar uma apresentação que apenas exibe os dados com outra que organiza a informação para conduzir a leitura. A diferença está em como o leitor interpreta, compreende e prioriza o que vê, e nas decisões que consegue tomar a partir disso."
    : "The application of these concepts can be seen by comparing a presentation that simply displays data with one that organizes information to guide the reading. The difference lies in how the reader interprets, understands, and prioritizes what they see, and in the decisions they can make from it."}
</p>


  </div>
  </div>

  {/* modelos de amostra entram aqui */}
{/* MODELOS DE AMOSTRA */}

<div className={styles.comparison}>

  {/* SEM STORYTELLING */}

  <div className={styles.reportExample}>

    <div className={styles.reportHeader}>

      <div className={styles.reportStatus}>×</div>
      
      <h3>Sem Storytelling</h3>

      <h3>
  {language === "pt"
    ? "Sem Storytelling"
    : "Without Storytelling"}
</h3>

<p>
  {language === "pt"
    ? "Informação solta. Leitura trabalhosa."
    : "Scattered information. Difficult reading."}
</p>
    </div>

   <div className={styles.reportPlaceholder}>
  <img src="/images/dashnok.png" alt="Dashboard sem Storytelling" />
</div>

    <p className={styles.reportConclusion}>
  <div className={styles.conclusionIcon}>i</div>

  {language === "pt"
    ? "O leitor precisa interpretar os dados, identificar o que é relevante e conectar as informações por conta própria."
    : "The reader must interpret the data, identify what is relevant, and connect the information on their own."}
</p>

  </div>


  {/* TRANSIÇÃO */}

  <div className={styles.comparisonArrow}>
    →
  </div>


  {/* COM STORYTELLING + SEMIÓTICA */}

  

  <div className={`${styles.reportExample} ${styles.reportHighlight}`}>

    <div className={styles.reportHeader}>

      <div className={styles.reportStatus}>✓</div>

      <h3>
  {language === "pt"
    ? "Com Storytelling + Semiótica"
    : "With Storytelling + Semiotics"}
</h3>

<p>
  {language === "pt"
    ? "Informação organizada. Leitura clara. Insight imediato."
    : "Organized information. Clear reading. Immediate insight."}
</p>

    </div>

    <div className={styles.reportPlaceholder}>
      <img src="/images/dashok.png" alt="Dashboard com Storytelling e Semiótica" />
</div>

   <div className={styles.reportConclusion}>
  <div className={styles.conclusionIcon}>ϟ</div>

  <p>
    {language === "pt" ? (
      <>
        A narrativa guia a leitura. Os elementos visuais destacam o que
        importa. O insight é compreendido em segundos e{" "}
        <span className={styles.highlightConclusion}>
          sustenta a decisão.
        </span>
      </>
    ) : (
      <>
        The narrative guides the reading. Visual elements highlight what
        matters. The insight is understood in seconds and{" "}
        <span className={styles.highlightConclusion}>
          supports decision-making.
        </span>
      </>
    )}
  </p>
</div>


  </div>

</div>

</section>

{/* =====================================================
    RESULTADO
===================================================== */}

<section className={styles.result}>

  <div className={styles.resultHeader}>
    <span>
  {language === "pt" ? "RESULTADO" : "RESULT"}
</span>
  </div>

  <div className={styles.resultContent}>

    <h2 className={styles.resultTitle}>
  {language === "pt" ? (
    <>
      O resultado de transformar dados em <span>narrativa</span>
    </>
  ) : (
    <>
      The result of transforming data into <span>narrative</span>
    </>
  )}
</h2>

    <p className={styles.resultText}>
  {language === "pt"
    ? "Quando a informação é organizada para conduzir a leitura, o relatório deixa de apenas apresentar dados e passa a apoiar decisões."
    : "When information is organized to guide the reading, the report stops simply presenting data and starts supporting decision-making."}
</p>

  </div>

</section>  

{/* =========================================================
    NÃO É APENAS ESTÉTICA
   ========================================================= */}

<section className={styles.visualLanguage}>

  <div className={styles.visualLanguageHeader}>

    <h2>
  {language === "pt"
    ? "Não é apenas estética"
    : "It is not just aesthetics"}
</h2>

    <p>
  {language === "pt"
    ? "A aplicação de Storytelling e Semiótica em um relatório não tem como objetivo apenas tornar a informação mais agradável visualmente. Cada escolha visual interfere na forma como o leitor percebe, interpreta e prioriza uma informação."
    : "Applying Storytelling and Semiotics to a report is not simply about making information more visually appealing. Every visual choice affects how the reader perceives, interprets, and prioritizes information."}
</p>

  </div>


  <div className={styles.visualPrinciples}>

    <div className={styles.visualPrinciple}>

      <div className={styles.principleIcon}>
        <span>△</span>
      </div>

      <h3>{language === "pt" ? "A hierarquia" : "Hierarchy"}</h3>

<p>
  {language === "pt"
    ? "Define o que será visto primeiro na leitura e o que será percebido como mais importante."
    : "Defines what will be seen first and what will be perceived as most important."}
</p>

    </div>


    <div className={styles.visualConnector}></div>


    <div className={styles.visualPrinciple}>

      <div className={styles.principleIcon}>
  <span>●●●</span>
</div>

      <h3>{language === "pt" ? "As cores" : "Colors"}</h3>

<p>
  {language === "pt"
    ? "Define o que o olhar percebe e prioriza. Evidenciam diferenças, alertas e tendências."
    : "Define what the eye perceives and prioritizes. They highlight differences, alerts, and trends."}
</p>

    </div>


    <div className={styles.visualConnector}></div>


    <div className={styles.visualPrinciple}>

      <div className={styles.principleIcon}>
        <span>⊞</span>
      </div>

      <h3>{language === "pt" ? "A disposição" : "Layout"}</h3>

<p>
  {language === "pt"
    ? "Organiza os elementos, aproxima informações e evidencia suas relações."
    : "Organizes elements, brings information together, and highlights their relationships."}
</p>

    </div>


    <div className={styles.visualConnector}></div>


    <div className={styles.visualPrinciple}>

      <div className={styles.principleIcon}>
<span className={styles.chartIcon}>
  <i></i><i></i><i></i>
</span>      </div>

      <h3>
  {language === "pt"
    ? "Gráficos e formas"
    : "Charts and shapes"}
</h3>

<p>
  {language === "pt"
    ? "Evidenciam padrões, tendências e relações que orientam a leitura dos dados."
    : "Highlight patterns, trends, and relationships that guide the reading of data."}
</p>

    </div>


    <div className={styles.visualConnector}></div>


    <div className={styles.visualPrinciple}>

      <div className={styles.principleIcon}>
        <span>☰</span>
      </div>

      <h3>
  {language === "pt"
    ? "Títulos e textos"
    : "Titles and text"}
</h3>

<p>
  {language === "pt"
    ? "Guiam a leitura, contextualizam os dados e direcionam a compreensão."
    : "Guide the reading, provide context, and direct understanding."}
</p>

    </div>

  </div>


  <div className={styles.visualLanguageConclusion}>

   <p>
  {language === "pt"
    ? "Essas escolhas orientam o que o leitor entende como mais importante, quais relações consegue perceber e quais informações utiliza para formar uma conclusão."
    : "These choices guide what the reader understands as most important, which relationships they perceive, and which information they use to form a conclusion."}
</p>

    <p>
  {language === "pt" ? (
    <>
      Por isso, em um relatório orientado à decisão,
      <strong> design e narrativa não são elementos decorativos.</strong>
      Eles fazem parte da própria comunicação da análise.
    </>
  ) : (
    <>
      Therefore, in a decision-oriented report,
      <strong> design and narrative are not decorative elements.</strong>
      They are part of the analysis itself.
    </>
  )}
</p>

  </div>


  <div className={styles.visualDecision}>
<div className={styles.quoteMark}>“</div>
    <p>
  {language === "pt" ? (
    <>
      Quanto mais clara for a leitura da informação,
      menor é a distância entre o dado, a
      <span> compreensão</span> e a
      <span> decisão.</span>
    </>
  ) : (
    <>
      The clearer the information is presented,
      the shorter the distance between data,
      <span> understanding</span>, and
      <span> decision.</span>
    </>
  )}
</p>

  </div>

</section>
<footer  className={styles.footer}>

  <p>© 2026 Ingrid Cernauski</p>

  <span>
    Business Intelligence • Data Strategy • AI
  </span>

</footer>

    </main>
  );
}


