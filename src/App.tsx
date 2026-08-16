
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/home/home";
import Metodologia from "./pages/metodologia/Metodologia";
import Trajetoria from "./pages/trajetoria/Trajetoria";
import Projetos from "./pages/projetos/projetos";
import Contato from "./pages/contato/Contato";
import StudyCase from "./pages/TheAIEconomy/studyCase/StudyCase";
import AIEconomy from "./pages/TheAIEconomy/Dash/AIEconomy";
import EnsaioIA from "./pages/EnsaioIA/EnsaioIA";

import { LanguageProvider } from "./context/LanguageContext";

function App() {
  return (
    <BrowserRouter>

  <LanguageProvider>

    <Navbar />

    <Routes>

      <Route
        path="/"
        element={<Home />}
      />

      <Route
        path="/metodologia"
        element={<Metodologia />}
      />

      <Route
        path="/trajetoria"
        element={<Trajetoria />}
      />

      <Route
        path="/projetos"
        element={<Projetos />}
      />

       <Route
  path="/projects/the-ai-economy/study-case"
  element={<StudyCase />}
/>

<Route
  path="/projects/the-ai-economy/dash"
  element={<AIEconomy />}
/>

      <Route
        path="/contato"
        element={<Contato />}
      />

      <Route
  path="/projects/ensaio-ia"
  element={<EnsaioIA />}
/>

    </Routes>

    <Analytics />

  </LanguageProvider>

</BrowserRouter>
  );
}

export default App;