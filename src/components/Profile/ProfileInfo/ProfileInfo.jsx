import React from "react";
import classes from "./ProfileInfo.module.css"
import Preloader from "../../common/Preloader/Preloader";

export const ProfileInfo = (props) => {

    if(!props.profile) {
        return <Preloader/>
    }
    return (
        <div className={classes.profileInfo}>
            <div>
                <img
                    src="https://cdn-prod.medicalnewstoday.com/content/images/articles/325/325466/man-walking-dog.jpg" alt={"profileImg"}/>
            </div>
            <span className={classes.description}>
                <img
                    src={props.profile.photos.small} alt={"photo"}/>
            </span>
            <div className={classes.description}>
            <h4>  {"Name:" + " " + props.profile.fullName}</h4>
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