import React from "react";

import {addDialogActionCreator, onDialogChangeActionCreator} from "../../redux/message-reducer";
import {Dialogs} from "./Dialogs";

export function DialogsContainer(props) {

    let state = props.store.getState().messagePage;

    let addDialog = () => {
        props.store.dispatch(addDialogActionCreator());
    }

    let onDialogChange = (dialogText) => {
        props.store.dispatch(onDialogChangeActionCreator(dialogText));
    }

    return (
        <Dialogs onDialogChange={onDialogChange}
                 addDialog={addDialog}
                 messagePage={state}/>
    )
}