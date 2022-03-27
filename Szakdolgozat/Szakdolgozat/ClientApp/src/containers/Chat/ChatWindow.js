import React from 'react';

import Message from './Message';

const ChatWindow = (props) => {
    let chat =
        (
            <>
            </>
        )
    if (props.chat!=[]) {
        chat = props.chat
            .map(m => <Message
                key={Date.now() * Math.random()}
                user={m.user}
                message={m.message}
                time={m.created}/>);
    }
    return (
        <div>
            {chat}
        </div>
    )
};

export default ChatWindow;