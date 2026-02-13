import { useState } from "react";

function Contas() {
  const [contas, setContas] = useState([]);
  const [nome, setNome] = useState("");

  function adicionarConta() {
    if (!nome.trim()) return;

    setContas([...contas, { id: Date.now(), nome }]);
    setNome("");
  }

  function excluirConta(id) {
    setContas(contas.filter(c => c.id !== id));
  }

  return (
    <div>
      <h2>Contas</h2>

      <input
        placeholder="Nome do banco"
        value={nome}
        onChange={e => setNome(e.target.value)}
      />

      <button onClick={adicionarConta}>
        Adicionar
      </button>

      {contas.map(c => (
        <div key={c.id}>
          {c.nome}
          <button onClick={() => excluirConta(c.id)}>
            Excluir
          </button>
        </div>
      ))}
    </div>
  );
}

export default Contas;