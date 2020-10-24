import React from 'react';
import './Row3.css';
import { Container, Row, Col } from 'react-bootstrap';
import pic2 from '../Assets/pic2.png';

function Row3() {
    return (
        <>
            <Container >
                    <Row className="Row3">
                        <Col lg={6} md={6} sm={12} xs={12}><img className="pic2" src={pic2} /></Col>
                        <Col lg={6} md={6} sm={12} xs={12}>
                            <Row><p className="large-text1">Loripsum</p></Row>
                            <Row><p className="small-text1">Loripsum</p></Row>
                        </Col>
                    </Row>
            </Container>
        </>
    )
}

export default Row3;