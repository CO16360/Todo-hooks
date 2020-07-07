import React, { createContext, useReducer } from 'react';
import TodoReducer from '../Reducer/todoReducer'

const initialState = {
    title: "", todoList: [{todo:"a",id:"a"},{todo:"b",id:"b"}]
}
const TodoContext = createContext(initialState);

export const GlobalProvider = props => {
    const [state, dispatch] = useReducer(TodoReducer, initialState);

    function deleteTodo(id) {
        dispatch({
            type: "DELETE",
            id: id
        })
    }
    function addTodo(todo) {
        dispatch({
            type: "ADD",
            todo: todo
        })
    }
    function clearAll() {
        dispatch({
            type: "CLEAR_ALL"
        })
    }
    function editTodo(id,title){
        dispatch({
            type:"EDIT",
            id:id,
            title:title
        })
    }
    function handleTodoChange(value){
        dispatch({
            type:"TODO_CHANGE_HANDLER",
            value:value
        })
    }

    return (
        <TodoContext.Provider value={{
            title: state.title,
            todoList: state.todoList,
            addTodo,
            deleteTodo,
            clearAll,
            editTodo,
            handleTodoChange
        }}>{props.children}</TodoContext.Provider>
    )

}


export default TodoContext;