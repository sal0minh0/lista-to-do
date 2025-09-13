import React, {useState} from 'react';

function ListaToDo(){

    const [tarefas, setTarefas] = useState(['Tarefa_teste1', 'Tarefa_teste2', 'Tarefa_teste3']); //constante para setar as tarefas
    const [novaTarefa, setNovaTarefa] = useState("");

    function lidaComMudancaDeInput(event){
        setNovaTarefa(event.target.value); // faz com que o react visivelmente mude o input 
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
        <input // caixa de input
            type="text"
            placeholder="Adicionar tarefa..."
            value={novaTarefa}
            onChange={lidaComMudancaDeInput}
        />

        <button 
            className='adicionar-btn' //botao
            onClick={adicionaTarefa}>
                Add
            </button>
        </div> 

            <ol> 
                {tarefas.map((tarefa, indice) => 
                    <li key={indice}> 

                        <span className='texto'> {tarefa} </span>
                        {/*colocando o texto que foi setado na constante para mostrar*/}

                            <button 
                                className='deletar-btn'
                                onClick={() => deletaTarefa(indice)}> {/*Callback passando o indice como argumento para deletar*/}
                                    <span className="material-symbols-outlined">delete</span> {/* essa arrow function acima, serve para evitar o elemento ser chamado quando iniciar a pagina e sim chamar quando clicar o btn*/}
                                    </button> 
                            <button 
                                className='mover-tarefa-cima-btn'
                                onClick={() => moveTarefaParaCima(indice)}> {/*Mudar a cor */}
                                    <span class="material-symbols-outlined">arrow_upward</span>
                                    </button> 
                            <button 
                                className='mover-tarefa-baixo-btn'
                                onClick={() => moveTarefaParaBaixo(indice)}> {/*Mudar a cor */}
                                    <span class="material-symbols-outlined">arrow_downward</span>
                                    </button> 
                    </li> 
                )} 
            </ol> 

    </div>);
}

export default ListaToDo;