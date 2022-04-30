import React from 'react';
import classes from "./Dialogs.module.css"
import {Message} from "./Messages/Messages";
import {Dialog} from "./Dialog/Dialog";
import PostForm from "../Form/PostForm";

export function Dialogs(props) {

    let state = props.messagePage;

    let dialogsElement = state.dialogsData
        .map((d, i) => <Dialog key={i} avatar={d.avatar} name={d.name} id={d.id}/>);

    let messageElement = state.messageData
        .map((m, i) => <Message key={i} id={m.id} message={m.message}/>);

    let onAddDialog = (values) => {
        props.onDialogChange(values.text);
        props.addDialog();
    }

    /*    if (!props.isAuth) return <Navigate replace to = "/login"/>*/

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElement}
            </div>
            <div className={classes.messages}>
                {messageElement}
                <PostForm callback={onAddDialog}
                          text={state.newDialogText}/>
            </div>
        </div>
    )
}