import styles from "./Metodologia.module.css";
import { Video, Eye, ChartNoAxesCombined, UserRound  } from "lucide-react";


export default function Metodologia() {
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
  METODOLOGIA
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
  Transformar informação em <span>significado.</span>
  <br />
  Transformar significado em <span>decisão.</span>
</p>



</div>


      </section>

<section className={styles.origin}>
<div className={styles.originHeader}>
  <span>A ORIGEM</span>

  <div className={styles.originLine}></div>
</div>

   
  

  <div className={styles.originContent}>
    <h2 className={styles.originTitle}>
  Interseção entre <span>mundos.</span>
</h2>

    <p className={styles.originText}>
  O VSI nasceu da união entre diferentes disciplinas e experiências que se
  complementam para gerar impacto real.
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

    <h3>AUDIOVISUAL</h3>

    <p>
      Narrativas visuais que conectam e comunicam ideias.
    </p>
  </div>


{/*SEMIOTICA*/}
     <div className={styles.intersectionItem}>
    <div className={styles.intersectionIcon}>
      <Eye />
    </div>

    <h3>SEMÓTICA</h3>

    <p>
      Significados que transformam dados em compreensão.
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

    <h3>DADOS</h3>

    <p>
      Informações que revelam padrões e geram inteligência.
    </p>
  </div>


{/*NEGOCIO*/}


      <div className={styles.intersectionItem}>
    <div className={styles.intersectionIcon}>
      <UserRound />
    </div>

    <h3>NEGÓCIO</h3>

    <p>
      Contexto que transforma insights em decisões e resultados.
    </p>
  </div>

</section>

{/*METODO*/}

<section className={styles.methodSection}>

  <div className={styles.methodHeader}>
  <span>O MÉTODO</span>
  <div className={styles.methodLine}></div>
</div>




</section>



<section className={styles.methodExplanation}>

  <div className={styles.methodIntro}>
    <h2>Por que Storytelling e Semiótica?</h2>

    <p>
  Um relatório não precisa apenas mostrar dados.
  Precisa fazer com que{" "}
  <span>Storytelling e Semiótica</span>{" "}
  sejam compreendidos.
</p>
  </div>


  <div className={styles.methodColumns}>

    <article className={styles.methodColumn}>

      <div className={styles.methodIcon}>
        <Video />
      </div>

      <h3>O que é Storytelling?</h3>

      <p>
        É a construção de uma narrativa a partir das informações apresentadas.
        Em um relatório, significa organizar dados, análises e evidências em
        uma sequência que facilite a compreensão do contexto, destaque os
        pontos relevantes e conduza o leitor até a conclusão.
      </p>

      <p>
        Não se trata de contar uma história fictícia, mas de definir o que
        precisa ser mostrado, em qual ordem e com qual contexto para que a
        informação faça sentido.
      </p>

    </article>


    <article className={styles.methodColumn}>

      <div className={styles.methodIcon}>
        <Eye />
      </div>

      <h3>O que é Semiótica?</h3>

      <p>
        É o estudo dos significados construídos por signos, símbolos, imagens,
        palavras e relações visuais.
      </p>

      <p>
        Aplicada a um relatório, ajuda a compreender como uma informação é
        percebida e interpretada.
      </p>

      <p>
        Cores, formas, hierarquia, ícones, gráficos, títulos e até a posição
        de um elemento na página comunicam algo e influenciam a leitura dos
        dados.
      </p>

    </article>


    <article className={styles.methodColumn}>

      <div className={styles.methodIcon}>
        <ChartNoAxesCombined />
      </div>

      <h3>Como trabalham juntas?</h3>

      <p>
        A Semiótica orienta como os elementos comunicam significado.
        O Storytelling organiza esses significados em uma narrativa
        compreensível.
      </p>

      <p>
        Assim, o relatório não apenas apresenta informações, mas estabelece
        uma leitura coerente entre dados, contexto e interpretação.
      </p>

      <p>
        O resultado é uma comunicação clara, que conecta informação à decisão.
      </p>

    </article>

  </div>

  {/*PRATICA*/}

  <div className={styles.practiceSection}>

  <div className={styles.practiceIntro}>

    <h2>Na prática</h2>

    <p>
   A aplicação desses conceitos pode ser percebida ao 
   comparar uma apresentação que apenas exibe os dados 
   com outra que organiza a informação para conduzir a 
   leitura. A diferença está em como o leitor interpreta, 
   compreende e prioriza o que vê,
    e nas decisões que consegue tomar a partir disso.
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

      <p>
        Informação solta. Leitura trabalhosa.
      </p>
    </div>

   <div className={styles.reportPlaceholder}>
  <img src="/images/dashnok.png" alt="Dashboard sem Storytelling" />
</div>

    <p className={styles.reportConclusion}>
       <div className={styles.conclusionIcon}>i</div>
      O leitor precisa interpretar os dados, identificar o que é
      relevante e conectar as informações por conta própria.
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

      <h3>Com Storytelling + Semiótica</h3>

      <p>
        Informação organizada. Leitura clara. Insight imediato.
      </p>
    </div>

    <div className={styles.reportPlaceholder}>
      <img src="/images/dashok.png" alt="Dashboard com Storytelling e Semiótica" />
</div>

   <div className={styles.reportConclusion}>
  <div className={styles.conclusionIcon}>ϟ</div>

  <p>
    A narrativa guia a leitura. Os elementos visuais destacam o que importa.
    O insight é compreendido em segundos e{" "}
    <span className={styles.highlightConclusion}>
      sustenta a decisão.
    </span>
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
    <span>RESULTADO</span>
  </div>

  <div className={styles.resultContent}>

    <h2 className={styles.resultTitle}>
      O resultado de transformar dados em <span>narrativa</span>
    </h2>

    <p className={styles.resultText}>
      Quando a informação é organizada para conduzir a leitura, o relatório
      deixa de apenas apresentar dados e passa a apoiar decisões.
    </p>

  </div>

</section>  

{/* =========================================================
    NÃO É APENAS ESTÉTICA
   ========================================================= */}

<section className={styles.visualLanguage}>

  <div className={styles.visualLanguageHeader}>

    <h2>Não é apenas estética</h2>

    <p>
      A aplicação de Storytelling e Semiótica em um relatório não tem como
      objetivo apenas tornar a informação mais agradável visualmente.
      Cada escolha visual interfere na forma como o leitor percebe,
      interpreta e prioriza uma informação.
    </p>

  </div>


  <div className={styles.visualPrinciples}>

    <div className={styles.visualPrinciple}>

      <div className={styles.principleIcon}>
        <span>△</span>
      </div>

      <h3>A hierarquia</h3>

      <p>
        Define o que será visto 
        primeiro na leitura e o que será 
        percebido como mais importante.
      </p>

    </div>


    <div className={styles.visualConnector}></div>


    <div className={styles.visualPrinciple}>

      <div className={styles.principleIcon}>
  <span>●●●</span>
</div>

      <h3>As cores</h3>

      <p>
        Define o que o olhar percebe e prioriza.
        Evidenciam diferenças, alertas 
        e tendências.

      </p>

    </div>


    <div className={styles.visualConnector}></div>


    <div className={styles.visualPrinciple}>

      <div className={styles.principleIcon}>
        <span>⊞</span>
      </div>

      <h3>A disposição</h3>

      <p>
        Organiza os elementos,
        aproxima informações
        e evidencia suas
        relações.
      </p>

    </div>


    <div className={styles.visualConnector}></div>


    <div className={styles.visualPrinciple}>

      <div className={styles.principleIcon}>
<span className={styles.chartIcon}>
  <i></i><i></i><i></i>
</span>      </div>

      <h3>Gráficos e formas</h3>

      <p>
        Evidenciam padrões,
        tendências e relações
        que orientam a leitura
        dos dados.
      </p>

    </div>


    <div className={styles.visualConnector}></div>


    <div className={styles.visualPrinciple}>

      <div className={styles.principleIcon}>
        <span>☰</span>
      </div>

      <h3>Títulos e textos</h3>

      <p>
        Guiam a leitura,
        contextualizam os dados
        e direcionam a
        compreensão.
      </p>

    </div>

  </div>


  <div className={styles.visualLanguageConclusion}>

    <p>
      Essas escolhas influenciam o que o leitor entende como mais importante,
      quais relações consegue perceber e quais informações utiliza para
      formar uma conclusão.
    </p>

    <p>
      Por isso, em um relatório orientado à decisão,
      <strong> design e narrativa não são elementos decorativos.</strong>
      Eles fazem parte da própria comunicação da análise.
    </p>

  </div>


  <div className={styles.visualDecision}>
<div className={styles.quoteMark}>“</div>
    <p>
      Quanto mais clara for a leitura da informação,
      menor é a distância entre o dado, a
      <span> compreensão</span> e a
      <span> decisão.</span>
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


