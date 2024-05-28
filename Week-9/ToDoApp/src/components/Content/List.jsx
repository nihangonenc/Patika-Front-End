import React from 'react'
import { useTodo } from '../../contexts/TodoContext'

let filtered = null;

function List() {
    const {todos, destroyTodo, toggleTodo, filter} = useTodo(); //todoContext i kullandık
   
    filtered = todos; // all dersek tüm todoları almış olduk.
    if (filter !== "all") {
        filtered = todos.filter((todo) => 
           filter === "active" ? todo.completed === false : todo.completed === true
        );
    }
    console.log(filtered);

    const onChange = (id) => { //sayesinde eklenen verilere tıklayıp completed yapabiliyoruz
        toggleTodo(id);
    };
    
    const onDestroy = (id) => { //sayesinde todo siliyoruz
        destroyTodo(id);
    };
    
    return (
    <ul className="todo-list">
        {
            filtered.map( todo => (
                <li key={todo.id} className={todo.completed ? "completed" : "" }>
                <div className="view">
                    <input className="toggle" type="checkbox" checked ={todo.completed} onChange ={()=> onChange(todo.id)} />
                    {/* completed true ise yeşil tikli gelsin istiyoruz =checked verdik*/}
                    <label>{todo.text}</label>
                    <button className="destroy" onClick={()=> onDestroy(todo.id)}></button>
                </div>
            </li>
            ))
        }
    </ul>
  )
}

export default List
