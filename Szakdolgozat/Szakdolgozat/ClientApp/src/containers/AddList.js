import React, {useEffect, useState} from 'react';
import {Button, FormControl, InputGroup} from "react-bootstrap";

const AddList = (props) => {
    const [text, setText] = useState('');
    const onSubmit = (e) => {
        if (text != '') {
            props.sendMessage(text, props.type, props.id);
        } else {
            alert('Please insert an user and a message.');
        }
    }
    const onMessageUpdate = (e) => {
        setText(e.target.value);
    }
    return (
        <>
            <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">{"Új " + props.title}</InputGroup.Text>
                <FormControl
                    placeholder={"Új " + props.title}
                    onChange={onMessageUpdate}
                />
            </InputGroup>
            <InputGroup.Text id="basic-addon2">
                <Button size="sm" onClick={onSubmit}>
                    Küld
                </Button>
            </InputGroup.Text>
        </>
    )

}

export default AddList