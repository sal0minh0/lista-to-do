import React, {useState} from 'react';

function ListaToDo(){

    const [tarefas, setTarefas] = useState([]); {/* Constante para setar o vetor tarefas */}
    const [novaTarefa, setNovaTarefa] = useState("");

    function lidaComMudancaDeInput(event){
        setNovaTarefa(event.target.value); {/* Faz com que o react visivelmente mude o input */}
    }

    function teclaPressionada(event) { {/* Usuário pode enviar suas tarefas pelo botão "Enter" */}
            if (event.key === "Enter" && novaTarefa.trim() !== "") {
                setTarefas(t => [...t, novaTarefa]); {/*...t-> elementos atuais de "tarefas" (copia os elementos atuais do array) e t é o estado anterior de "tarefas"*/}
                setNovaTarefa(""); {/* string vazia para resetar */}
            }     
    };

    function adicionaTarefa(){ {/* Ou adicionar pelo Botão */}
        if (novaTarefa.trim() !== "") {
            setTarefas(t => [...t, novaTarefa]); 
            setNovaTarefa(""); 
            console.log(tarefas);
        }
    }

    function deletaTarefa(indice){
        const tarefasAtualizadas = tarefas.filter((_, posicao) => posicao !== indice ); {/* "_" é uma convenção para dizer que ignore tal elemento */}
        setTarefas(tarefasAtualizadas); {/* Colocando o novo vetor agora com as com as tarefas removidas */}
    }

    function moveTarefaParaCima(indice){
        if (indice > 0) { {/* Se a tarefa já não tiver no topo da lista (array)*/}
            const tarefasAtualizadas = [...tarefas]; {/* Pegamos o vetor tarefas atual */}
            [tarefasAtualizadas[indice], tarefasAtualizadas[indice - 1]] = {/* Basicamente estamos trocando o indíce atual pelo anterior */}
            [tarefasAtualizadas[indice - 1], tarefasAtualizadas[indice]];

            setTarefas(tarefasAtualizadas);
        }
    }

    function moveTarefaParaBaixo(indice){
        if (indice < tarefas.length - 1) { {/* Se a tarefa já não tiver na última posição da lista (array), lembre-se que o lenght é a quantidade de elementos por isso para pegar o ultimo temos que diminuir por 1*/}
            const tarefasAtualizadas = [...tarefas];
            [tarefasAtualizadas[indice], tarefasAtualizadas[indice + 1]] = {/* Basicamente estamos trocando o indíce atual pelo posterior */}
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
            className='adicionar-btn' // botao
            onClick={adicionaTarefa}>
                <span class="material-symbols-outlined">add_2</span>
            </button>
        </div> 

            <ol> 
                {/* Aqui criamos um vetor tarefa com seus indices 1,2,3... */}
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