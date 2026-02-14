import { useState } from "react";

function Contas({ contas, setContas }) {

  const [nome, setNome] = useState("");

  function adicionarConta() {
    if (!nome.trim()) return;

    const nova = {
      id: Date.now(),
      nome
    };

    setContas([...contas, nova]);
    setNome("");
  }

  function excluirConta(id) {
    setContas(contas.filter(c => c.id !== id));
  }

  return (
    <div>

      <h1>Contas</h1>

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