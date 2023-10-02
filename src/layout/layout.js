import {Link} from "react-router-dom";

function Layout() {
    return(
        <div>
            <header>
                <Link className="m-3 d-block btn btn-primary" to="add_book/">Добавить Книгу</Link>
                <Link className="m-3 d-block btn btn-primary" to="library/">Библиотека</Link>
                <Link className="m-3 d-block btn btn-primary" to="owned/">Взято</Link>
                <Link className="m-3 d-block btn btn-primary" to="friends/">Друзья</Link>
            </header>
        </div>
    )
}

export default Layout