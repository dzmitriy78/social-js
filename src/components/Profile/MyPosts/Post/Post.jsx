import React from "react";
import classes from "./Post.module.css";

export const Post = ({id, deletePost, message, likes}) => {

    return (
        <>
            <div className={classes.item}>
                <img src={"https://shapka-youtube.ru/wp-content/uploads/2021/02/avatarka-dlya-skaypa-dlya-parney.jpg"}
                     alt={11}/>
                {message}
                <button className={classes.btn} onClick={() => deletePost(id)}>x</button>
                <div>
                    <span>Likes:</span>
                    {likes}
                </div>
            </div>

        </>
    )
}