import {useRef} from "react";
import {updateBook} from "../store/library/bookSlice";
import { useDispatch } from "react-redux";
import {Button} from "react-bootstrap";
import buttons from "../style/buttons.module.css"
import inputs from "../style/inputs.module.css"


function UpdateBook({data}) {
    let dispatch = useDispatch()
    let Name = useRef()
    let Author = useRef()
    let Published = useRef()
    let Count = useRef()

    function changeBook(e) {
        e.preventDefault()
        let id = data.id
        let name = Name.current.value
        let author = Author.current.value
        let published = Published.current.value
        let count = Count.current.value
        dispatch(updateBook({id, name, author, published, count}))
        Name.current.value = ''
        Author.current.value = ""
        Published.current.value = ""
        Count.current.value = ""
    }
    return(
        <div>
            <input type="text" ref={Name} placeholder={data.name} className={inputs.updateBook} id="name" /> <br/>
            <input type="text" ref={Author} placeholder={data.author} className={inputs.updateBook} id="author" /> <br/>
            <input type="number" ref={Published} placeholder={data.published} className={inputs.updateBook} id="published" /><br/>
            <input type="number" ref={Count} placeholder={data.count} className={inputs.updateBook} id="count" />
            <Button onClick={changeBook} variant="outline-success" size="sm" className={buttons.changeButton}>Edit</Button>
        </div>
    )
}

export default UpdateBook