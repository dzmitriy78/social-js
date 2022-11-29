import React, {useEffect, useState} from 'react';
import ChatMessage from "./ChatMessage";
import {ws} from "./Chat";

const ChatMessages = () => {

    const [messages, setMessages] = useState([])

    useEffect(() => {
        ws.addEventListener("message", (e) => {
            const newMessage = JSON.parse(e.data)
            setMessages((prevState) => [...prevState, ...newMessage])
        })
    }, [])

    return (
        <div style={{height: 400, overflowY: "auto"}}>
            {messages.map((m, i) => <ChatMessage key={i} message={m}/>)}
        </div>
    )
}

export default ChatMessages