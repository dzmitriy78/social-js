import React from "react";
import classes from "./Header.module.css";
import {NavLink} from "react-router-dom";

export const Header = ({isAuth, login, logout}) => {
    return (
        <header className={classes.header}>
            <img src="https://previews.123rf.com/images/wavy28/wavy281605/wavy28160500900/59350543-hf-logo.jpg"
                 alt={"logo"}/>
            <div className={classes.loginBlock}>
                {isAuth
                    ? <div>{login}
                        <button onClick={logout}>Log out</button>
                    </div>
                    : <NavLink to={"/login"}>Login</NavLink>
                }
            </div>
        </header>
    )
}