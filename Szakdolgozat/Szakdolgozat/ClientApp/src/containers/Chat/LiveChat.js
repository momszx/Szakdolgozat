import React, {useState, useEffect, useRef} from 'react';
import {HubConnectionBuilder} from '@microsoft/signalr';
import ChatWindow from "./ChatWindow";
import ChatInput from "./ChatInput";
import {Col, Container, Row} from "react-bootstrap";
import Card from "react-bootstrap/Card";

const LiveChat = (props) => {
    const [connection, setConnection] = useState(null);
    const [myUsername]=useState(props.myUsername)
    const [uid]=useState(props.uid)
    const [id]=useState(props.id)
    const [chat, setChat] = useState([]);
    const latestChat = useRef(null);
    latestChat.current = chat;
    useEffect(() => {
        const newConnection = new HubConnectionBuilder()
            .withUrl('/chatHub')
            .withAutomaticReconnect()
            .build();
        setConnection(newConnection);
        setTimeout(() => { console.log(""); }, 2000);
        fetch('/Chat/').then(response => response.json()).then(data => {
            setChat(data)
        })
    }, []);
    useEffect(() => {
        if (connection) {
            connection.start()
                .then(result => {
                    connection.on('ReceiveMessage', message => {
                        const updatedChat = [...latestChat.current];
                        updatedChat.push(message);
                        setChat(updatedChat);
                    });
                })
                .catch(e => console.log('Connection failed: ', e));
        }
    }, [connection]);
    const sendMessage = async (user, message,userId) => {
        if (connection._connectionStarted) {
            try {
                await connection.send('SendMessage', user,message,userId);
            }
            catch(e) {
                console.log(e);
            }
        }
        else {
            alert('No connection to server yet.');
        }
    }
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
    function logged() {
        if(myUsername!=""){
            return(
                <Row>
                    <Col>
                        <ChatInput sendMessage={sendMessage} username={myUsername} userId={id} />
                    </Col>
                </Row>)
        }
    }
    return (
        <>
            <Card style={facultyListstyel} className="text-center">
                <Card.Text>
                    <Container fluid>
                        <Row style={{maxHeight:"500px",overflow: "auto"}}>
                            <Col>
                                <ChatWindow chat={chat} myUsername={myUsername}/>
                            </Col>
                        </Row>
                        {logged()}
                    </Container>
                </Card.Text>
            </Card>

        </>
    );
};

export default LiveChat;