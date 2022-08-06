import classes from "./ProfileInfo.module.css";
import React from "react";
import {Contact} from "./ProfileInfo";

export const ProfileData = ({profile, isOwner, goToEditMode, isAuth}) => {
    return (
        <div>
            {isAuth && isOwner && <button onClick={goToEditMode}>Edit Profile</button>}
            <div className={classes.description}>
                <h3>{profile.fullName}</h3>
            </div>
            <div className={classes.description}>
                <b>Looking for a job:</b> {profile.lookingForAJob ? "Yes" : "No"}
            </div>
            <div className={classes.description}>
                <b>My professional skills:</b> {profile.lookingForAJobDescription}
            </div>
            <div className={classes.description}>
                <b>AboutMe:</b> {profile.aboutMe}
            </div>
            <div className={classes.description}>
                <b>Contacts</b>: {Object.keys(profile.contacts)
                .map(key => {
                    return <Contact key={key} title={key} value={profile.contacts[key]}/>
                })}
            </div>
        </div>
    )
}