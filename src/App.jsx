import { useState } from "react";
import Dashboard from "./components/Dashboard.jsx";
import Lancamentos from "./components/Lancamentos.jsx";
import Contas from "./components/Contas.jsx";
import "./App.css";

function App() {
  const [pagina, setPagina] = useState("dashboard");
  const [lancamentos, setLancamentos] = useState([]);

  return (
    <div className="app-container">
      <nav>
        <button onClick={() => setPagina("dashboard")}>
          Dashboard
        </button>

        <button onClick={() => setPagina("lancamentos")}>
          Lançamentos
        </button>

        <button onClick={() => setPagina("contas")}>
          Contas
        </button>
      </nav>

      {pagina === "dashboard" && (
        <Dashboard lancamentos={lancamentos} />
      )}

      {pagina === "lancamentos" && (
        <Lancamentos
          lancamentos={lancamentos}
          setLancamentos={setLancamentos}
        return (
  <div className="container"></div>
      )}

      {pagina === "contas" && <Contas />}
    
  );
}

export default App;