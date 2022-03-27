import React, {useEffect, useState} from 'react';
import {Button, FormControl, InputGroup} from "react-bootstrap";

const ChatInput = (props) => {
    const [user] = useState(props.username);
    const [userId] = useState(props.userId);
    const [message, setMessage] = useState('');
    const onSubmit = (e) => {
        const isUserProvided = user && user !== '';
        const isMessageProvided = message && message !== '';
        if (isUserProvided && isMessageProvided) {
            props.sendMessage(user, message,userId);
        }
        else {
            alert('Please insert an user and a message.');
        }
    }
    const onMessageUpdate = (e) => {
        setMessage(e.target.value);
    }
    return (
        <>
            <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">{user}</InputGroup.Text>
                <FormControl
                    placeholder="Üzenj"
                    onChange={onMessageUpdate}
                />
                <InputGroup.Text id="basic-addon2">
                    <Button size="sm" onClick={onSubmit}>
                        Küld
                    </Button>
                </InputGroup.Text>
            </InputGroup>

        </>
    )
};

export default ChatInput;