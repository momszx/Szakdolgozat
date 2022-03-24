import React from 'react';

import Message from './Message';

const ChatWindow = (props) => {
    const chat = props.chat
        .map(m => <Message
            key={Date.now() * Math.random()}
            user={props.chat.user}
            message={props.chat.message}/>);

    return(
        <div>
            {chat}
        </div>
    )
};

export default ChatWindow;