import { useState } from "react";
import Dashboard from "./components/Dashboard";

function App() {
  const [lancamentos, setLancamentos] = useState([]);

  return (
    <div>
      <Dashboard
        lancamentos={lancamentos}
        setLancamentos={setLancamentos}
      />
    </div>
  );
}

export default App;