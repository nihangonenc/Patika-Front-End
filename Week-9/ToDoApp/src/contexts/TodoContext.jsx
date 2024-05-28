import { createContext, useContext, useState } from "react";
import {v4 as uuidv4} from "uuid";

const TodoContext = createContext();

export const TodoProvider = ({children}) => { //App.jsx te bu isimle sarmalıycaz
    const [filter, setFilter] = useState('all'); //başlangıçta footerda all kutusu işaretli 
    const [todos, setTodos] = useState([
        {
            id:1, 
            text: "Learn React", 
            completed: true
        },
        {
            id:2, 
            text: "Eat Clean", 
            completed: false
        }
    ]);

    const addTodo = (text) => { //yeni todo ekledik.
        setTodos((prev) => [...prev, {id: uuidv4(), completed: false, text }])
    }

    const toggleTodo = (id)=> { //eklenen todoları tıklanınca completed/notcompleted yaptık
        const cloned_todos = [...todos];
        const itemIndex = cloned_todos.findIndex((todo) => todo.id === id); //idyi seçtik
        const item = todos[itemIndex]; //seçili idlinin tüm değerlerine ulaştık
        item.completed = !item.completed; //completed keyinin değerini değiştirdik

        setTodos(cloned_todos); //güncelledik
    }
    
    const destroyTodo = (id) => {
        const cloned_todos = [...todos];
        const itemIndex = cloned_todos.findIndex((todo) => todo.id === id);
        
        cloned_todos.splice(itemIndex, 1); //indexli eleman dahil 1 eleman sil demek
        setTodos(cloned_todos); //seçili todoyu sildik
    };
    
    const values = { //context e geçeceğimiz veriler
        todos,
        setTodos,
        addTodo,
        toggleTodo,
        destroyTodo,
        filter,
        setFilter
    };
    
    return <TodoContext.Provider value={values}>{children}</TodoContext.Provider>;
};

export const useTodo = () => { //useTodo ismiyle kullanabileceğiz
    const context  = useContext(TodoContext);
    if(context === undefined){
        throw new Error ( "useTodo hook must be call inside TodoProvider component")
    }
    return context;
}