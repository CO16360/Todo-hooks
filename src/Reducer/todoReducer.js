import React from 'react'

const TodoReducer = (state, action) => {
    switch (action.type) {
        case "TODO_CHANGE_HANDLER":
            return{
                ...state,
                title : action.value
            }

        case "ADD":
             const update= state.edit ? false : false
            return {
                ...state,
            edit:update,

                todoList: state.todoList.concat({ todo: action.todo, id: new Date() })
            }

        case "DELETE":
            console.log(action.id)
            return {
                ...state,
                todoList: state.todoList.filter(t => t.id != action.id)
            }

        case "CLEAR_ALL":
            return {
                ...state,
                todoList: []
            }
        case "EDIT":
            return {
                ...state,
                title: action.title,
                todoList: state.todoList.filter(t => t.id != action.id),
                edit:true
            }
        default:
            return state
    }

}

export default TodoReducer
