import React from "react";
import classes from "./../Dialogs.module.css"
import {NavLink} from "react-router-dom";


export const Dialog = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className={classes.dialog}>
            <NavLink className={(DialogsData) => DialogsData.isActive ? classes.active : ""}
                     to={path}>{props.name}</NavLink>
        </div>
    )
}