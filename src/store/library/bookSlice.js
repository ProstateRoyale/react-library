import { createSlice } from '@reduxjs/toolkit'

const BookSlice = createSlice({
    name: 'books',
    initialState: {
        list: [
            {
                name: "Game of Thrones",
                author: "George Martin",
                published: 1996,
                id: 1,
                count: 2,
            },
            {
                name: "Harry Potter",
                author: "J.K Rowling",
                published: 1997,
                id: 2,
                count: 8,
            },
            {
                name: "Blood sweat and pixels",
                author: "Jason Schreier",
                published: 2017,
                id: 3,
                count: 1,
            },
        ],
        owned: [
        ],
    },
    reducers: {
        addBook: (state, {payload}) => {
            const Id = JSON.parse(JSON.stringify([...state.list]))
            // const try = JSON.parse(JSON.stringify([...state.list]))
            // console.log(try[try.length-1].id+1)
            if(payload.name.length && payload.author.length && payload.published.length && payload.count.length && payload.count >= 1) {
                state.list.push({
                    name: payload.name,
                    author: payload.author,
                    published: payload.published,
                    id: Id[Id.length -1].id+1,
                    count: payload.count,
                })
            }
        },
        deleteBook: (state, {payload}) => {
            const res = state.list.find(item => item.id === payload.id)
            if(res.id === payload.id && res.count <= 1) {
                state.list = state.list.filter(el => el.id !== payload.id)
            }
            else if(res.id === payload.id && payload.count > 1) {
                res.count--
            }

        },
        updateBook: (state, {payload}) => {
            const res = state.list.find(item => item.id === payload.id)
            if (res.id === payload.id && payload.name.length) {
                res.name = payload.name
            }
            if (res.id === payload.id && payload.author.length) {
                res.author = payload.author
            }
            if (res.id === payload.id && payload.published.length) {
                res.published = payload.published
            }
            if (res.id === payload.id && payload.count.length && payload.count >= 1) {
                res.count = payload.count
            }
        },
        ownedAdd: (state, { payload }) => {
            const own = state.owned.find(item => item.id === payload.id)
            const list = state.list.find(item => item.id === payload.id)
            if(own === undefined && list.count > 0) {
                state.owned.push(
                    {
                        name: payload.name,
                        author: payload.author,
                        published: payload.published,
                        id: payload.id,
                        count: 1,
                    }
                )
                if(list.id === payload.id && list.count >= 1) {
                    list.count--
                }
            }
        },
        returnOwned: (state, {payload}) => {
            const list = state.list.find(item => item.id === payload.id)
            if(list === undefined) {
                state.list.push(
                    {
                        name: payload.name,
                        author: payload.author,
                        published: payload.published,
                        id: payload.id,
                        count: payload.count,
                    }
                )
            }
            else if(list.id === payload.id) {
                list.count++
            }
            state.owned = state.owned.filter(el => el.id !== payload.id)
        },
    }
})
export const {
    addBook,
    deleteBook,
    updateBook,
    ownedAdd,
    returnOwned
} = BookSlice.actions

export default BookSlice.reducer