import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/home/home";
import Metodologia from "./pages/metodologia/Metodologia";
import Trajetoria from "./pages/trajetoria/Trajetoria";
import Projetos from "./pages/projetos/projetos";
import Contato from "./pages/contato/Contato";

function App() {
  return (
    <BrowserRouter>

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
          path="/contato"
          element={<Contato />}
        />

      </Routes>

            <Analytics />


    </BrowserRouter>
  );
}

export default App;