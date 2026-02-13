function Dashboard({ lancamentos }) {
  const totalEntradas = lancamentos
    .filter(l => l.tipo === "entrada")
    .reduce((acc, l) => acc + Number(l.valor), 0);

  const totalSaidas = lancamentos
    .filter(l => l.tipo === "saida")
    .reduce((acc, l) => acc + Number(l.valor), 0);

  const saldo = totalEntradas - totalSaidas;

  return (
    <div>
      <h1>Dashboard</h1>

      <div className="cards">

        <div className="card entrada">
          <h3>Entradas</h3>
          <p>R$ {totalEntradas.toFixed(2)}</p>
        </div>

        <div className="card saida">
          <h3>Saídas</h3>
          <p>R$ {totalSaidas.toFixed(2)}</p>
        </div>

        <div className="card saldo">
          <h3>Saldo</h3>
          <p>R$ {saldo.toFixed(2)}</p>
        </div>

      </div>
    </div>
  );
}

export default Dashboard;