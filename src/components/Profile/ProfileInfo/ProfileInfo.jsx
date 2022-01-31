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
                    src="https://cdn-prod.medicalnewstoday.com/content/images/articles/325/325466/man-walking-dog.jpg" alt={""}/>
            </div>
            <div className={classes.description}> ava + description
                <img
                    src={props.profile.photos.large} alt={""}/>
            </div>
        </div>
    )
}