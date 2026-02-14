function Dashboard({ lancamentos }) {
  const entradas = lancamentos
    .filter((item) => item.tipo === "entrada")
    .reduce((acc, item) => acc + item.valor, 0);

  const saidas = lancamentos
    .filter((item) => item.tipo === "saida")
    .reduce((acc, item) => acc + item.valor, 0);

  const saldo = entradas - saidas;

  return (
    <div className="container">
      <h1>Dashboard</h1>

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