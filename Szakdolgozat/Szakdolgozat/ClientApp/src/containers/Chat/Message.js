import React from 'react';
import {Col, Container, Row} from "react-bootstrap";

const Message = (props) => (
    <div style={{ background: "#eee", borderRadius: '50px', padding: '0 10px' }}>
        <p>
            <Container fluid>
                <Row>
                    <Col sm={2}><strong>{props.user}</strong>:</Col>
                    <Col>{props.message}</Col>
                    <Col sm={2}>{props.time}</Col>
                </Row>
            </Container>
        </p>
    </div>
);

export default Message;