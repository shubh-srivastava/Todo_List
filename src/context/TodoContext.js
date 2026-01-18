import {createContext, useState} from 'react';
import { useContext } from 'react';

export const TodoContext = createContext({
    todos:[
        {
            id:0,
            todo : "msg1fdgdf",
            completed : false,    
        },{
            id:1,
            todo : "msg2",
            completed : true,
        }
    ],
    addTodo : (todo)=>{},
    updateTodo :(id,todo) =>{},
    deleteTodo :(id) =>{},
    toggleTodo :(id) =>{}
});



export const useTodo = () =>{
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider;