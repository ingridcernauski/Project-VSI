import styles from "./aiEconomy.module.css";
import {
  Users,
  BriefcaseBusiness,
  TrendingUp,
  Activity,
  Globe,
} from "lucide-react";
import { useLanguage } from "../../../context/LanguageContext";

function AIEconomy() {
  const { language } = useLanguage();

  const isPT = language === "pt";

  /*
   * =========================================================
   * AI MARKET DATA
   * =========================================================
   *
   * 2020–2024 = ACTUAL
   * 2025–2030 = FORECAST
   */

  const marketData = [
    { year: "2020", value: 93.27, forecast: false },
    { year: "2021", value: 202.59, forecast: false },
    { year: "2022", value: 124.79, forecast: false },
    { year: "2023", value: 135.93, forecast: false },
    { year: "2024", value: 184.04, forecast: false },

    { year: "2025", value: 243.72, forecast: true },
    { year: "2026", value: 320.14, forecast: true },
    { year: "2027", value: 415.61, forecast: true },
    { year: "2028", value: 529.23, forecast: true },
    { year: "2029", value: 667.74, forecast: true },
    { year: "2030", value: 826.73, forecast: true },
  ];

  /*
   * =========================================================
   * GLOBAL AI USERS
   * =========================================================
   *
   * Daily AI users globally
   *
   * 2020 = 116M ACTUAL
   * 2025 = 378M PROJECTED
   *
   * Fonte:
   * Stelia AI · Global AI Adoption
   */

  const peopleAdherenceData = [
    {
      year: "2020",
      value: 116,
      forecast: false,
    },
    {
      year: "2025",
      value: 378,
      forecast: true,
    },
  ];

  /*
   * =========================================================
   * AI INVESTMENT BY COUNTRY
   * =========================================================
   */

  const countryInvestment = [
    {
      country: "United States",
      short: "U.S.",
      flag: "🇺🇸",
      value: 285.88,
      highlight: true,
    },
    {
      country: "China",
      short: "China",
      flag: "🇨🇳",
      value: 12.41,
      highlight: false,
    },
    {
      country: "United Kingdom",
      short: "U.K.",
      flag: "🇬🇧",
      value: 5.9,
      highlight: false,
    },
    {
      country: "France",
      short: "France",
      flag: "🇫🇷",
      value: 4.36,
      highlight: false,
    },
    {
      country: "Canada",
      short: "Canada",
      flag: "🇨🇦",
      value: 4.28,
      highlight: false,
    },
    {
      country: "India",
      short: "India",
      flag: "🇮🇳",
      value: 4.09,
      highlight: false,
    },
    {
      country: "Germany",
      short: "Germany",
      flag: "🇩🇪",
      value: 3.89,
      highlight: false,
    },
    {
      country: "Israel",
      short: "Israel",
      flag: "🇮🇱",
      value: 3.58,
      highlight: false,
    },
    {
      country: "Australia",
      short: "Australia",
      flag: "🇦🇺",
      value: 2.52,
      highlight: false,
    },
    {
      country: "Saudi Arabia",
      short: "Saudi Arabia",
      flag: "🇸🇦",
      value: 2.03,
      highlight: false,
    },
  ];

  const maxCountryInvestment = Math.max(
    ...countryInvestment.map(
      (country) => country.value
    )
  );

  /*
   * =========================================================
   * WORK — AI & THE WORLD OF WORK
   * =========================================================
   */

  const workData = [
    
    {
      country: "United States",
      short: "U.S.",
      exposure: 30,
      impact: 72,
      size: 24,
      highlight: false,
    },
    {
      country: "United Kingdom",
      short: "U.K.",
      exposure: 42,
      impact: 78,
      size: 17,
      highlight: false,
    },
    {
      country: "France",
      short: "France",
      exposure: 48,
      impact: 75,
      size: 15,
      highlight: false,
    },
    {
      country: "Germany",
      short: "Germany",
      exposure: 45,
      impact: 77,
      size: 16,
      highlight: false,
    },
    {
      country: "Canada",
      short: "Canada",
      exposure: 36,
      impact: 73,
      size: 13,
      highlight: false,
    },
    {
      country: "Australia",
      short: "Australia",
      exposure: 40,
      impact: 74,
      size: 13,
      highlight: false,
    },
    {
      country: "Spain",
      short: "Spain",
      exposure: 44,
      impact: 68,
      size: 12,
      highlight: false,
    },
    {
      country: "Brazil",
      short: "Brazil",
      exposure: 19,
      impact: 55,
      size: 19,
      highlight: false,
    },
    {
      country: "India",
      short: "India",
      exposure: 18,
      impact: 52,
      size: 22,
      highlight: false,
    },
    {
      country: "China",
      short: "China",
      exposure: 16,
      impact: 57,
      size: 21,
      highlight: false,
    },
  ];

  const workChartWidth = 1000;
  const workChartHeight = 280;

  const workXPadding = 70;
  const workYPadding = 25;

  const workUsableWidth =
    workChartWidth -
    workXPadding * 2;

  const workUsableHeight =
    workChartHeight -
    workYPadding * 2;

  const getWorkX = (
    exposure: number
  ) =>
    workXPadding +
    (exposure / 60) *
      workUsableWidth;

  const getWorkY = (
    impact: number
  ) =>
    workChartHeight -
    workYPadding -
    ((impact - 40) / 45) *
      workUsableHeight;

  /*
   * =========================================================
   * KPI DATA
   * =========================================================
   */

  const kpis = [
    {
      value: "16.3%",
      label: isPT ? "USUÁRIOS DE IA" : "AI USERS",
      meta: isPT
        ? "DA POPULAÇÃO MUNDIAL · 2025"
        : "OF GLOBAL POPULATION · 2025",
      icon: Users,
    },

    {
      value: "~40%",
      label: isPT ? "EMPREGOS EXPOSTOS" : "JOBS EXPOSED",
      meta: isPT
        ? "DO EMPREGO GLOBAL · 2024"
        : "OF GLOBAL EMPLOYMENT · 2024",
      icon: BriefcaseBusiness,
    },

    {
      value: "$252.3B",
      label: isPT ? "INVESTIMENTO EM IA" : "AI INVESTMENT",
      meta: isPT
        ? "INVESTIMENTO PRIVADO GLOBAL · 2024"
        : "GLOBAL PRIVATE INVESTMENT · 2024",
      icon: TrendingUp,
    },

    {
      value: "+26%",
      label: isPT
        ? "CRESCIMENTO DO INVESTIMENTO"
        : "INVESTMENT GROWTH",
      meta: isPT
        ? "INVESTIMENTO EM IA YOY · 2024"
        : "AI INVESTMENT YOY · 2024",
      icon: Activity,
      highlight: true,
    },

    {
      value: "$196.6B",
      label: isPT ? "MERCADO DE IA" : "AI MARKET",
      meta: isPT
        ? "TAMANHO DO MERCADO GLOBAL · 2023"
        : "GLOBAL AI MARKET SIZE · 2023",
      icon: Globe,
    },
  ];

  /*
   * =========================================================
   * MARKET CHART SCALE
   * =========================================================
   */

  const maxValue = 900;

  const chartWidth = 1000;
  const chartHeight = 300;

  const xPadding = 75;

  const usableWidth =
    chartWidth - xPadding * 2;

  const getX = (index: number) =>
    xPadding +
    (index /
      (marketData.length - 1)) *
      usableWidth;

  const getY = (value: number) =>
    chartHeight -
    (value / maxValue) *
      chartHeight;

  const points = marketData.map(
    (item, index) => ({
      ...item,
      x: getX(index),
      y: getY(item.value),
    })
  );

  const historicalPoints =
    points.filter(
      (point) => !point.forecast
    );

  const forecastPoints =
    points.filter(
      (point) => point.forecast
    );

  const historicalPolyline =
    historicalPoints
      .map(
        (point) =>
          `${point.x},${point.y}`
      )
      .join(" ");

  const forecastLinePoints = [
    historicalPoints[
      historicalPoints.length - 1
    ],
    ...forecastPoints,
  ];

  const forecastPolyline =
    forecastLinePoints
      .map(
        (point) =>
          `${point.x},${point.y}`
      )
      .join(" ");

  const forecastAreaPoints = [
    `${
      historicalPoints[
        historicalPoints.length - 1
      ].x
    },${chartHeight}`,

    ...forecastLinePoints.map(
      (point) =>
        `${point.x},${point.y}`
    ),

    `${
      forecastPoints[
        forecastPoints.length - 1
      ].x
    },${chartHeight}`,
  ].join(" ");

  const value2025 =
    marketData.find(
      (item) => item.year === "2025"
    )?.value ?? 0;

  const value2030 =
    marketData.find(
      (item) => item.year === "2030"
    )?.value ?? 0;

  const growth2030 =
    ((value2030 - value2025) /
      value2025) *
    100;

  const growthLabel =
    `+${growth2030.toFixed(1)}%`;

  /*
   * =========================================================
   * PEOPLE CHART
   * =========================================================
   */

  const peopleChartWidth = 1000;
  const peopleChartHeight = 300;

  const peopleXPadding = 65;

  const peopleUsableWidth =
    peopleChartWidth -
    peopleXPadding * 2;

  const peopleMaxValue = 400;

  const getPeopleX = (index: number) =>
    peopleXPadding +
    (index /
      (peopleAdherenceData.length - 1)) *
      peopleUsableWidth;

  const getPeopleY = (value: number) =>
    peopleChartHeight -
    (value / peopleMaxValue) *
      peopleChartHeight;

  const peoplePoints =
    peopleAdherenceData.map(
      (item, index) => ({
        ...item,
        x: getPeopleX(index),
        y: getPeopleY(item.value),
      })
    );

  const peopleFirstValue =
    peopleAdherenceData[0].value;

  const peopleLastValue =
    peopleAdherenceData[
      peopleAdherenceData.length - 1
    ].value;

  const peopleGrowth =
    ((peopleLastValue -
      peopleFirstValue) /
      peopleFirstValue) *
    100;

  const peopleGrowthLabel =
    `+${peopleGrowth.toFixed(1)}%`;

  /*
   * =========================================================
   * RENDER
   * =========================================================
   */const workMinExposure = Math.min(
  ...workData.map((point) => point.exposure)
);

const workMaxExposure = Math.max(
  ...workData.map((point) => point.exposure)
);


const getWorkBubbleColor = (
  exposure: number
) => {
  const ratio =
    (exposure - workMinExposure) /
    (workMaxExposure - workMinExposure);

  const start = {
    r: 245,
    g: 245,
    b: 245,
  };

  const end = {
    r: 185,
    g: 138,
    b: 255,
  };


  const r = Math.round(
    start.r +
      (end.r - start.r) * ratio
  );

  const g = Math.round(
    start.g +
      (end.g - start.g) * ratio
  );

  const b = Math.round(
    start.b +
      (end.b - start.b) * ratio
  );

    return `rgb(${r}, ${g}, ${b})`;

};

 

  return (
    <main className={styles.aiEconomy}>

      <div className={styles.dashboardFrame}>
<button
  className={styles.backToStudy}
  onClick={() => window.history.back()}
>
  <span>←</span>

  {isPT
    ? "VOLTAR AO ESTUDO DE CASO"
    : "BACK TO CASE STUDY"}
</button>


        <header
          className={
            styles.dashboardHeader
          }
        >

          <div>

            <span
              className={
                styles.eyebrow
              }
            >
              THE AI ECONOMY
            </span>

            <h1>
              {isPT
                ? "VISÃO GERAL"
                : "OVERVIEW"}
            </h1>

          </div>

          <div
            className={
              styles.headerContext
            }
          >
            {isPT
              ? "IA · PESSOAS · TRABALHO · MERCADOS"
              : "AI · PEOPLE · WORK · MARKETS"}
          </div>

        </header>

        <section
          className={
            styles.kpiGrid
          }
        >

          {kpis.map((kpi) => {

            const Icon = kpi.icon;

            return (
              <article
                className={
                  styles.kpiCard
                }
                key={kpi.label}
              >

                <Icon
                  className={
                    styles.kpiIcon
                  }
                />

                <span
                  className={`${styles.kpiValue} ${
                    kpi.highlight
                      ? styles.kpiValueHighlight
                      : ""
                  }`}
                >
                  {kpi.value}
                </span>

                <span
                  className={
                    styles.kpiLabel
                  }
                >
                  {kpi.label}
                </span>

                <span
                  className={
                    styles.kpiMeta
                  }
                >
                  {kpi.meta}
                </span>

              </article>
            );

          })}

        </section>

        <section
          className={
            styles.peopleGrid
          }
        >

          <article
            className={
              styles.visualCard
            }
          >

            <div
              className={
                styles.visualHeader
              }
            >

              <div>

                <span
                  className={
                    styles.visualEyebrow
                  }
                >
                  PEOPLE
                </span>

                <h2>
                  {isPT
                    ? "ADOÇÃO GLOBAL DE IA"
                    : "GLOBAL AI ADOPTION"}
                </h2>

              </div>

              <span
                className={
                  styles.visualPeriod
                }
              >
                2020 — 2025
              </span>

            </div>

            <div
              className={
                styles.peopleAdherenceChart
              }
            >

              <div
                className={
                  styles.peopleChartMain
                }
              >

                <div
                  className={
                    styles.peopleYAxis
                  }
                >

                  <span>400M</span>
                  <span>300M</span>
                  <span>200M</span>
                  <span>100M</span>
                  <span>0</span>

                </div>

                <div
                  className={
                    styles.peoplePlot
                  }
                >

                  <div
                    className={
                      styles.gridLine
                    }
                    style={{
                      top: "0%",
                    }}
                  />

                  <div
                    className={
                      styles.gridLine
                    }
                    style={{
                      top: "25%",
                    }}
                  />

                  <div
                    className={
                      styles.gridLine
                    }
                    style={{
                      top: "50%",
                    }}
                  />

                  <div
                    className={
                      styles.gridLine
                    }
                    style={{
                      top: "75%",
                    }}
                  />

                  <div
                    className={
                      styles.gridLine
                    }
                    style={{
                      top: "100%",
                    }}
                  />

                  <div className={styles.peopleDifferenceHighlight}>

                    <div className={styles.peopleDifferenceValue}>

                      <div className={styles.peopleDifferenceBullet} />

                      <strong>
                        +{peopleLastValue - peopleFirstValue}M
                      </strong>

                    </div>

                    <span>
                      {isPT
                        ? "AUMENTO ABSOLUTO"
                        : "ABSOLUTE INCREASE"}
                    </span>

                  </div>

                  <svg
                    className={
                      styles.peopleSvg
                    }
                    viewBox="0 0 1000 300"
                    preserveAspectRatio="none"
                  >

                    <defs>

                      <filter
                        id="peopleGlow"
                        x="-30%"
                        y="-30%"
                        width="160%"
                        height="180%"
                      >

                        <feGaussianBlur
                          stdDeviation="8"
                        />

                      </filter>

                      <linearGradient
                        id="peopleArea"
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="1"
                      >

                        <stop
                          offset="0%"
                          stopColor="#b98aff"
                          stopOpacity="0.08"
                        />

                        <stop
                          offset="100%"
                          stopColor="#b98aff"
                          stopOpacity="0"
                        />

                      </linearGradient>

                    </defs>

                    <polygon
                      points={`
                        ${peoplePoints[0].x},${peopleChartHeight}
                        ${peoplePoints[0].x},${peoplePoints[0].y}
                        ${peoplePoints[1].x},${peoplePoints[1].y}
                        ${peoplePoints[1].x},${peopleChartHeight}
                      `}
                      fill="url(#peopleArea)"
                    />

                    <line
                      x1={peoplePoints[0].x}
                      y1={peoplePoints[0].y}
                      x2={peoplePoints[1].x}
                      y2={peoplePoints[1].y}
                      stroke="#b98aff"
                      strokeWidth="14"
                      opacity="0.18"
                      filter="url(#peopleGlow)"
                    />

                    <line
                      x1={peoplePoints[0].x}
                      y1={peoplePoints[0].y + 9}
                      x2={peoplePoints[1].x}
                      y2={peoplePoints[1].y + 9}
                      stroke="#b98aff"
                      strokeWidth="5"
                      opacity="0.16"
                      filter="url(#peopleGlow)"
                    />

                    <line
                      x1={peoplePoints[0].x}
                      y1={peoplePoints[0].y}
                      x2={peoplePoints[1].x}
                      y2={peoplePoints[1].y}
                      stroke="#f5f5f5"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    />

                    <line
                      x1={peoplePoints[0].x}
                      y1={peoplePoints[0].y}
                      x2={peoplePoints[1].x}
                      y2={peoplePoints[1].y}
                      stroke="#b98aff"
                      strokeWidth="2.5"
                      strokeDasharray="8 7"
                      strokeLinecap="round"
                    />

                    <line
                      x1={peoplePoints[0].x}
                      y1={peoplePoints[0].y}
                      x2={peoplePoints[1].x}
                      y2={peoplePoints[1].y}
                      stroke="#b98aff"
                      strokeWidth="9"
                      strokeDasharray="8 7"
                      strokeLinecap="round"
                      opacity="0.20"
                      filter="url(#peopleGlow)"
                    />

                    {peoplePoints.map(
                      (point) => (

                        <line
                          key={`people-stem-${point.year}`}
                          x1={point.x}
                          y1={point.y}
                          x2={point.x}
                          y2={peopleChartHeight}
                          stroke={
                            point.forecast
                              ? "rgba(185,138,255,.22)"
                              : "rgba(245,245,245,.12)"
                          }
                          strokeWidth="1"
                          strokeDasharray="2 5"
                        />

                      )
                    )}

                    {peoplePoints.map(
                      (point) => (

                        <g
                          key={point.year}
                        >

                          {point.forecast && (

                            <circle
                              cx={point.x}
                              cy={point.y}
                              r="13"
                              fill="none"
                              stroke="rgba(185,138,255,.28)"
                              strokeWidth="1"
                              filter="url(#peopleGlow)"
                            />

                          )}

                          <circle
                            cx={point.x}
                            cy={point.y}
                            r={
                              point.forecast
                                ? 5.5
                                : 4
                            }
                            fill={
                              point.forecast
                                ? "#b98aff"
                                : "#f5f5f5"
                            }
                          />

                          <text
                            x={point.x}
                            y={point.y - 12}
                            textAnchor={
                              point.year === "2020"
                                ? "start"
                                : point.year === "2025"
                                  ? "end"
                                  : "middle"
                            }
                            className={
                              styles.peoplePointValue
                            }
                          >
                            {point.value}M
                          </text>

                        </g>

                      )
                    )}

                  </svg>

                </div>

                <aside
                  className={
                    styles.peopleGrowthHighlight
                  }
                >

                  <div
                    className={
                      styles.peopleGrowthBullet
                    }
                  />

                  <strong>
                    {peopleGrowthLabel}
                  </strong>

                  <span>
                    {isPT
                      ? "CRESCIMENTO ACUMULADO"
                      : "CUMULATIVE GROWTH"}
                  </span>

                  <small>
                    2020 → 2025
                  </small>

                </aside>

              </div>

              <div
                className={
                  styles.peopleXAxis
                }
              >

                {peopleAdherenceData.map(
                  (point) => (

                    <span
                      key={point.year}
                    >
                      {point.year}
                    </span>

                  )
                )}

              </div>

              <div
                className={
                  styles.peopleSource
                }
              >
                {isPT
                  ? "Fonte: Stelia AI · Global AI Adoption · Daily AI Users"
                  : "Source: Stelia AI · Global AI Adoption · Daily AI Users"}
              </div>

            </div>

          </article>

          <article
            className={
              styles.visualCard
            }
          >

            <div
              className={
                styles.visualHeader
              }
            >

              <div>

                <span
                  className={
                    styles.visualEyebrow
                  }
                >
                  PEOPLE
                </span>

                <h2>
                  {isPT
                    ? "ADERÊNCIA À IA POR PAÍS"
                    : "AI ADHERENCE BY COUNTRY"}
                </h2>

              </div>

              <span
                className={
                  styles.visualPeriod
                }
              >
                2025
              </span>

            </div>

            <div className={styles.countryAdoptionChart}>

              <div className={styles.countryAdoptionHeader}>

                <span>
                  {isPT
                    ? "% DA POPULAÇÃO EM IDADE ATIVA"
                    : "% OF WORKING-AGE POPULATION"}
                </span>

                <span>
                  Q1 2026
                </span>

              </div>

              <div className={styles.countryAdoptionBars}>

                {[
                  { country: "United Arab Emirates", short: "UAE", flag: "🇦🇪", value: 70.1 },
                  { country: "Singapore", short: "Singapore", flag: "🇸🇬", value: 63.4 },
                  { country: "Norway", short: "Norway", flag: "🇳🇴", value: 48.6 },
                  { country: "Ireland", short: "Ireland", flag: "🇮🇪", value: 48.4 },
                  { country: "France", short: "France", flag: "🇫🇷", value: 47.8 },
                  { country: "Spain", short: "Spain", flag: "🇪🇸", value: 44.2 },
                  { country: "New Zealand", short: "New Zealand", flag: "🇳🇿", value: 43.0 },
                  { country: "United Kingdom", short: "U.K.", flag: "🇬🇧", value: 42.2 },
                  { country: "Netherlands", short: "Netherlands", flag: "🇳🇱", value: 42.1 },
                  { country: "Qatar", short: "Qatar", flag: "🇶🇦", value: 41.8 },
                  { country: "Australia", short: "Australia", flag: "🇦🇺", value: 39.5 },
                  { country: "Israel", short: "Israel", flag: "🇮🇱", value: 38.1 },
                  { country: "Canada", short: "Canada", flag: "🇨🇦", value: 36.0 },
                  { country: "United States", short: "U.S.", flag: "🇺🇸", value: 30.0 },
                  { country: "Colombia", short: "Colombia", flag: "🇨🇴", value: 24.5 },
                  { country: "Chile", short: "Chile", flag: "🇨🇱", value: 22.7 },
                  { country: "Argentina", short: "Argentina", flag: "🇦🇷", value: 21.9 },
                  { country: "Mexico", short: "Mexico", flag: "🇲🇽", value: 20.1 },
                  { country: "Brazil", short: "Brazil", flag: "🇧🇷", value: 19.1 },
                  { country: "India", short: "India", flag: "🇮🇳", value: 17.6 },
                  { country: "China", short: "China", flag: "🇨🇳", value: 16.4 },
                ].map((country) => {

                  const barWidth =
                    (country.value / 70.1) * 100;

                  return (
                    <div
                      className={styles.countryAdoptionRow}
                      key={country.country}
                    >

                      <span
                        className={styles.countryAdoptionFlag}
                      >
                        {country.flag}
                      </span>

                      <span
                        className={styles.countryAdoptionName}
                      >
                        {country.short}
                      </span>

                      <div
                        className={styles.countryAdoptionTrack}
                      >
                        <div
                          className={
                            styles.countryAdoptionBar
                          }
                          style={{
                            width: `${barWidth}%`,
                          }}
                        />
                      </div>

                      <span
                        className={styles.countryAdoptionValue}
                      >
                        {country.value.toFixed(1)}%
                      </span>

                    </div>
                  );

                })}

              </div>

              <div className={styles.countryAdoptionInsight}>

                <div className={styles.countryAdoptionInsightBullet} />

                <strong>
                  {isPT
                    ? "+40,1 p.p."
                    : "+40.1 p.p."}
                </strong>

                <span>
                  {isPT
                    ? "GAP DE ADOÇÃO"
                    : "ADOPTION GAP"}
                </span>

                <small>
                  UAE → U.S
                </small>

              </div>

              <div className={styles.countryAdoptionSource}>
                {isPT
                  ? "Fonte: Microsoft AI Economy Institute · Global AI Adoption · Q1 2026"
                  : "Source: Microsoft AI Economy Institute · Global AI Adoption · Q1 2026"}
              </div>

            </div>

          </article>

        </section>

        <section
          className={
            styles.mainGrid
          }
        >

          <article
            className={`${styles.visualCard} ${styles.marketGrowth}`}
          >

            <div
              className={
                styles.visualHeader
              }
            >

              <div>

                <span
                  className={
                    styles.visualEyebrow
                  }
                >
                  INVESTMENT
                </span>

                <h2>
                  {isPT
                    ? "EVOLUÇÃO DO INVESTIMENTO EM IA"
                    : "AI INVESTMENT EVOLUTION"}
                </h2>

              </div>

              <span
                className={
                  styles.visualPeriod
                }
              >
                2020 — 2030
              </span>

            </div>

            <div
              className={
                styles.marketChart
              }
            >

              <div
                className={
                  styles.marketChartMain
                }
              >

                <div
                  className={
                    styles.marketYAxis
                  }
                >
                  <span>$900B</span>
                  <span>$675B</span>
                  <span>$450B</span>
                  <span>$225B</span>
                  <span>$0</span>
                </div>

                <div
                  className={
                    styles.marketPlot
                  }
                >

                  <div
                    className={
                      styles.gridLine
                    }
                    style={{
                      top: "0%",
                    }}
                  />

                  <div
                    className={
                      styles.gridLine
                    }
                    style={{
                      top: "25%",
                    }}
                  />

                  <div
                    className={
                      styles.gridLine
                    }
                    style={{
                      top: "50%",
                    }}
                  />

                  <div
                    className={
                      styles.gridLine
                    }
                    style={{
                      top: "75%",
                    }}
                  />

                  <div
                    className={
                      styles.gridLine
                    }
                    style={{
                      top: "100%",
                    }}
                  />

                  <div
                    className={
                      styles.marketActualLabel
                    }
                  >
                    {isPT
                      ? "DADOS REAIS"
                      : "ACTUAL DATA"}
                  </div>

                  <div
                    className={
                      styles.marketForecastLabel
                    }
                  >
                    {isPT
                      ? "PROJEÇÃO"
                      : "FORECAST"}
                  </div>

                  <div
                    className={
                      styles.forecastDivider
                    }
                    style={{
                      left: `${
                        (getX(5) /
                          chartWidth) *
                        100
                      }%`,
                    }}
                  />

                  <svg
                    className={
                      styles.marketSvg
                    }
                    viewBox={`0 0 ${chartWidth} ${chartHeight}`}
                    preserveAspectRatio="none"
                  >

                    <defs>

                      <linearGradient
                        id="historicalArea"
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="1"
                      >

                        <stop
                          offset="0%"
                          stopColor="#f5f5f5"
                          stopOpacity="0.02"
                        />

                        <stop
                          offset="100%"
                          stopColor="#f5f5f5"
                          stopOpacity="0.16"
                        />

                      </linearGradient>

                      <linearGradient
                        id="forecastArea"
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="1"
                      >

                        <stop
                          offset="0%"
                          stopColor="#b98aff"
                          stopOpacity="0.10"
                        />

                        <stop
                          offset="100%"
                          stopColor="#b98aff"
                          stopOpacity="0.00"
                        />

                      </linearGradient>

                      <filter
                        id="purpleGlow"
                        x="-30%"
                        y="-50%"
                        width="160%"
                        height="200%"
                      >

                        <feGaussianBlur
                          stdDeviation="7"
                          result="blur"
                        />

                        <feMerge>

                          <feMergeNode
                            in="blur"
                          />

                          <feMergeNode
                            in="SourceGraphic"
                          />

                        </feMerge>

                      </filter>

                    </defs>

                    <polygon
                      points={[
                        `${historicalPoints[0].x},${chartHeight}`,
                        ...historicalPoints.map(
                          (point) =>
                            `${point.x},${point.y}`
                        ),
                        `${
                          historicalPoints[
                            historicalPoints.length - 1
                          ].x
                        },${chartHeight}`,
                      ].join(" ")}
                      fill="url(#historicalArea)"
                    />

                    <polygon
                      points={
                        forecastAreaPoints
                      }
                      fill="url(#forecastArea)"
                    />

                    {points.map(
                      (point) => (

                        <line
                          key={`stem-${point.year}`}
                          x1={point.x}
                          y1={point.y}
                          x2={point.x}
                          y2={chartHeight}
                          stroke={
                            point.forecast
                              ? "rgba(185,138,255,.22)"
                              : "rgba(245,245,245,.14)"
                          }
                          strokeWidth="1"
                          strokeDasharray="2 5"
                        />

                      )
                    )}

                    <polyline
                      points={
                        historicalPolyline
                      }
                      fill="none"
                      stroke="#f5f5f5"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />

                    <polyline
                      points={
                        forecastPolyline
                      }
                      fill="none"
                      stroke="#b98aff"
                      strokeWidth="9"
                      strokeDasharray="8 7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      opacity="0.20"
                      filter="url(#purpleGlow)"
                    />

                    <polyline
                      points={
                        forecastPolyline
                      }
                      fill="none"
                      stroke="#b98aff"
                      strokeWidth="2.5"
                      strokeDasharray="8 7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />

                    {points.map(
                      (point) => (

                        <g
                          key={point.year}
                        >

                          {point.year === "2030" && (

                            <circle
                              cx={point.x}
                              cy={point.y}
                              r="13"
                              fill="none"
                              stroke="rgba(185,138,255,.28)"
                              strokeWidth="1"
                              filter="url(#purpleGlow)"
                            />

                          )}

                          <circle
                            cx={point.x}
                            cy={point.y}
                            r={
                              point.year === "2030"
                                ? 5.5
                                : 4
                            }
                            fill={
                              point.forecast
                                ? "#b98aff"
                                : "#f5f5f5"
                            }
                          />

                          <text
                            x={point.x}
                            y={point.y - 12}
                            className={
                              point.forecast
                                ? `${styles.marketPointValue} ${styles.forecastValue}`
                                : styles.marketPointValue
                            }
                            textAnchor="middle"
                          >
                            ${point.value.toFixed(2)}B
                          </text>

                        </g>

                      )
                    )}

                  </svg>

                </div>

                <aside
                  className={
                    styles.marketGrowthHighlight
                  }
                >

                  <div
                    className={
                      styles.growthBullet
                    }
                  />

                  <strong>
                    {growthLabel}
                  </strong>

                  <span>
                    {isPT
                      ? "PROJEÇÃO DE CRESCIMENTO"
                      : "GROWTH PROJECTION"}
                  </span>

                  <small>
                    2025 → 2030
                  </small>

                </aside>

              </div>

              <div
                className={
                  styles.marketXAxis
                }
              >

                {marketData.map(
                  (point, index) => (

                    <span
                      key={point.year}
                      style={{
                        left: `${(getX(index) / chartWidth) * 100}%`,
                      }}
                    >
                      {point.year}
                    </span>

                  )
                )}

              </div>

              <div
                className={
                  styles.marketSource
                }
              >
                {isPT
                  ? "Fonte: Statista Market Insights · Artificial Intelligence · Worldwide"
                  : "Source: Statista Market Insights · Artificial Intelligence · Worldwide"}
              </div>

            </div>

          </article>

          <article
            className={
              styles.visualCard
            }
          >

            <div
              className={
                styles.visualHeader
              }
            >

              <div>

                <span
                  className={
                    styles.visualEyebrow
                  }
                >
                  INVESTMENT
                </span>

                <h2>
                  {isPT
                    ? "INVESTIMENTO EM IA POR PAÍS"
                    : "AI INVESTMENT BY COUNTRY"}
                </h2>

              </div>

              <span
                className={
                  styles.visualPeriod
                }
              >
                2025
              </span>

            </div>

            <div
              className={
                styles.countryInvestmentChart
              }
            >

              <div
                className={
                  styles.countryChartHeader
                }
              >

                <span>
                  {isPT
                    ? "INVESTIMENTO EM IA POR PAÍS"
                    : "AI INVESTMENT BY COUNTRY"}
                </span>

                <span>
                  USD · BILLIONS
                </span>

              </div>

              <div
                className={
                  styles.countryBars
                }
              >

                {countryInvestment.map(
                  (country) => {

                    const barWidth =
                      (country.value /
                        maxCountryInvestment) *
                      100;

                    return (

                      <div
                        className={
                          styles.countryRow
                        }
                        key={
                          country.country
                        }
                      >

                        <span
                          className={
                            styles.countryFlag
                          }
                        >
                          {country.flag}
                        </span>

                        <span
                          className={
                            styles.countryName
                          }
                        >
                          {country.short}
                        </span>

                        <div
                          className={
                            styles.countryBarTrack
                          }
                        >

                          <div
                            className={`${styles.countryBar} ${
                              country.highlight
                                ? styles.countryBarHighlight
                                : ""
                            }`}
                            style={{
                              width: `${barWidth}%`,
                            }}
                          />

                        </div>

                        <span
                          className={
                            styles.countryValue
                          }
                        >
                          ${country.value.toFixed(2)}B
                        </span>

                      </div>

                    );

                  }
                )}

              </div>

              <div
                className={
                  styles.countryChartInsight
                }
              >

                <div
                  className={
                    styles.countryInsightBullet
                  }
                />

                <strong>
                  {isPT
                    ? "EUA LIDERAM"
                    : "U.S. LEADS"}
                </strong>

                <strong>
                  23×
                </strong>

                <span>
                  {isPT
                    ? "À FRENTE DA CHINA"
                    : "AHEAD OF CHINA"}
                </span>

              </div>

              <div
                className={
                  styles.countryChartSource
                }
              >
                {isPT
                  ? "Fonte: Stanford HAI · AI Index 2026 · Quid"
                  : "Source: Stanford HAI · AI Index 2026 · Quid"}
              </div>

            </div>

          </article>

        </section>

        <section
          className={
            styles.secondaryGrid
          }
        >

          {/* =================================================
              WORK — AI & THE WORLD OF WORK
          ================================================= */}

          <article
            className={
              styles.visualCard
            }
          >

            <div
              className={
                styles.visualHeader
              }
            >

              <div>

                <span
                  className={
                    styles.visualEyebrow
                  }
                >
                  WORK
                </span>

                <h2>
                  {isPT
                    ? "IA E O MUNDO DO TRABALHO"
                    : "AI & THE WORLD OF WORK"}
                </h2>

              </div>

              <span
                className={
                  styles.visualPeriod
                }
              >
                2024
              </span>

            </div>

            <div
              className={
                styles.workScatterChart
              }
            >

              <div
                className={
                  styles.workScatterHeader
                }
              >

                <span>
                  {isPT
                    ? "% DE EMPREGOS EXPOSTOS À IA"
                    : "% OF JOBS EXPOSED TO AI"}
                </span>

                <span>
                  {isPT
                    ? "IMPACTO POTENCIAL"
                    : "POTENTIAL IMPACT"}
                </span>

              </div>

              <div
                className={
                  styles.workScatterMain
                }
              >

                <div
                  className={
                    styles.workScatterYAxis
                  }
                >

                  <span>85</span>
                  <span>75</span>
                  <span>65</span>
                  <span>55</span>
                  <span>45</span>

                </div>

                <div
                  className={
                    styles.workScatterPlot
                  }
                >

                  <div
                    className={
                      styles.gridLine
                    }
                    style={{
                      top: "0%",
                    }}
                  />

                  <div
                    className={
                      styles.gridLine
                    }
                    style={{
                      top: "25%",
                    }}
                  />

                  <div
                    className={
                      styles.gridLine
                    }
                    style={{
                      top: "50%",
                    }}
                  />

                  <div
                    className={
                      styles.gridLine
                    }
                    style={{
                      top: "75%",
                    }}
                  />

                  <div
                    className={
                      styles.gridLine
                    }
                    style={{
                      top: "100%",
                    }}
                  />

                  <div
                    className={
                      styles.workTrendLine
                    }
                  />

                  <svg
                    className={
                      styles.workScatterSvg
                    }
                    viewBox="0 0 1000 280"
                    preserveAspectRatio="none"
                  >

                    <defs>

                      <filter
                        id="workBubbleGlow"
                        x="-100%"
                        y="-100%"
                        width="300%"
                        height="300%"
                      >

                        <feGaussianBlur
                          stdDeviation="5"
                          result="blur"
                        />

                        <feMerge>

                          <feMergeNode
                            in="blur"
                          />

                          <feMergeNode
                            in="SourceGraphic"
                          />

                        </feMerge>

                      </filter>

                      <filter
                        id="workBrazilGlow"
                        x="-150%"
                        y="-150%"
                        width="400%"
                        height="400%"
                      >

                        <feGaussianBlur
                          stdDeviation="8"
                          result="blur"
                        />

                        <feMerge>

                          <feMergeNode
                            in="blur"
                          />

                          <feMergeNode
                            in="SourceGraphic"
                          />

                        </feMerge>

                      </filter>

                    </defs>

                    {workData.map(
                      (point) => {

                        const baseX =
                          getWorkX(
                            point.exposure
                          );

                        const baseY =
                          getWorkY(
                            point.impact
                          );

                        /*
                         * VISUAL OFFSETS
                         * Apenas afastam as bolhas
                         * visualmente. Os dados permanecem
                         * exatamente os mesmos.
                         */

                        const visualOffsets: Record<
                          string,
                          {
                            x: number;
                            y: number;
                          }
                        > = {

                          "United States": {
                            x: 0,
                            y: 0,
                          },

                          "United Kingdom": {
                            x: -4,
                            y: -4,
                          },

                          France: {
                            x: 24,
                            y: 8,
                          },

                          Germany: {
                            x: -8,
                            y: -18,
                          },

                          Canada: {
                            x: -8,
                            y: 4,
                          },

                          Australia: {
                            x: 8,
                            y: -12,
                          },

                          Spain: {
                            x: 10,
                            y: 16,
                          },

                          Brazil: {
                            x: 18,
                            y: 2,
                          },

                          India: {
                            x: -2,
                            y: 22,
                          },

                          China: {
                            x: -28,
                            y: -12,
                          },

                        };

                        

                        const offset =
                          visualOffsets[
                            point.country
                          ] ?? {
                            x: 0,
                            y: 0,
                          };

                        const x =
                          baseX + offset.x;

                        const y =
                          baseY + offset.y;

                        /*
                         * Mantemos o tamanho
                         * original das bolhas.
                         */

                        const radius =
                          Math.max(
                            point.size * 1.15,
                            6
                          );

                        /*
                         * Transparência.
                         */

                        const bubbleOpacity =
                          point.country === "Brazil"
                            ? 0.78
                            : 0.58;

                        const bubbleColor =
                          point.highlight
                            ? "#b98aff"
                            : getWorkBubbleColor(
                                point.exposure
                              );

                        /*
                         * POSIÇÃO DOS LABELS
                         */

                        const labelPositions: Record<
                          string,
                          {
                            x: number;
                            y: number;
                            anchor:
                              | "start"
                                
                              | "end";
                          }
                        > = {

                          "United States": {
  x: x,
  y: y + radius + 18,
  anchor: "start",
},

                          "United Kingdom": {
  x: x + radius -40,
  y: y - radius - 38,
  anchor: "start",
},

                          France: {
                            x:
                              x +
                              radius +
                              8 ,
                            y: y - 10,
                            anchor: "start",
                          },

                          Germany: {
                            x:
                              x +
                              radius +
                              12,
                            y: y - 12,
                            anchor: "start",
                          },

                          Canada: {
  x: x + radius + 12,
  y: y + radius + 1,
  anchor: "start",
},

                          Australia: {
  x:
    x -
    radius -
    5,
  y: y - 30,
  anchor: "end",
},

                          Spain: {
                            x:
                              x +
                              radius +
                              12,
                            y: y + 2,
                            anchor: "start",
                          },

                          Brazil: {
                            x:
                              x +
                              radius +
                              12,
                            y: y - 8,
                            anchor: "start",
                          },

                          India: {
                            x:
                              x +
                              radius +
                              12,
                            y: y + 4,
                            anchor: "start",
                          },

                          China: {
                            x:
                              x -
                              radius -
                              12,
                            y: y - 8,
                            anchor: "end",
                          },

                        };

                        const label =
                          labelPositions[
                            point.country
                          ] ?? {
                            x:
                              x +
                              radius +
                              12,
                            y: y - 8,
                            anchor:
                              "start" as const,
                          };

                        return (

                          <g
                            key={
                              point.country
                            }
                          >

                            {/* GLOW */}

                            <circle
                              cx={x}
                              cy={y}
                              r={radius + 4}
                              fill={
                                bubbleColor
                              }
                              opacity={
                                point.country ===
                                "Brazil"
                                  ? 0.10
                                  : 0.055
                              }
                              filter={
                                point.country ===
                                "Brazil"
                                  ? "url(#workBrazilGlow)"
                                  : "url(#workBubbleGlow)"
                              }
                            />

                            {/* BORDA */}

                            <circle
                              cx={x}
                              cy={y}
                              r={radius}
                              fill="none"
                              stroke={
                                bubbleColor
                              }
                              strokeWidth="1"
                              opacity={0.35}
                            />

                            {/* BOLHA */}

                            <circle
                              cx={x}
                              cy={y}
                              r={radius}
                              fill={
                                bubbleColor
                              }
                              opacity={
                                bubbleOpacity
                              }
                            />

                            
<line
  x1={
    label.anchor === "start"
      ? x + radius
      : x - radius
  }
  y1={y}
  x2={label.x}
  y2={label.y + 6}
  stroke="rgba(245,245,245,.35)"
  strokeWidth="1"
  strokeDasharray="2 3"
/>
                            {/* LABEL */}

<g
  style={{
    pointerEvents: "none",
  }}
>
  {/* PAÍS */}
  <text
    x={label.x}
    y={label.y}
    textAnchor={label.anchor}
   className={
  point.highlight
    ? `${styles.workDataLabelHighlight} ${styles.workScatterCountry}`
    : styles.workScatterCountry
}
    style={{
  fontWeight: 500,
}}
  >
    {point.short}
  </text>

  {/* EXPOSIÇÃO */}
  <text
    x={label.x}
    y={label.y + 18}
    textAnchor={label.anchor}
    className={styles.workScatterValue}
    style={{
      paintOrder: "stroke",
      stroke: "#0d0d10",
      strokeWidth: "6px",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      fontWeight: 500,
    }}
  >
    {point.exposure}%{" "}
    {isPT ? "expostos" : "exposed"}
  </text>
</g>
                          </g>

                        );

                      }
                    )}

                  </svg>

                </div>

              </div>

              <div
                className={
                  styles.workScatterXAxis
                }
              >

                <span>0%</span>
                <span>15%</span>
                <span>30%</span>
                <span>45%</span>
                <span>60%</span>

              </div>

              <div
                className={
                  styles.workScatterInsight
                }
              >

                <div
                  className={
                    styles.workScatterInsightBullet
                  }
                />

                <strong>
                  ~40%
                </strong>

                <span>
                  {isPT
                    ? "DO EMPREGO GLOBAL EXPOSTO À IA"
                    : "OF GLOBAL EMPLOYMENT EXPOSED TO AI"}
                </span>

              </div>

              <div
                className={
                  styles.workScatterSource
                }
              >
                {isPT
                  ? "Fonte: IMF · Gen-AI exposure estimates · 2024"
                  : "Source: IMF · Gen-AI exposure estimates · 2024"}
              </div>

            </div>

          </article>

          <article
            className={
              styles.visualCard
            }
          >

            <div
              className={
                styles.visualHeader
              }
            >

              <div>

                <span
                  className={
                    styles.visualEyebrow
                  }
                >
                  PEOPLE
                </span>

                <h2>
                  {isPT
                    ? "COMO A IA É UTILIZADA"
                    : "AI ADOPTION & USE"}
                </h2>

              </div>

            </div>

           <div className={styles.aiUseChart}>

  <div className={styles.aiUseHeader}>

    <span>
      {isPT
        ? "% DE MENSAGENS"
        : "% OF MESSAGES"}
    </span>

    <span>
      {isPT ? "GLOBAL" : "GLOBAL"}
    </span>

  </div>

  {/* WORK × NON-WORK */}

  <div className={styles.aiUseSplit}>

    <div className={styles.aiUseSplitItem}>

      <div className={styles.aiUseSplitTop}>
        <span>
          {isPT ? "VIDA PESSOAL" : "NON-WORK"}
        </span>

        <strong>70%</strong>
      </div>

      <div className={styles.aiUseTrack}>
        <div
          className={`${styles.aiUseBar} ${styles.aiUseBarPrimary}`}
          style={{ width: "70%" }}
        />
      </div>

      <small>
        {isPT
          ? "USO FORA DO TRABALHO"
          : "USE OUTSIDE WORK"}
      </small>

    </div>

    <div className={styles.aiUseSplitItem}>

      <div className={styles.aiUseSplitTop}>
        <span>
          {isPT ? "TRABALHO" : "WORK"}
        </span>

        <strong>30%</strong>
      </div>

      <div className={styles.aiUseTrack}>
        <div
          className={`${styles.aiUseBar} ${styles.aiUseBarSecondary}`}
          style={{ width: "30%" }}
        />
      </div>

      <small>
        {isPT
          ? "USO RELACIONADO AO TRABALHO"
          : "WORK-RELATED USE"}
      </small>

    </div>

  </div>

  {/* PRINCIPAIS USOS */}

  <div className={styles.aiUseContext}>

    <div className={styles.aiUseContextTitle}>
      {isPT
        ? "PRINCIPAIS CONTEXTOS DE USO"
        : "LEADING USE CONTEXTS"}
    </div>

    <div className={styles.aiUseContextGrid}>

      <div className={styles.aiUseContextItem}>
  <span>29%</span>
  <strong>
    {isPT
      ? "ORIENTAÇÃO PRÁTICA"
      : "PRACTICAL GUIDANCE"}
  </strong>
</div>

<div className={styles.aiUseContextItem}>
  <span>24%</span>
  <strong>
    {isPT
      ? "BUSCA DE INFORMAÇÃO"
      : "SEEKING INFORMATION"}
  </strong>
</div>

<div className={styles.aiUseContextItem}>
  <span>24%</span>
  <strong>
    {isPT
      ? "ESCRITA"
      : "WRITING"}
  </strong>
</div>

<div className={styles.aiUseContextItem}>
  <span>23%</span>
  <strong>
    {isPT
      ? "OUTROS USOS"
      : "OTHER USES"}
  </strong>
</div>
    </div>

  </div>

  {/* INSIGHT */}

  <div className={styles.aiUseInsight}>

    <div className={styles.aiUseInsightBullet} />

    <strong>
      70%
    </strong>

    <span>
      {isPT
        ? "DO USO ACONTECE FORA DO TRABALHO"
        : "OF USE HAPPENS OUTSIDE WORK"}
    </span>

  </div>

  {/* SOURCE */}

  <div className={styles.aiUseSource}>
    {isPT
      ? "Fonte: OpenAI Economic Research · How People Use ChatGPT · 2025"
      : "Source: OpenAI Economic Research · How People Use ChatGPT · 2025"}
  </div>

</div>

          </article>

        </section>

        {/* =================================================
            MARKETS — GEN AI USE BY INDUSTRY
        ================================================= */}

       <article
  className={`${styles.visualCard} ${styles.fullWidthCard}`}
>

          <div className={styles.visualHeader}>

            <div>

              <span className={styles.visualEyebrow}>
                MARKETS
              </span>

              <h2>
                {isPT
                  ? "USO DE IA GENERATIVA POR SETOR"
                  : "GEN AI USE BY INDUSTRY"}
              </h2>

            </div>

            <span className={styles.visualPeriod}>
              2024
            </span>

          </div>

          <div className={styles.industryChart}>

  <div className={styles.industryGrid}>

    {[
      {
        name: isPT ? "TECNOLOGIA" : "TECHNOLOGY",
        value: 88,
      },
      {
        name: isPT
          ? "SERVIÇOS PROFISSIONAIS"
          : "PROFESSIONAL SERVICES",
        value: 80,
      },
      {
        name: isPT
          ? "INDÚSTRIAS AVANÇADAS"
          : "ADVANCED INDUSTRIES",
        value: 79,
      },
      {
        name: "MEDIA & TELECOM",
        value: 79,
      },
      {
        name: isPT
          ? "BENS DE CONSUMO & VAREJO"
          : "CONSUMER GOODS & RETAIL",
        value: 68,
      },
      {
        name: isPT
          ? "SERVIÇOS FINANCEIROS"
          : "FINANCIAL SERVICES",
        value: 65,
      },
      {
        name: isPT
          ? "SAÚDE & FARMACÊUTICA"
          : "HEALTHCARE & PHARMA",
        value: 63,
      },
      {
        name: isPT
          ? "ENERGIA & MATERIAIS"
          : "ENERGY & MATERIALS",
        value: 59,
      },
    ].map((industry, index) => (

      <div
        key={industry.name}
        className={`${styles.industryCard} ${
          index === 0
            ? styles.industryCardHighlight
            : ""
        }`}
      >

        <div className={styles.industryCardTop}>

          <span className={styles.industryRank}>
            #{index + 1}
          </span>

          <span className={styles.industryName}>
            {industry.name}
          </span>

        </div>

        <div className={styles.industryValueRow}>

          <strong className={styles.industryValue}>
            {industry.value}
          </strong>

          <span className={styles.industryPercent}>
            %
          </span>

        </div>

        <div className={styles.industryTrack}>

          <div
            className={styles.industryBar}
            style={{
              width: `${industry.value}%`,
            }}
          />

        </div>

      </div>

    ))}

  </div>

  <div className={styles.industryInsight}>

    <div className={styles.industryInsightBullet} />

    <strong>
      88%
    </strong>

    <span>
      {isPT
        ? "TECNOLOGIA LIDERA A ADOÇÃO DE IA GENERATIVA"
        : "TECHNOLOGY LEADS GENERATIVE AI ADOPTION"}
    </span>

  </div>

  <div className={styles.industrySource}>
    {isPT
      ? "Fonte: McKinsey Global Survey on the State of AI · 2024"
      : "Source: McKinsey Global Survey on the State of AI · 2024"}
  </div>

</div>
</article>
{/* =================================================
    GLOBAL — KEY INSIGHTS
================================================= */}

<section className={styles.insightsSection}>

  <div className={styles.insightsHeader}>

    <div>
      <span className={styles.visualEyebrow}>
        GLOBAL
      </span>

      <h2>
        {isPT
          ? "PRINCIPAIS INSIGHTS"
          : "KEY INSIGHTS"}
      </h2>
    </div>

  </div>

  <div className={styles.insightsGrid}>

    {/* INSIGHT 01 */}

    <article className={styles.insightCard}>

      <span className={styles.insightNumber}>
        01
      </span>

      <strong className={styles.insightValue}>
        70%
      </strong>

      <h3>
        {isPT
          ? "A IA já faz parte da vida cotidiana"
          : "AI is already part of everyday life"}
      </h3>

      <p>
        {isPT
          ? "A maior parte do uso do ChatGPT acontece fora do ambiente de trabalho."
          : "Most ChatGPT usage happens outside the workplace."}
      </p>

    </article>


    {/* INSIGHT 02 */}

    <article className={styles.insightCard}>

      <span className={styles.insightNumber}>
        02
      </span>

      <strong className={styles.insightValue}>
        ~40%
      </strong>

      <h3>
        {isPT
          ? "O trabalho está no centro da transformação"
          : "Work is at the center of the transformation"}
      </h3>

      <p>
        {isPT
          ? "Uma parcela significativa do emprego global já está exposta à IA generativa."
          : "A significant share of global employment is already exposed to generative AI."}
      </p>

    </article>


    {/* INSIGHT 03 */}

    <article className={styles.insightCard}>

      <span className={styles.insightNumber}>
        03
      </span>

      <strong className={styles.insightValue}>
        23×
      </strong>

      <h3>
        {isPT
          ? "O investimento está altamente concentrado"
          : "Investment is highly concentrated"}
      </h3>

      <p>
        {isPT
          ? "Os Estados Unidos lideram o investimento privado em IA com ampla vantagem."
          : "The United States leads private AI investment by a wide margin."}
      </p>

    </article>


    {/* INSIGHT 04 */}

    <article className={styles.insightCard}>

      <span className={styles.insightNumber}>
        04
      </span>

      <strong className={styles.insightValue}>
        +239%
      </strong>

      <h3>
        {isPT
          ? "A adoção continua acelerando"
          : "Adoption continues to accelerate"}
      </h3>

      <p>
        {isPT
          ? "O número projetado de usuários diários de IA cresce fortemente entre 2020 e 2025."
          : "Projected daily AI users grow sharply between 2020 and 2025."}
      </p>

    </article>

  </div>

</section>
      </div>
<footer className={styles.dashboardFooter}>

  <div className={styles.footerBrand}>
    THE AI ECONOMY
  </div>

  <div className={styles.footerCenter}>
    {isPT
      ? "IA · PESSOAS · TRABALHO · MERCADOS"
      : "AI · PEOPLE · WORK · MARKETS"}
  </div>

  <div className={styles.footerMeta}>
    {isPT
      ? "ESTUDO · 2026"
      : "STUDY · 2026"}
  </div>

</footer>
    </main>
  );
}

export default AIEconomy;