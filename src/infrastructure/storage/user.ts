import { createSlice, } from "@reduxjs/toolkit";
import { User } from "../../application/domain/models/user";
import { addUser } from "../../application/domain/usecases/user";

const initialState: User[] = [];

const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        addUser

    }
})

export const userActions = userSlice.actions;
export const userReducer = userSlice.reducer;