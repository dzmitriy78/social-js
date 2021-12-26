import React from "react";
import {addPostActionCreator, updatePostActionCreator} from "../../../redux/profile-reducer";
import {MyPosts} from "./MyPosts";

export const MyPostsContainer = (props) => {

    let state = props.store.getState();


    let addPost = () => {
        props.store.dispatch(addPostActionCreator());
    }

    let onPostChange = (text) => {
        props.store.dispatch(updatePostActionCreator(text));
    }

    return (
        <MyPosts updatePostActionCreator={onPostChange}
                 addPost={addPost}
                 postData={state.profilePage.postData}
                 newPostText={state.profilePage.newPostText}/>
    )
}