import React, {useState, useEffect, useRef} from 'react';
import Card from "react-bootstrap/Card";
import {Button, Col, Container, Form, Row} from "react-bootstrap";

const PermissionCard = (props) => {
    const [user] = useState(props.user)
    const [newpermission, setPermission] = useState(0)
    const facultyListstyel = {
        display: "block",
        marginTop: "10px",
        marginLeft: "auto",
        marginRight: "auto",
        padding: "20px",
        width: "80%",
        align: "central",
        boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
    }
    const save = () => {
        let myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        let raw = JSON.stringify({
            id: user.id,
            permission: newpermission,
        })
        let requestOptions = {
            method: 'PUT',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };
        fetch('/Perm/', requestOptions).then(response => response.json()).then(data => {
        })
    }
    return (
        <>
            <Card style={facultyListstyel} className="text-center">
                <Card.Text>
                    <Container fluid>
                        <Row>
                            <Col>
                                {user.id}
                            </Col>
                            <Col>
                                {user.username}
                            </Col>
                            <Col>
                                <Form.Control as="select" defaultValue={user.permission} onChange={(event, editor) => {
                                    setPermission(event.target.value)
                                }}>
                                    <option value={0}>Felhasználó</option>
                                    <option value={1}>Moderátor</option>
                                    <option value={2}>Admin</option>
                                </Form.Control>
                            </Col>
                            <Col>
                                <Button onClick={()=>save()}>
                                    Mentés
                                </Button>
                            </Col>
                        </Row>
                    </Container>
                </Card.Text>
            </Card>
        </>
    )

}

export default PermissionCard