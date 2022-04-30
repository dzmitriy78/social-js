import {addDialogActionCreator} from "../../redux/message-reducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

let mapStateToProps = (state) => {
    return {
        messagePage: state.messagePage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addDialog: (dialogText) => {
            dispatch(addDialogActionCreator(dialogText))
        }
    }
}

export const DialogsContainer = compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect)
(Dialogs)