import React from "react";
import classes from "./ProfileInfo.module.css"
import ProfileStatus from "./ProfileStatus";

export const ProfileInfo = ({profile, status, updateStatus}) => {

    return (
        <div className={classes.profileInfo}>
            {<div>
                <img
                    src="https://cdn-prod.medicalnewstoday.com/content/images/articles/325/325466/man-walking-dog.jpg"
                    alt={"profileImg"}/>
            </div>}

            <span className={classes.description}>
                <img
                    src={profile.photos.small} alt={"no photo"}/>
            </span>
            <ProfileStatus status={status}
                           updateStatus={updateStatus}/>
            <div className={classes.description}>
                <h3>  {"Name:" + " " + profile.fullName}</h3>
            </div>
            <div className={classes.description}>
                {"contacts:" + " " + profile.contacts.vk}
            </div>
            <div className={classes.description}>
                {"aboutMe:" + " " + profile.aboutMe}
            </div>
        </div>
    )
}