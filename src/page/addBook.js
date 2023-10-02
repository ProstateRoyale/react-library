import {useDispatch} from "react-redux";
import {addBook} from "../store/library/bookSlice";
import {useRef} from "react";
import {Button} from "react-bootstrap";
import buttons from "../style/buttons.module.css"


function AddBook() {
    let dispatch = useDispatch()


    let Name = useRef()
    let Author = useRef()
    let Published = useRef()
    let Count = useRef()

    function handleBook(e) {
        e.preventDefault()
        let name = Name.current.value
        let author = Author.current.value
        let published = Published.current.value
        let count = Count.current.value
        dispatch(addBook({name, author, published, count}))
        Name.current.value = ''
        Author.current.value = ""
        Published.current.value = ""
        Count.current.value = ""
    }
    return(
        <main>
            <section>
                <h2 style={{ marginTop: "0.5em"}}>Add a new book</h2>
                <form onSubmit={handleBook}>
                    <label>
                        Name of book: <input type="text" ref={Name} className="form-control"/>
                        Author: <input type="text" ref={Author} className="form-control"/>
                        When published: <input type="number" ref={Published} className="form-control"/>
                        Count: <input type="number" ref={Count} className="form-control"/>
                    </label>
                    <Button size="md" type={"submit"} variant="outline-success" className={buttons.addBook}>
                        Add
                    </Button>
                </form>
            </section>
        </main>
    )
}

export default AddBook