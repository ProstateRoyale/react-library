import {configureStore} from "@reduxjs/toolkit";
import BookSlice from "./library/bookSlice";
import UsersSlice from "./users/usersSlice";


export const store = configureStore({
    reducer: {
        books: BookSlice,
        users: UsersSlice,
    }
})