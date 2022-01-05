import React from "react";
import {addDialogActionCreator, onDialogChangeActionCreator} from "../../redux/message-reducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        messagePage: state.messagePage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addDialog: () => {
            dispatch(addDialogActionCreator())
        },
        onDialogChange: (dialogText) => {
            dispatch(onDialogChangeActionCreator(dialogText))
        }
    }
}

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);