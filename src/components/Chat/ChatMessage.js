import React from 'react';

const ChatMessage = ({message}) => {

    return (
        <div>
            <img src={message.photo} style={{width:40}} alt={"chatAvatar"}/> <b>{message.userName}</b>
            <br/>
            {message.message}
            <br/>
            <hr/>
        </div>
    )
}

export default ChatMessage