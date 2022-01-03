import React from "react";
import {addPostActionCreator, updatePostActionCreator} from "../../../redux/profile-reducer";
import {MyPosts} from "./MyPosts";
import StoreContext from "../../../StoreContext";

export const MyPostsContainer = () => {

    return (
        <StoreContext.Consumer>
            {
            (store) => {
                let state = store.getState();

                let addPost = () => {
                    store.dispatch(addPostActionCreator());
                }
                let onPostChange = (text) => {
                    store.dispatch(updatePostActionCreator(text));
                }
                return <MyPosts updatePostActionCreator={onPostChange}
                         addPost={addPost}
                         postData={state.profilePage.postData}
                         newPostText={state.profilePage.newPostText}/>}
        }
        </StoreContext.Consumer>
    )
}