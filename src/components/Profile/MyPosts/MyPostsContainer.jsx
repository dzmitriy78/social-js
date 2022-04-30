import {addPostActionCreator} from "../../../redux/profile-reducer";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        postData: state.profilePage.postData
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        addPost: (text) => {
            dispatch(addPostActionCreator(text))
        }
    }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)