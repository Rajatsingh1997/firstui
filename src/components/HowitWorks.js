import React from 'react';
import './HowitWorks.css';
import { Container, Row, Col} from 'react-bootstrap';
import calendar from '../Assets/calendar.png';
import box from '../Assets/box.png';
import bill from '../Assets/bill.png';


function HowitWorks() {
    return (
        <>
            <Container lg={12} md={12} sm={12} xs={12} className="howitworks">
                <Row className="txt-row"><p className="hiw-text">How it works</p></Row>
                <Row className="icon-row">
                    <Col><img className="bill" src={bill} /></Col>
                    <Col><img className="box" src={box} /></Col>
                    <Col><img className="calendar" src={calendar} /></Col>
                </Row>
            </Container>
        </>
    )
}

export default HowitWorks;
