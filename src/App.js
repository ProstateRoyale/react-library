import './App.css';
import Layout from "./layout/layout";
import {Outlet} from "react-router-dom";
import {Row, Col} from "react-bootstrap";

function App() {
    return (
        <Row>
            <Col xs={12} md={12} lg={2} className="w-auto d-flex flex-wrap gap-2" style={{margin: "0 auto"}}>
                <Layout/>
            </Col>
            <Col xs={12} md={12} lg={10} className="d-flex flex-wrap gap-2" style={{marginTop: "3px", paddingLeft: "30px", margin: "0 auto"}}>
                <div>
                    <Outlet />
                </div>
            </Col>
        </Row>
    );
}

export default App;
