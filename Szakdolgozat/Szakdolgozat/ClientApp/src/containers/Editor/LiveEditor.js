import React, {useState, useEffect, useRef} from 'react';
import {HubConnectionBuilder} from "@microsoft/signalr";
import RichTextEditor from "react-rte";

const LiveEditor = (props) => {
    const [connection, setConnection] = useState(null);
    const [uid] = props.uid;
    const [text, setText] = useState(RichTextEditor.createValueFromString(props.text, 'html'))
    const [_connectionStarted, set_ConnectionStarted] = useState(false)
    const latestText = useRef(null);
    const onSubmit = () => {
        if (uid && uid !== '' && uid !== null && text && text !== null) {
            sendMessage(text.toString('html'));
        } else {
            console.log('Please insert an user and a message.' + uid + " " + text);
        }
    }
    const onMessageUpdate = (e) => {
        setText(e);
        onSubmit()
    }
    latestText.current = text;
    useEffect(() => {
        const newConnection = new HubConnectionBuilder()
            .withUrl('/chatHub')
            .withAutomaticReconnect()
            .build();
        setConnection(newConnection);
    }, []);
    useEffect(() => {
        try {

            if (connection._connectionStarted) {
                try {
                    connection.send('JoinGroup', props.group);
                } catch (e) {
                    console.log(e);
                }
            } else {
                console.log('No connection to server yet.');
            }
        } catch (e) {

        }
    }, [_connectionStarted]);
    useEffect(() => {
        if (connection) {
            connection.start()
                .then(result => {
                    set_ConnectionStarted(true)
                    connection.on('ReceiveGroupMessage', text => {
                        const updatedText = [];
                        updatedText.push(RichTextEditor.createValueFromString(text, 'html'));
                        setText(RichTextEditor.createValueFromString(text, 'html'));
                    });
                })
                .catch(e => console.log('Connection failed: ', e));
        }
    }, [connection]);
    const sendMessage = async (text) => {
        if (connection._connectionStarted) {
            try {
                await connection.send('SendMessageToGroup', props.group, text);
            } catch (e) {
                console.log(e);
            }
        } else {
            console.log('No connection to server yet.');
        }
    }

    return (<>
        <RichTextEditor
            value={text}
            onChange={onMessageUpdate}
            placeholder="Szólj hozzá"
        />
    </>)

}

export default LiveEditor