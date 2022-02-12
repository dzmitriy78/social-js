import React from "react";
import classes from "./Header.module.css";
import {NavLink} from "react-router-dom";

export const Header = (props) => {
    return (
        <header className={classes.header}>
            <img src="https://previews.123rf.com/images/wavy28/wavy281605/wavy28160500900/59350543-hf-logo.jpg"
                 alt={""}/>
            <div className={classes.loginBlock}>
                {props.isAuth? props.login
                    : <NavLink to={"/login"}>Login</NavLink>
                }
            </div>
        </header>
    )
}