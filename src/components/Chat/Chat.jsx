import React, {useEffect, useState} from 'react';
import ChatMessages from "./ChatMessages";
import ChatForm from "./ChatForm";
import {compose} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

const Chat = () => {

    const [ws, setWs] = useState(null)

    useEffect(() => {
        let wsChannel
        const closeHandler = () => {
            console.log("close")
            setTimeout(createChannel, 1000)
        }

        function createChannel() {
            wsChannel?.removeEventListener("close", closeHandler)
            wsChannel?.close()

            wsChannel = new WebSocket("wss://social-network.samuraijs.com/handlers/ChatHandler.ashx")
            wsChannel.addEventListener("close", closeHandler)
            setWs(wsChannel)
        }

        createChannel()
        return () => {
            wsChannel.removeEventListener("close", closeHandler)
            wsChannel.close()
        }
    }, [])

    return (
        <div>
            <ChatMessages ws={ws}/>
            <ChatForm ws={ws}/>
        </div>
    )
}
const DialogsContainer = compose(withAuthRedirect)(Chat)
export default DialogsContainer