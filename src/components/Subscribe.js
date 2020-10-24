import React from 'react';
import './Subscribe.css';
import { Container, Row, Button, Form } from 'react-bootstrap';


function Subscribe() {
    return (
        <>
            <Container className="search-div">
                <Form className="search-form">
                    <Row className="search-row">
                        <Form.Control type="text" placeholder="    Enter your email" className="searchbar" />
                        <Button variant="primary" type="submit" className="search-btn">
                            Search
                         </Button>
                    </Row>
                </Form>
            </Container>
        </>
    )
}

export default Subscribe;