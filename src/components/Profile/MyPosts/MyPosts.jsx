import React from "react";
import classes from "./MyPosts.module.css";
import {Post} from "./Post/Post";
import PostForm from "../../Form/PostForm";

export const MyPosts = (props) => {
    let addMyPost = (values) => {
        props.addPost(values.text)
    }
    let postElement = props.postData
        .map((p, i) =>
            <Post key={i} id={p.id}
                  message={p.message}
                  likes={p.likeCount}/>)
    return (
        <div className={classes.postsBlock}>
            <h3>My posts</h3>
            <PostForm callback={addMyPost}
            />
            <div className={classes.posts}>
                {postElement}
            </div>
        </div>
    )
}