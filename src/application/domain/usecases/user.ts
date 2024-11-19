import { PayloadAction } from "@reduxjs/toolkit";
import { User } from "../models/user";

export const addUser = (state: User[], action:  PayloadAction<User>) => {
    return [...state, {id: Math.floor(Math.random() * 1000), ...action.payload}];
}