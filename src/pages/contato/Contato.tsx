
import styles from "./Contato.module.css";

import {
  Mail
} from "lucide-react";

import { useLanguage } from "../../context/LanguageContext";

const iconGradient = (
  <linearGradient id="iconGradient" x1="0%" y1="0%" x2="0%" y2="100%">
    <stop offset="0%" stopColor="#ffffff" />
    <stop offset="100%" stopColor="#9b6cff" />
  </linearGradient>
);

function Contato() {
  const { language } = useLanguage();

  return (
    <section className={styles.contact}>

      {/* =========================================================
          CONTATO
          ========================================================= */}

      <span className={styles.sectionLabel}>
        {language === "pt" ? "CONTATO" : "CONTACT"}
      </span>


      {/* =========================================================
          CONTEÚDO
          ========================================================= */}

      <svg width="0" height="0" aria-hidden="true">
        <defs>
          {iconGradient}
        </defs>
      </svg>

      <div className={styles.contactContent}>

        {/* ESQUERDA */}

        <div className={styles.contactHeader}>

          <h1>
            {language === "pt" ? (
              <>
                Vamos conversar <em>sobre dados?</em>
              </>
            ) : (
              <>
                Let's talk <em>about data.</em>
              </>
            )}
          </h1>

          <p>
            {language === "pt"
              ? "Estou aberta a novas oportunidades, projetos e conexões profissionais."
              : "I'm open to new opportunities, projects, and professional connections."}
          </p>

        </div>


        {/* DIREITA — CONTATOS */}

        <div className={styles.contactGrid}>

          {/* E-MAIL */}

          <a
            href="mailto:ingridcernauski@gmail.com"
            className={styles.contactItem}
          >
            <Mail />

            <div>
              <span className={styles.contactLabel}>
                E-MAIL
              </span>
            </div>
          </a>


          {/* WHATSAPP */}

          <a
            href="https://wa.me/5511950522959"
            target="_blank"
            rel="noreferrer"
            className={styles.contactItem}
          >
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 2.5C6.75 2.5 2.5 6.55 2.5 11.55C2.5 13.35 3.05 15.05 4.05 16.5L2.5 21.5L7.7 20.05C9 20.75 10.45 21.1 12 21.1C17.25 21.1 21.5 17.05 21.5 12.05C21.5 7.05 17.25 2.5 12 2.5Z"
                stroke="url(#iconGradient)"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              <path
                d="M8.4 7.5C8.65 7.5 8.85 7.55 9 7.9L9.65 9.35C9.75 9.6 9.7 9.8 9.5 10.05L8.85 10.75C8.7 10.9 8.75 11.1 8.85 11.3C9.3 12.15 10.25 13.1 11.15 13.6C11.4 13.75 11.6 13.75 11.75 13.55L12.35 12.85C12.55 12.65 12.75 12.6 13 12.75L14.5 13.45"
                stroke="url(#iconGradient)"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <div>
              <span className={styles.contactLabel}>
                WHATSAPP
              </span>
            </div>
          </a>


          {/* LINKEDIN */}

          <a
            href="https://www.linkedin.com/in/ingrid-cernauski-55a97b11b"
            target="_blank"
            rel="noreferrer"
            className={styles.contactItem}
          >
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.5 8.5H3.5V20H6.5V8.5Z"
                fill="url(#iconGradient)"
              />

              <path
                d="M5 3.5C4.17 3.5 3.5 4.17 3.5 5C3.5 5.83 4.17 6.5 5 6.5C5.83 6.5 6.5 5.83 6.5 5C6.5 4.17 5.83 3.5 5 3.5Z"
                fill="url(#iconGradient)"
              />

              <path
                d="M9 8.5H12V10.07C12.78 8.98 14.08 8.2 15.7 8.2C19.05 8.2 20.5 10.35 20.5 14.1V20H17.5V14.65C17.5 12.9 17.1 11.2 15.35 11.2C13.7 11.2 12 12.35 12 14.65V20H9V8.5Z"
                fill="url(#iconGradient)"
              />
            </svg>

            <div>
              <span className={styles.contactLabel}>
                LINKEDIN
              </span>
            </div>
          </a>

        </div>

      </div>


      {/* =========================================================
          FOOTER
          ========================================================= */}

      <footer className={styles.footer}>

        <p>
          © 2026 Ingrid Cernauski
        </p>

        <span>
          Business Intelligence • Data Strategy • AI
        </span>

      </footer>

    </section>
  );
}

export default Contato;
