import React from "react";
import classes from "./ProfileInfo.module.css"
import ProfileStatus from "./ProfileStatus";
import UserPhoto from "../../../assets/images/user.png";

export const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto}) => {

    const onPhotoSelected = (e) => {
        savePhoto(e.target.files[0])
    }

    return (
        <div className={classes.profileInfo}>
            {<div>
                <img
                    src="https://cdn-prod.medicalnewstoday.com/content/images/articles/325/325466/man-walking-dog.jpg"
                    alt={"profileImg"}/>
            </div>}

            <span className={classes.description}>
                <img
                    src={profile.photos.large || profile.photos.small || UserPhoto}
                    alt={"no photo"}
                    className={classes.userPhoto}/>
                {isOwner && <span>Сменить фото<input type={"file"}
                                                     onChange={onPhotoSelected}/></span>}
            </span>
            <ProfileStatus status={status}
                           updateStatus={updateStatus}/>
            <div className={classes.description}>
                <h3>  {profile.fullName}</h3>
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