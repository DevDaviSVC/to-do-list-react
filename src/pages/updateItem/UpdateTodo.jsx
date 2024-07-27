import { Link, useNavigate, useParams } from "react-router-dom";
import useTodoList from "../../hooks/useTodoList";
import { useState } from "react";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function UpdateTodo () {
    const { id } = useParams();
    const navigate = useNavigate();

    const { todoList, updateTodo } = useTodoList();
    const todoReq = todoList.filter(todo => todo.id === +id)[0];

    const [todoToUpdate, setTodoToUpdate] = useState(todoReq);

    const handleChange = (e) => {
        setTodoToUpdate(currentState => ({
            ...currentState,
            [e.target.name]: e.target.value
        }))
    }

    return (
        <div className="update-todo-form">
            <Link to='/'><div className="leave-btn"><FontAwesomeIcon icon={faXmark} /></div></Link>
            <h2>Atualizando tarefa: {todoReq.name}</h2>
            <form onSubmit={(e) => {
                e.preventDefault();
                updateTodo(todoToUpdate);
                navigate('/');
            }}> 
                <div className="input-wraper">
                    <label htmlFor="name">Nome</label>
                    <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        value={todoToUpdate.name}
                        onChange={handleChange}
                    />
                </div>

                <div className="input-wraper">
                    <label htmlFor="description">Descrição</label>
                    <input 
                        type="text" 
                        id="description" 
                        name="description"
                        value={todoToUpdate.description}
                        onChange={handleChange} 
                    />
                </div>

                <div className="input-wraper">
                    <button type="submit">
                        Atualizar tarefa
                    </button>
                </div>

            </form>
        </div>
    )
}

export default UpdateTodo;