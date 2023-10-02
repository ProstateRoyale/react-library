import {useDispatch, useSelector} from "react-redux";
import {returnOwned} from "../store/library/bookSlice";
import {Button} from "react-bootstrap";


function Owned() {
    let owned = useSelector(state => state.books.owned)
    let dispatch = useDispatch()
    return(
        <main>
            <h2 style={{ marginTop: "0.5em"}}>Owned books</h2>
            {owned.map((el, index) =>
                <div key={index} style={{marginTop: "10px"}}>
                    <div>Name of book: <strong>{el.name}</strong></div>
                    <div>Author: <strong>{el.author}</strong></div>
                    <div>When published: <strong>{el.published}</strong></div>
                    <Button size="md" variant="outline-success" onClick={() => dispatch(returnOwned(el))}>Return</Button>
                </div>
            )}
        </main>
    )
}

export default Owned