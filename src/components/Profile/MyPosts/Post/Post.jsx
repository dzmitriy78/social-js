import React from "react";
import classes from "./Post.module.css";

export const Post = (props) => {

    return (
        <div className={classes.item}>
            <img src={"https://shapka-youtube.ru/wp-content/uploads/2021/02/avatarka-dlya-skaypa-dlya-parney.jpg"} alt={}/>
            {props.message}
            <div>
                <span>Likes:</span>
                {props.likes}
            </div>
        </div>
    )
}