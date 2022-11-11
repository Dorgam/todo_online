import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface TodoItem {
    id: number,
    text: string,
    isCompleted: boolean
}

const initialState: [TodoItem] | [] = [];

const todoSlice  = createSlice({
    name: "todo",
    initialState: initialState,
    reducers: {
        add: (state, action: PayloadAction<TodoItem>) => {

        }
    }
});