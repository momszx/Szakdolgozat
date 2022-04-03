import React, {useEffect, useState} from 'react';
import arrow from '../../IMG/up-arrow-svgrepo-com.svg'
import {Col, Container, Image, Row, Table} from "react-bootstrap";
import {connect} from "react-redux";
import * as actions from "../../store/actions";

const Vote = (props) => {
    const [Number, setNumber] = useState(props.number);
    const [UserId] = useState(props.userId);
    const [ConId] = useState(props.conId);
    const [Type] = useState(props.type);
    const [Value, setValue] = useState(props.value);
    const [Uid] = useState(props.uid);
    const [Id] = useState(props.id);
    const [changed, setChanged] = useState(false)

    const click = (event) => {
        if (event == "up") {
            if (Value == 1) {
                setValue(0)
                setNumber(Number - 1)
            } else if (Value == -1) {
                setValue(1)
                setNumber(Number + 2)
            } else {
                setValue(1)
                setNumber(Number + 1)
            }
        } else if (event == "down") {
            if (Value == -1) {
                setValue(0)
                setNumber(Number + 1)
            } else if (Value == 1) {
                setValue(-1)
                setNumber(Number - 2)
            } else {
                setValue(-1)
                setNumber(Number - 1)
            }
        }
        setChanged(true)

    }
    useEffect(() => {
        if (changed) {
            let myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");
            let raw = JSON.stringify({
                userId: UserId,
                conId: ConId,
                type: Type,
                value: Value,
                uid: Uid,
                id: Id
            })
            let requestOptions = {
                method: 'PUT',
                headers: myHeaders,
                body: raw,
                redirect: 'follow'
            };
            fetch('/Vote/', requestOptions).then(response => response.json()).then(data => {
            })
        }
    }, [Value])
    const toDatabase = () => {
        let myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        let raw = JSON.stringify({
            userId: UserId,
            conId: ConId,
            type: Type,
            value: Value,
            uid: Uid,
            id: Id
        })
        let requestOptions = {
            method: 'PUT',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };
        fetch('/Vote/', requestOptions).then(response => response.json()).then(data => {
        })
    }

    const valueRender = () => {
        if (Value == 1) {
            return (
                <p style={{color: "#038505"}}>
                    {Number}
                </p>
            )
        } else if (Value == -1) {
            return (
                <p style={{color: "#850303"}}>
                    {Number}
                </p>
            )
        } else {
            return (
                <p>
                    {Number}
                </p>
            )
        }
    }

    const style = {
        "-webkit-transform": "rotate(180deg)",
        "-moz-transform": "rotate(180deg)",
        "-ms-transform": "rotate(180deg)",
        "-o-transform": "rotate(180deg)",
        "transform": "rotate(180deg)",
        width: "20px"
    }

    return (
        <>
            <Container>
                <Row>
                    <Col>
                        <Image src={arrow} style={{width: "20px"}} onClick={() => click("up")}/>
                    </Col>
                    <Col>{valueRender()}</Col>
                    <Col>
                        <Image style={style} onClick={() => click("down")} src={arrow}/>
                    </Col>
                </Row>
            </Container>
        </>
    )

}


export default Vote;