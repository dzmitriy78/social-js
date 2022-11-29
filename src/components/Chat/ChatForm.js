import React, {useState} from 'react';
import {ws} from "./Chat";

const ChatForm = () => {


    const [message, setMessage] = useState("")


    const sendMessage = () => {
        if (message) {
            ws.send(message)
            setMessage("")
        }
    }

    return (
        <div>
            <textarea value={message}
                      onChange={(e) => setMessage(e.currentTarget.value)}/>
            <div>
                <button onClick={sendMessage}>
                    Send
                </button>
            </div>
        </div>
    )
}

export default ChatForm