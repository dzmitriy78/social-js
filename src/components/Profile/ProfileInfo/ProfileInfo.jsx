import React from "react";
import classes from "./ProfileInfo.module.css"
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";

export const ProfileInfo = (props) => {

    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div className={classes.profileInfo}>
            {  <div>
                <img
                    src="https://cdn-prod.medicalnewstoday.com/content/images/articles/325/325466/man-walking-dog.jpg" alt={"profileImg"}/>
            </div>}

            <span className={classes.description}>
                <img
                    src={props.profile.photos.small} alt={"no photo"}/>
            </span>
            <ProfileStatus status={props.status}
                           updateStatus = {props.updateStatus}/>
            <div className={classes.description}>
                <h3>  {"Name:" + " " + props.profile.fullName}</h3>
            </div>
            <div className={classes.description}>
                {"contacts:" + " " + props.profile.contacts.vk}
            </div>
            <div className={classes.description}>
                {"aboutMe:" + " " + props.profile.aboutMe}
            </div>
        </div>
    )
}