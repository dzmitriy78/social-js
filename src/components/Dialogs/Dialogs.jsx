import React from 'react';
import classes from "./Dialogs.module.css"
import {Message} from "./Messages/Messages";
import {Dialog} from "./Dialog/Dialog";
import PostForm from "../Form/PostForm";

export function Dialogs({messagePage, addDialog}) {

    let dialogsElement = messagePage.dialogsData
        .map((d, i) => <Dialog key={i} avatar={d.avatar} name={d.name} id={d.id}/>);

    let messageElement = messagePage.messageData
        .map((m, i) => <Message key={i} id={m.id} message={m.message}/>);

    let onAddDialog = (values) => {
        addDialog(values.text)
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElement}
            </div>
            <div className={classes.messages}>
                {messageElement}
                <PostForm callback={onAddDialog}/>
            </div>
        </div>
    )
}