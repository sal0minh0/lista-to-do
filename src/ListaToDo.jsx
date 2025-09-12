import React, {useState} from 'react';

function ListaToDo(){

    const [tarefas, setTarefas] = useState([]);
    const [novaTarefa, setNovaTarefa] = useState("");

    function lidaComMudancaDeInput(event){
        setNovaTarefa(event.target.value);
    }

    function adicionaTarefa(){

    }

    function deletaTarefa(indice){

    }

    function moveTarefaParaCima(indice){

    }

    function moveTarefaParaBaixo(indice){

    }

    return (
    <div className="lista-todo">

        <h1>Lista To-do em Português</h1>
        
        <div>
        <input 
            type="text"
            placeholder="Adicionar tarefa..."
            value={novaTarefa}
            onChange={lidaComMudancaDeInput}
        />
        </div>
    </div>
        );
}

export default ListaToDo;