import {addPostActionCreator, updatePostActionCreator} from "../../../redux/profile-reducer";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        postData: state.profilePage.postData,
        newPostText: state.profilePage.newPostText
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        addPost: ()=> {
            dispatch(addPostActionCreator())
        },
        onPostChange: (text)=> {
            dispatch(updatePostActionCreator(text))
        }
    }
}

export const MyPostsContainer = connect (mapStateToProps, mapDispatchToProps) (MyPosts)