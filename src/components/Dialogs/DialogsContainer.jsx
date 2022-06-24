import {addDialog} from "../../redux/message-reducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

let mapStateToProps = (state) => {
    return {
        messagePage: state.messagePage
    }
}

const DialogsContainer = compose(
    connect(mapStateToProps, {addDialog} ),
    withAuthRedirect)
(Dialogs)
export default DialogsContainer