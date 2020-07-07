import React, { useState,useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import TodoContext from '../context/TodoContext';



const TodoInput = () => {
    //const [title, setTodo] = useState("");
    const {title} = useContext(TodoContext)
    const {addTodo} = useContext(TodoContext)
    const {handleTodoChange} = useContext(TodoContext)

    const todoAddHandler = (event) => {
        event.preventDefault();
        addTodo(title);
        
    }

    const onHandleChange=(event)=>{
        
        handleTodoChange(event.target.value);
    }
    return (
        
            <div className="card card-body  " style={{border:"1px solid grey"}}>

                <form >
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <div className="input-group-text bg-primary text-white">
                                <i className="fas fa-book" />

                            </div>
                        </div>
                        <input
                            type="text"
                            className="form-control text-capitalize"
                            placeholder="add a todo item"
                             value={title}
                             onChange={onHandleChange}
                            maxLength="22"
                        />
                    </div>
                    <button
                        type="submit"

                        className={
                            // this.props.edit
                            //     ? "btn btn-block btn-success mt-3"
                            //     : 
                            "btn btn-block btn-primary mt-3"
                        }
                        onClick={todoAddHandler}
                        disabled={!title}
                      
                    >
                        add
                        {/* {this.props.edit ? "edit item" : "add item"} */}
                    </button>
                </form>
            </div>
        )
    
                    }


export default TodoInput;