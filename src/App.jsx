import { useState } from "react";
import Dashboard from "./components/Dashboard";

function App() {
  const [lancamentos, setLancamentos] = useState([]);

  return (
    <Dashboard
      lancamentos={lancamentos}
      setLancamentos={setLancamentos}
    />
  );
}

export default App;