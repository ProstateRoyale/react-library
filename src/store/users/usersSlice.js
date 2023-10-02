import { createSlice } from '@reduxjs/toolkit'

const UsersSlice = createSlice({
    name: 'users',
    initialState: {
        users: [
        ],
    },
    reducers: {
        setAllUsers(state, action) {
            state.users = action.payload;
        },
    }
})
export const {
    setAllUsers
} = UsersSlice.actions

export default UsersSlice.reducer