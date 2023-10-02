import {createBrowserRouter} from "react-router-dom";
import App from "../App";
import Books from "../page/books";
import AddBook from "../page/addBook";
import Owned from "../page/owned";
import FriendList from "../page/friendList";

let router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                path: "add_book/",
                element: <AddBook/>,
            },
            {
                path: "library/",
                element: <Books/>,
            },
            {
                path: "owned/",
                element: <Owned/>,
            },
            {
                path: "friends/",
                element: <FriendList/>,
            },
        ],
    }
])

export {router}