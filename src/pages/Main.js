import React, {useContext, useEffect} from 'react';
import {Container, Form} from "react-bootstrap";
/*import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import TypeBar from "../components/TypeBar";
import BrandBar from "../components/BrandBar";
import DeviceList from "../components/DeviceList";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {fetchBrands, fetchDevices, fetchTypes} from "../http/deviceAPI";
import Pages from "../components/Pages";*/

const Main = () => {

    return (
       <Container
           className="d-flex justify-content-center align-items-center"
            style={{height: window.innerHeight - 54}}
            >

                <Form className="d-flex flex-column">
                <h2>ДОБРО ПОЖАЛОВАТЬ</h2>
                </Form>
           
       </Container> 
    );
};

export default Main;

/* чтобы карточки на главной выводились
<Container>
           <Row>
           <Col>
           <CardList />
           </Col>
           </Row>
       </Container> 
*/