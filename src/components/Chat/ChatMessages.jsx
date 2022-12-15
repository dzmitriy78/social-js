import React, {useEffect, useState} from 'react';
import ChatMessage from "./ChatMessage";

const ChatMessages = (props) => {

    const [messages, setMessages] = useState([])
    useEffect(() => {
        let messageHandler = (e) => {
            let newMessage = JSON.parse(e.data)
            setMessages((prev) => [...prev, ...newMessage])
        }
        props.ws?.addEventListener("message", messageHandler)
        return () => {
            props.ws?.removeEventListener("message", messageHandler)
        }
    }, [props.ws])

    return (
        <div style={{height: 400, overflowY: "auto"}}>
            {messages.map((m, i) => <ChatMessage key={i} message={m}/>)}
        </div>
    )
}

export default ChatMessages