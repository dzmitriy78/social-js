import React from "react";

import {addDialogActionCreator, onDialogChangeActionCreator} from "../../redux/message-reducer";
import {Dialogs} from "./Dialogs";
import StoreContext from "../../StoreContext";

export function DialogsContainer() {


    return <StoreContext.Consumer>
        {
        (store) => {
            let state = store.getState().messagePage;

            let addDialog = () => {
                store.dispatch(addDialogActionCreator());
            }

            let onDialogChange = (dialogText) => {
                store.dispatch(onDialogChangeActionCreator(dialogText));
            }

            return <Dialogs onDialogChange={onDialogChange}
                            addDialog={addDialog}
                            messagePage={state}/>
        }
    }
    </StoreContext.Consumer>
}