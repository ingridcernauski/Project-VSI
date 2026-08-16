import styles from "./EnsaioIA.module.css";
import { useLanguage } from "../../context/LanguageContext";

function EnsaioIA() {
  const { language } = useLanguage();

  const isPT = language === "pt";

  return (
    <main className={styles.essayPage}>

      {/* =====================================================
          HERO
          ===================================================== */}

      <section className={styles.hero}>

        <span className={styles.eyebrow}>
          {isPT
            ? "ENSAIO SOBRE INTELIGÊNCIA ARTIFICIAL"
            : "ESSAY ON ARTIFICIAL INTELLIGENCE"}
        </span>

        <h1>
          {isPT ? (
            <>
              Um ensaio sobre <em>humanos</em>, tecnologia e a
              transformação da forma como produzimos e
              transmitimos conhecimento.
            </>
          ) : (
            <>
              An essay about <em>humans</em>, technology and the
              transformation of how we produce and transmit
              knowledge.
            </>
          )}
        </h1>

        <div className={styles.heroLine} />

        <div className={styles.heroQuestion}>

          <span className={styles.questionLabel}>
            {isPT ? "UMA PERGUNTA" : "A QUESTION"}
          </span>

          <h2>
            {isPT ? "O Que É Nosso?" : "What Is Ours?"}
          </h2>

          <p>
            {isPT
              ? "Uma geração entre o analógico e a inteligência artificial."
              : "A generation between the analog world and artificial intelligence."}
          </p>

        </div>

      </section>


      {/* =====================================================
          INTRODUCTION
          ===================================================== */}

      <section className={styles.introduction}>

        <div className={styles.chapterNumber}>
      
        </div>

        <div className={styles.introductionContent}>

          <p>
            {isPT
              ? "A inteligência artificial costuma ser apresentada como algo radicalmente novo. Mas talvez seja mais interessante olhar para ela como parte de uma história muito mais antiga: a história de uma espécie que nunca deixou de criar ferramentas para ampliar aquilo que é capaz de fazer."
              : "Artificial intelligence is often presented as something radically new. But perhaps it is more interesting to see it as part of a much older story: the story of a species that has never stopped creating tools to expand what it is capable of doing."}
          </p>

          <p>
            {isPT
              ? "A diferença é que, desta vez, não estamos entregando apenas força física à ferramenta. Estamos começando a entregar partes do próprio processo intelectual."
              : "The difference is that this time, we are not simply giving physical strength to the tool. We are beginning to give away parts of the intellectual process itself."}
          </p>

        </div>

        <div className={styles.introVisual}>

          <span className={styles.visualBigText}>
            AI
          </span>

          <span className={styles.visualSmallText}>
            2022 —
          </span>

          <div className={styles.visualGrid} />

        </div>

      </section>


      {/* =====================================================
          01 — HOMO SAPIENS
          ===================================================== */}

      <section className={styles.chapter}>

        <div className={styles.chapterHeader}>

          <span className={styles.chapterNumber}>
            01
          </span>

          <span className={styles.chapterLabel}>
            {isPT
              ? "O HOMO SAPIENS E A FERRAMENTA"
              : "HOMO SAPIENS AND THE TOOL"}
          </span>

        </div>

        <div className={styles.chapterLayout}>

          <div className={styles.chapterBody}>

            <h2>
              {isPT
                ? "Nossa espécie sempre criou extensões de si mesma."
                : "Our species has always created extensions of itself."}
            </h2>

            <div className={styles.textColumn}>

              <p>
                {isPT
                  ? "Desde o domínio do fogo, da linguagem e das primeiras ferramentas, nossa espécie sempre ampliou suas capacidades através da tecnologia."
                  : "From the mastery of fire, language and the first tools, our species has always expanded its capabilities through technology."}
              </p>

              <p>
                {isPT
                  ? "A inteligência artificial não inaugura esse comportamento. Ela leva essa lógica a um novo estágio."
                  : "Artificial intelligence does not introduce this behavior. It takes this logic to a new stage."}
              </p>

            </div>

          </div>

          <div className={styles.chapterVisual}>

            <span className={styles.visualWord}>
              HOMO
            </span>

            <span className={styles.visualSubword}>
              SAPIENS
            </span>

     <div className={`${styles.visualLine} ${styles.visualLine1}`} />
<div className={`${styles.visualLine} ${styles.visualLine2}`} />
<div className={`${styles.visualLine} ${styles.visualLine3}`} />

<span className={`${styles.visualDot} ${styles.visualDot1}`} />
<span className={`${styles.visualDot} ${styles.visualDot2}`} />
<span className={`${styles.visualDot} ${styles.visualDot3}`} />

          </div>

        </div>

      </section>


      {/* =====================================================
          02 — KNOWLEDGE
          ===================================================== */}

      <section className={styles.chapter}>

        <div className={styles.chapterHeader}>

          <span className={styles.chapterNumber}>
            02
          </span>

          <span className={styles.chapterLabel}>
            {isPT
              ? "QUANDO O CONHECIMENTO DEIXOU DE DEPENDER APENAS DA MEMÓRIA"
              : "WHEN KNOWLEDGE STOPPED DEPENDING ONLY ON MEMORY"}
          </span>

        </div>

        <div className={styles.chapterLayout}>

          <div className={styles.chapterBody}>

            <h2>
              {isPT
                ? "Cada tecnologia mudou a maneira como lembramos."
                : "Every technology changed the way we remember."}
            </h2>

            <div className={styles.knowledgeTimeline}>

              <span>ESCRITA</span>
              <span>LIVROS</span>
              <span>IMPRENSA</span>
              <span>FOTOGRAFIA</span>
              <span>RÁDIO</span>
              <span>TELEVISÃO</span>
              <span>INTERNET</span>
              <span>IA</span>

            </div>

            <div className={styles.textColumn}>

              <p>
                {isPT
                  ? "Escrita. Livros. Imprensa. Fotografia. Rádio. Televisão. Internet."
                  : "Writing. Books. Printing press. Photography. Radio. Television. Internet."}
              </p>

              <p>
                {isPT
                  ? "Cada uma dessas tecnologias alterou a maneira como produzimos, armazenamos e transmitimos conhecimento."
                  : "Each of these technologies changed the way we produce, store and transmit knowledge."}
              </p>

            </div>

          </div>

          <div className={styles.chapterVisual}>

            <div className={styles.timelineVisual}>

              <span>ESCRITA</span>
              <i />
              <span>LIVROS</span>
              <i />
              <span>IMPRENSA</span>
              <i />
              <span>INTERNET</span>
              <i />
              <strong>IA</strong>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          03 — TWO WORLDS
          ===================================================== */}

      <section className={styles.chapter}>

        <div className={styles.chapterHeader}>

          <span className={styles.chapterNumber}>
            03
          </span>

          <span className={styles.chapterLabel}>
            {isPT
              ? "UMA GERAÇÃO ENTRE DOIS MUNDOS"
              : "A GENERATION BETWEEN TWO WORLDS"}
          </span>

        </div>

        <div className={styles.chapterLayout}>

          <div className={styles.chapterBody}>

            <h2>
              {isPT
                ? "Nós conhecemos o mundo antes da IA generativa."
                : "We remember the world before generative AI."}
            </h2>

            <div className={styles.textColumn}>

              <p>
                {isPT
                  ? "Conhecemos o tempo de pesquisar em livros, esperar uma resposta, revelar uma fotografia e construir conhecimento sem uma máquina completando nossas ideias."
                  : "We know what it was like to search through books, wait for an answer, develop a photograph and build knowledge without a machine completing our ideas."}
              </p>

              <p>
                {isPT
                  ? "E agora vivemos em um mundo no qual podemos perguntar a uma máquina e receber uma resposta em segundos."
                  : "And now we live in a world where we can ask a machine and receive an answer within seconds."}
              </p>

            </div>

          </div>

          <div className={styles.chapterVisual}>

            <div className={styles.worldVisual}>

              <span className={styles.analog}>
                ANALÓGICO
              </span>

              <div className={styles.worldDivider} />

              <span className={styles.ai}>
                IA
              </span>

              <div className={styles.worldCircle} />

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          04 — CINEMA
          ===================================================== */}

      <section className={`${styles.chapter} ${styles.cinemaChapter}`}>

        <div className={styles.chapterHeader}>

          <span className={styles.chapterNumber}>
            04
          </span>

          <span className={styles.chapterLabel}>
            {isPT
              ? "A MÁQUINA QUE O CINEMA JÁ IMAGINAVA"
              : "THE MACHINE CINEMA ALREADY IMAGINED"}
          </span>

        </div>

        <div className={styles.chapterLayout}>

          <div className={styles.chapterBody}>

            <h2>
              {isPT
                ? "Antes de construirmos algumas dessas perguntas, já havíamos contado suas histórias."
                : "Before we built some of these questions, we had already told their stories."}
            </h2>

            <div className={styles.filmList}>

              <article>
                <span>01</span>
                <h3>2001: UMA ODISSEIA NO ESPAÇO</h3>
                <p>
                  {isPT
                    ? "Tecnologia, evolução humana e a relação entre homem e máquina."
                    : "Technology, human evolution and the relationship between humans and machines."}
                </p>
              </article>

              <article>
                <span>02</span>
                <h3>BLADE RUNNER</h3>
                <p>
                  {isPT
                    ? "O que diferencia um humano de algo criado por humanos?"
                    : "What separates a human from something created by humans?"}
                </p>
              </article>

              <article>
                <span>03</span>
                <h3>HER</h3>
                <p>
                  {isPT
                    ? "Quando uma tecnologia deixa de ser apenas ferramenta."
                    : "When technology stops being merely a tool."}
                </p>
              </article>

              <article>
                <span>04</span>
                <h3>THE MATRIX</h3>
                <p>
                  {isPT
                    ? "Realidade, conhecimento e aquilo que é construído."
                    : "Reality, knowledge and what is constructed."}
                </p>
              </article>

              <article>
                <span>05</span>
                <h3>EX MACHINA</h3>
                <p>
                  {isPT
                    ? "Consciência, criação e a tentativa humana de compreender aquilo que criou."
                    : "Consciousness, creation and the human attempt to understand what it created."}
                </p>
              </article>

              <article>
                <span>06</span>
                <h3>WALL·E</h3>
                <p>
                  {isPT
                    ? "Tecnologia, dependência e aquilo que podemos deixar de fazer por nós mesmos."
                    : "Technology, dependence and what we may stop doing for ourselves."}
                </p>
              </article>

              <article>
                <span>07</span>
                <h3>O EXTERMINADOR DO FUTURO</h3>
                <p>
                  {isPT
                    ? "O medo de criar uma inteligência que ultrapasse nossa capacidade de controlá-la."
                    : "The fear of creating an intelligence beyond our ability to control it."}
                </p>
              </article>

            </div>

          </div>

          <div className={styles.chapterVisual}>

            <div className={styles.cinemaVisual}>

              <div className={styles.cinemaScreen}>

                <span>2001</span>
                <span>HER</span>
                <span>AI</span>

              </div>

              <div className={styles.cinemaLine} />

              <span className={styles.cinemaCaption}>
                FICTION → POSSIBILITY
              </span>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          05 — THE QUESTION
          ===================================================== */}

      <section className={styles.questionChapter}>

        <div className={styles.chapterHeader}>

          <span className={styles.chapterNumber}>
            05
          </span>

          <span className={styles.chapterLabel}>
            {isPT ? "O QUE É NOSSO?" : "WHAT IS OURS?"}
          </span>

        </div>

        <div className={styles.chapterLayout}>

          <div className={styles.questionContent}>

            <h2>
              {isPT
                ? "Se uma máquina escreve uma ideia, a ideia é dela?"
                : "If a machine writes an idea, does the idea belong to it?"}
            </h2>

            <div className={styles.questionsList}>

              <p>
                {isPT
                  ? "Se ela cria uma imagem a partir da nossa descrição, quem criou?"
                  : "If it creates an image from our description, who created it?"}
              </p>

              <p>
                {isPT
                  ? "Se ela organiza um conhecimento que não conseguiríamos organizar sozinhos, esse conhecimento continua sendo nosso?"
                  : "If it organizes knowledge we could not organize alone, does that knowledge remain ours?"}
              </p>

              <p>
                {isPT
                  ? "E se começamos a depender dela para pensar, escrever, criar e decidir, o que exatamente estamos terceirizando?"
                  : "And if we begin to depend on it to think, write, create and decide, what exactly are we outsourcing?"}
              </p>

            </div>

          </div>

          <div className={styles.chapterVisual}>

            <div className={styles.questionVisual}>

              <span className={styles.questionMark}>
                ?
              </span>

              <div className={styles.questionOrbit} />

              <span className={styles.questionOrbitDot} />

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          06 — CONCLUSION
          ===================================================== */}

      <section className={styles.conclusion}>

        <div className={styles.chapterHeader}>

          <span className={styles.chapterNumber}>
            06
          </span>

          <span className={styles.chapterLabel}>
            {isPT
              ? "NÃO É SOBRE A MÁQUINA"
              : "IT IS NOT ABOUT THE MACHINE"}
          </span>

        </div>

        <div className={styles.chapterLayout}>

          <div className={styles.conclusionContent}>

            <h2>
              {isPT ? "É sobre nós." : "It is about us."}
            </h2>

            <p>
              {isPT
                ? "A inteligência artificial não é apenas uma nova tecnologia. Ela está alterando a relação que estabelecemos com o conhecimento."
                : "Artificial intelligence is not simply a new technology. It is changing the relationship we have with knowledge."}
            </p>

            <p>
              {isPT
                ? "Talvez a questão mais importante não seja descobrir o que as máquinas serão capazes de fazer."
                : "Perhaps the most important question is not discovering what machines will be capable of doing."}
            </p>

            <p className={styles.finalStatement}>
              {isPT
                ? "Mas entender o que nós escolheremos continuar fazendo."
                : "But understanding what we will choose to continue doing."}
            </p>

          </div>

          <div className={styles.chapterVisual}>

            <div className={styles.finalVisual}>

              <span className={styles.finalWord}>
                HUMAN
              </span>

              <span className={styles.finalWordAI}>
                + AI
              </span>

              <div className={styles.finalLine} />

              <span className={styles.finalCaption}>
                WHAT REMAINS OURS?
              </span>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          FINAL
          ===================================================== */}

      <footer className={styles.essayFooter}>

        <span>
          ENSAIO SOBRE INTELIGÊNCIA ARTIFICIAL
        </span>

        <strong>
          {isPT ? "O QUE É NOSSO?" : "WHAT IS OURS?"}
        </strong>

      </footer>

    </main>
  );
}

export default EnsaioIA;