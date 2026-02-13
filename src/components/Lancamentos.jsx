import { useState } from "react";

export default function Lancamentos() {
  const [lancamentos, setLancamentos] = useState([]);

  const [form, setForm] = useState({
    descricao: "",
    valor: "",
    tipo: "despesa",
    forma: "pix",
    categoria: "",
    dataPrevista: "",
    status: "aberto",
  });

  function atualizarCampo(campo, valor) {
    setForm({ ...form, [campo]: valor });
  }

  function adicionar(e) {
    e.preventDefault();

    if (!form.descricao || !form.valor) return;

    const novo = {
      id: Date.now(),
      ...form,
      valor: parseFloat(form.valor),
    };

    setLancamentos([novo, ...lancamentos]);

    setForm({
      descricao: "",
      valor: "",
      tipo: "despesa",
      forma: "pix",
      categoria: "",
      dataPrevista: "",
      status: "aberto",
    });
  }

  function excluir(id) {
    setLancamentos(lancamentos.filter(l => l.id !== id));
  }

  function alternarStatus(id) {
    setLancamentos(
      lancamentos.map(l =>
        l.id === id
          ? { ...l, status: l.status === "aberto" ? "pago" : "aberto" }
          : l
      )
    );
  }

  return (
    <div className="layout">

      {/* FORMULÁRIO */}

      <form className="painel" onSubmit={adicionar}>
        <h2>Novo lançamento</h2>

        <input
          placeholder="Descrição"
          value={form.descricao}
          onChange={e => atualizarCampo("descricao", e.target.value)}
        />

        <input
          type="number"
          placeholder="Valor"
          value={form.valor}
          onChange={e => atualizarCampo("valor", e.target.value)}
        />

        <select
          value={form.tipo}
          onChange={e => atualizarCampo("tipo", e.target.value)}
        >
          <option value="despesa">Despesa</option>
          <option value="receita">Receita</option>
        </select>

        <select
          value={form.forma}
          onChange={e => atualizarCampo("forma", e.target.value)}
        >
          <option value="pix">PIX</option>
          <option value="debito">Débito</option>
          <option value="credito">Crédito</option>
          <option value="dinheiro">Dinheiro</option>
        </select>

        <input
          type="date"
          value={form.dataPrevista}
          onChange={e =>
            atualizarCampo("dataPrevista", e.target.value)
          }
        />

        <button type="submit">Adicionar</button>
      </form>

      {/* LISTA */}

      <div className="tabela">

        <h2>Lançamentos</h2>

        <table>
          <thead>
            <tr>
              <th>Descrição</th>
              <th>Valor</th>
              <th>Tipo</th>
              <th>Forma</th>
              <th>Data</th>
              <th>Status</th>
              <th></th>
            </tr>
          </thead>

          <tbody>
            {lancamentos.map(l => (
              <tr key={l.id}>
                <td>{l.descricao}</td>

                <td
                  className={
                    l.tipo === "receita"
                      ? "receita"
                      : "despesa"
                  }
                >
                  R$ {l.valor.toFixed(2)}
                </td>

                <td>{l.tipo}</td>
                <td>{l.forma}</td>
                <td>{l.dataPrevista}</td>

                <td>
                  <button
                    className={
                      l.status === "pago"
                        ? "pago"
                        : "aberto"
                    }
                    onClick={() =>
                      alternarStatus(l.id)
                    }
                  >
                    {l.status}
                  </button>
                </td>

                <td>
                  <button
                    className="excluir"
                    onClick={() =>
                      excluir(l.id)
                    }
                  >
                    ✕
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

      </div>

    </div>
  );
}