import React, {Component} from 'react';
import {connect} from 'react-redux';
import Card from "react-bootstrap/Card";
import {Link} from "react-router-dom";
import {Col, Container, Row, Table} from "react-bootstrap";
import Login from "./Login";
import Resistration from "./Registration";

class LoginView extends Component {
    render() {
        const style = {
            display: "block",
            marginTop: "10px",
            marginLeft: "auto",
            marginRight: "auto",
            padding: "20px",
            width: "80%",
            align: "central",
            boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
            minHeight: "700px"
        }
        return (
            <>
                <Card style={style} className="text-center">
                    <Card.Text>
                        <Container>
                            <Row>
                                <Col>
                                    <Login/>
                                </Col>
                                <Col>
                                    <Resistration/>
                                </Col>
                            </Row>
                        </Container>
                    </Card.Text>
                </Card>
            </>
        );
    }
}

function mapStateToProps(state) {
    return {};
}

export default connect(
    mapStateToProps,
)(LoginView);
