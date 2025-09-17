import React, { useState } from 'react';

function ListaToDo() {
  const [tarefas, setTarefas] = useState([]); // Constante para setar o vetor tarefas
  const [novaTarefa, setNovaTarefa] = useState("");

  function lidaComMudancaDeInput(event) {
    setNovaTarefa(event.target.value); // Faz com que o react visivelmente mude o input
  }

  function teclaPressionada(event) { // Usuário pode enviar suas tarefas pelo botão "Enter"
    if (event.key === "Enter" && novaTarefa.trim() !== "") {
      setTarefas(t => [...t, novaTarefa]); // ...t -> elementos atuais de "tarefas"
      setNovaTarefa(""); // string vazia para resetar
    }
  }

  function adicionaTarefa() { // Ou adicionar pelo Botão
    if (novaTarefa.trim() !== "") {
      setTarefas(t => [...t, novaTarefa]);
      setNovaTarefa("");
      // console.log(tarefas); // lembre-se: setState é assíncrono
    }
  }

  function deletaTarefa(indice) {
    const tarefasAtualizadas = tarefas.filter((_, posicao) => posicao !== indice); // "_" é convenção para ignorar o elemento
    setTarefas(tarefasAtualizadas); // atualiza o vetor com as tarefas removidas
  }

  function moveTarefaParaCima(indice) {
    if (indice > 0) { // Se a tarefa já não tiver no topo da lista
      const tarefasAtualizadas = [...tarefas]; // copia do vetor atual
      // troca usando desestruturação com RHS sendo um array válido
      [tarefasAtualizadas[indice], tarefasAtualizadas[indice - 1]] =
        [tarefasAtualizadas[indice - 1], tarefasAtualizadas[indice]];
      setTarefas(tarefasAtualizadas);
    }
  }

  function moveTarefaParaBaixo(indice) {
    if (indice < tarefas.length - 1) { // Se a tarefa já não tiver na última posição
      const tarefasAtualizadas = [...tarefas];
      [tarefasAtualizadas[indice], tarefasAtualizadas[indice + 1]] =
        [tarefasAtualizadas[indice + 1], tarefasAtualizadas[indice]];
      setTarefas(tarefasAtualizadas);
    }
  }

  return (
    <div className="lista-to-do">
      <h1>Lista To-do em Português</h1>

      <div>
        <input
          type="text" // caixa de input
          placeholder="Adicionar..."
          value={novaTarefa}
          onChange={lidaComMudancaDeInput}
          onKeyUp={teclaPressionada}
        />

        <button
          className="adicionar-btn" // botão
          onClick={adicionaTarefa}>
          <span className="material-symbols-outlined">add_2</span>
        </button>
      </div>

      <ol>
        {tarefas.map((tarefa, indice) =>
          <li key={indice}>
            <span className='texto'>{tarefa}</span>

            <button
              className='deletar-btn'
              onClick={() => deletaTarefa(indice)}>
              <span className="material-symbols-outlined">delete</span>
            </button>
            <button
              className='mover-tarefa-cima-btn'
              onClick={() => moveTarefaParaCima(indice)}>
              <span className="material-symbols-outlined">arrow_upward</span>
            </button>
            <button
              className='mover-tarefa-baixo-btn'
              onClick={() => moveTarefaParaBaixo(indice)}>
              <span className="material-symbols-outlined">arrow_downward</span>
            </button>
          </li>
        )}
      </ol>
    </div>
  );
}

export default ListaToDo;