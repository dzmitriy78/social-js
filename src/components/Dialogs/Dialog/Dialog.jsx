import React from "react";
import classes from "./../Dialogs.module.css"
import {NavLink} from "react-router-dom";


export const Dialog = ({id, name, avatar}) => {
    let path = "/dialogs/" + id;
    return (
        <div className={classes.dialog}>
            <NavLink className={(DialogsData) => DialogsData.isActive ? classes.active : ""}
                     to={path}>{avatar}{name}</NavLink>
        </div>
    )
}