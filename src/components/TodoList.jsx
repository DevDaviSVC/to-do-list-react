import Todo from "../entities/todo";
import useTodoList from "../hooks/useTodoList";
import TodoForm from "./NewTodoForm";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark } from "@fortawesome/free-regular-svg-icons";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function TodoList () {
    const { todoList, addTodo, updateCheckboxTodo, deleteTodo } = useTodoList();

    const addNewTodo = ({ name, description }) => {
        let id = Math.trunc(Math.random() * 1000000000000000);

        // Verificando se o id já existe
        while (todoList.filter((todo) => todo.id === id).length !== 0) {
            id = Math.trunc(Math.random() * 1000000000000000);
        }

        let newTodo = new Todo(id, name, description);
        addTodo(newTodo);

    }

    return (
        <div className="todo-wraper">
            <TodoForm handleSubmit={addNewTodo}/>
            <div className="todo-list">
                <ul>
                    {todoList.map((todo) => {
                        return (
                            <li className="todo-single" key={todo.id}>
                                <div className="todo-inf">
                                    <h2>{todo.name}</h2>
                                    <p>{todo.description}</p>
                                </div>
                                <input 
                                    type="checkbox"
                                    checked={todo.isDone}
                                    onChange={(e) => {
                                        const isChecked = e.target.checked;
                                        updateCheckboxTodo(todo.id, isChecked);
                                    }}
                                />
                                <Link to={`/updateTodo/${todo.id}`}><i className="blue-btn"><FontAwesomeIcon icon={faPen} /></i></Link>

                                <i 
                                    className="danger-btn"
                                    onClick={() => deleteTodo(todo.id)}
                                >
                                    <FontAwesomeIcon icon={faCircleXmark} />
                                </i>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}

export default TodoList;