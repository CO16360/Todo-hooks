
import React, { useContext } from "react";
import TodoContext from "../context/TodoContext";
import TodoItem from "./TodoItem";


const TodoList =props=>{

    const {todoList} = useContext(TodoContext);
    const {clearAll} = useContext(TodoContext)
    

    return (
      <ul className="list-group my-5">
        <h3 className="text-capitalize text-center">todo list</h3>
        {todoList.map((item,index) => {
          return (
            <TodoItem
            key={index}
            id={item.id}
            title={item.todo} 
            />
          );
        })}

        <button
          type="button"
          className="btn btn-danger btn-block text-capitalize mt-5"
          onClick={clearAll}
        >
          clear list
        </button>
      </ul>
    );
  }
 



export default TodoList;