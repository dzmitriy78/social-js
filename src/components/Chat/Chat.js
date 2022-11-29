import React from 'react';
import ChatMessages from "./ChatMessages";
import ChatForm from "./ChatForm";

export const ws = new WebSocket("wss://social-network.samuraijs.com/handlers/ChatHandler.ashx")

const Chat = () => {
    return (
        <div>
            <ChatMessages/>
            <ChatForm/>
        </div>
    )
}

export default Chat