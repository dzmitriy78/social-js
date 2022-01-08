import React from 'react';
import classes from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";
import {Message} from "./Messages/Messages";

const Dialog = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className={classes.dialog}>
            <NavLink className={(DialogsData) => DialogsData.isActive ? classes.active : ""}
                     to={path}>{props.avatar}{props.name}</NavLink>
        </div>
    )
}

export function Dialogs(props) {

    let state = props.messagePage;

    let dialogsElement = state.dialogsData
        .map(d => <Dialog key={d.id} avatar={d.avatar} name={d.name} id={d.id}/>);

    let messageElement = state.messageData
        .map(m => <Message key={m.id} id={m.id} message={m.message}/>);


    let onAddDialog = () => {
        props.addDialog();
    }

    let onDialogChange = (e) => {
        let dialogText = e.target.value;
        props.onDialogChange(dialogText);
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElement}
            </div>
            <div className={classes.messages}>
                {messageElement}

                <div>
                    <textarea onChange={onDialogChange}
                              value={state.newDialogText}/>
                </div>
                <div>
                    <button disabled={state.newDialogText === ""}
                            onClick={onAddDialog}>Add post
                    </button>
                </div>
            </div>
        </div>
    )
}