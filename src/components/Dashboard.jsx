function Dashboard({ lancamentos }) {
  const entradas = lancamentos
    .filter(l => l.tipo === "entrada")
    .reduce((acc, l) => acc + Number(l.valor), 0);

  const saidas = lancamentos
    .filter(l => l.tipo === "saida")
    .reduce((acc, l) => acc + Number(l.valor), 0);

  const saldo = entradas - saidas;

  return (
    <div className="dashboard-container">
      <h2 className="dashboard-title">Dashboard Financeiro</h2>

      <div className="cards">
        <div className="card">
          <h3>Entradas</h3>
          <p className="valor-positivo">
            R$ {entradas.toFixed(2)}
          </p>
        </div>

        <div className="card">
          <h3>Saídas</h3>
          <p className="valor-negativo">
            R$ {saidas.toFixed(2)}
          </p>
        </div>

        <div className="card">
          <h3>Saldo</h3>
          <p className={saldo >= 0 ? "valor-positivo" : "valor-negativo"}>
            R$ {saldo.toFixed(2)}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;