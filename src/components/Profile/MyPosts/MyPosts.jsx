import React from "react";
import classes from "./MyPosts.module.css";
import {Post} from "./Post/Post";

export const MyPosts = (props) => {

    let postElement = props.postData
        .map(p => <Post id={p.id} message={p.message} likes={p.likeCount}/>)

    let onAddPost = () => {
        props.addPost();
    }

    let onPostChange = (e) => {
        let text = e.target.value;
        props.onPostChange(text);
    }

    return (
        <div className={classes.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} value={props.newPostText}/>
                </div>
                <div>
                    <button disabled={props.newPostText === ""}
                            onClick={onAddPost}>Add post
                    </button>
                </div>
                <div className={classes.posts}>
                    {postElement}
                </div>
            </div>
        </div>
    )
}