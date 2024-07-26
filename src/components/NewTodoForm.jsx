import { useState } from "react";

function TodoForm ({handleSubmit}) {

    const todoDefault = {
        name: '',
        description: ''
    } 

    const [newTodo, setNewTodo] = useState(todoDefault);

    const handleChange = (e) => {
        setNewTodo(currentState => ({
            ...currentState,
            [e.target.name]: e.target.value
        }))
    }

    return (
        <div 
            className="todo-form"
            onSubmit={(e) => {
                e.preventDefault();
                handleSubmit(newTodo);
                setNewTodo(todoDefault);
            }}
        >
            <form>
                <p>Criar nova tarefa</p>

                <div className="input-wraper">
                    <label htmlFor="name">Nome</label>
                    <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        value={newTodo.name} 
                        onChange={handleChange}
                    />
                </div>

                <div className="input-wraper">
                    <label htmlFor="description">Descrição</label>
                    <input 
                        type="text" 
                        id="description" 
                        name="description"
                        value={newTodo.description} 
                        onChange={handleChange} 
                    />
                </div>

                <div className="input-wraper">
                    <button type="submit">
                        Criar tarefa
                    </button>
                </div>

            </form>
        </div>
    )
}

export default TodoForm;