import React, {useEffect, useState} from 'react';

const ChatForm = (props) => {

    const [message, setMessage] = useState("")
    const [statusChannel, setStatusChannel] = useState("pending")

    useEffect(() => {
        let openHandler = () => {
            setStatusChannel("open")
        }
        props.ws?.addEventListener("open", openHandler)
        return () => {
            props.ws?.removeEventListener("open", openHandler)
        }
    }, [props.ws])

    const sendMessage = () => {
        if (!message) {
            return
        }
        props.ws?.send(message)
        setMessage("")
    }


    return (
        <div>
            <textarea value={message}
                      onChange={(e) => setMessage(e.currentTarget.value)}/>
            <div>
                <button onClick={sendMessage} disabled={props.ws === null || statusChannel !== "open"}>
                    Send
                </button>
            </div>
        </div>
    )
}

export default ChatForm