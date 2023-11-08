import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos:[{id:1, text:"Hello World"}],
}

export const todoSlice = createSlice({
    name:'todo',
    initialState,
    reducers: {
        //prop and function
        addTodo: (state, action)=>{
            const todo = {
                id:nanoid(),
                text: action.payload,
                //payload is a object that can have anything like id, text etc.
            }
            state.todos.push(todo);
        },
        removeTodo: (state, action)=>{
            state.todos = state.todos.filter((todo)=>todo.id !==action.payload);
        },
    }
});

export const {addTodo, removeTodo} = todoSlice.actions;

export default todoSlice.reducer;