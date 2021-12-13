import React, {createRef} from "react";
import classes from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";
import {addDialogActionCreator, onDialogChangeActionCreator} from "../../redux/message-reducer";


const Dialog = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className={classes.dialog}>
            <NavLink className={(DialogsData) => DialogsData.isActive ? classes.active : ""}
                     to={path}>{props.avatar}{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
        <div className={classes.message}>{props.message}</div>
    )
}

export function Dialogs(props) {

    let dialogsElement = props.messagePage.dialogsData
        .map(d => <Dialog avatar={d.avatar} name={d.name} id={d.id}/>);

    let messageElement = props.messagePage.messageData
        .map(m => <Message id={m.id} message={m.message}/>);


    let addDialog = () => {
        props.dispatch(addDialogActionCreator());
    }

    let onDialogChange = (e) => {
        let dialogText = e.target.value;
        props.dispatch(onDialogChangeActionCreator(dialogText));
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
                              value={props.messagePage.newDialogText}/>
                </div>
                <div>
                    <button disabled={props.messagePage.newDialogText === ""}
                            onClick={addDialog}>Add post
                    </button>
                </div>
            </div>
        </div>
    )
}