import React, {useContext} from "react";
import TodoContext from "../context/TodoContext";


 const TodoItem =props=>{
   const {deleteTodo} = useContext(TodoContext)
   const {editTodo} = useContext(TodoContext)
    
  
    return (
      <li className="list-group-item text-capitalize d-flex justify-content-between my-2" style={{border:"1px solid grey"}}>
        <h6>{props.title}</h6>
        <div className="todo-icon">
          <span className="mx-2 text-success" >
            <i className="fas fa-pen" onClick={()=>{console.log(props.title); editTodo(props.id , props.title)}}/>
          </span>
          <span className="mx-2 text-danger" >
            <i className="fas fa-trash" onClick={()=>deleteTodo(props.id)} />
          </span>
        </div>
      </li>
    );
  
}

export default TodoItem;