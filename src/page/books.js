import {useDispatch, useSelector} from "react-redux";
import {deleteBook, ownedAdd} from "../store/library/bookSlice";
import UpdateBook from "../Components/updateBook";
import {Button} from "react-bootstrap";
import buttons from "../style/buttons.module.css"
import {Row, Col} from "react-bootstrap";
import { useState } from "react";
import SearchBook from "../Components/searchBook";



function Books() {
    let books = useSelector(state => state.books.list)
    let dispatch = useDispatch()
    const [searchValue, setSearchValue] = useState("")

    function onSearchValue(e) {
        setSearchValue(e.target.value)
    }

    return(
        <div>
            <div>
                <SearchBook 
                    searchValue={searchValue} 
                    onSearchValue={onSearchValue}
                />
            </div>
            {books.filter(obj => {
                return obj.name.toLowerCase().includes(searchValue.toLowerCase())
            }).map((el, index) =>
                <div key={index} >
                    <Row style={{marginBottom: "1%", display: "flex", width: "100vw"}} >
                        <Col xs={12} md={5} lg={4} className="w-auto d-flex flex-wrap gap-3">
                            <div style={{ marginTop: "2em", width: "18em"}}>
                                <div>Name of book: <strong>{el.name}</strong></div>
                                <div>Author: <strong>{el.author}</strong></div>
                                <div>When published: <strong>{el.published}</strong></div>
                                <div>Count: <strong>{el.count}</strong></div>
                                <Button size="sm" variant="outline-danger" onClick={() => dispatch(deleteBook(el))} className={buttons.deleteBook}>
                                    Delete
                                </Button>
                                <Button size="sm" variant="outline-success" onClick={() => dispatch(ownedAdd(el))} className={buttons.ownBook}>
                                    Own
                                </Button>
                            </div>
                        </Col>
                        <Col xs={12} md={7} lg={8} className="w-auto d-flex flex-wrap gap-3">
                            <div style={{ marginTop: "2em"}}>
                                <UpdateBook data={el} />
                            </div>
                        </Col>
                    </Row>
                </div>
            )}
        </div>
    )
}


export default Books