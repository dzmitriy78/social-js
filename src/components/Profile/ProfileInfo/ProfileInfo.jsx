import React from "react";
import classes from "./ProfileInfo.module.css"
import ProfileStatus from "./ProfileStatus";
import UserPhoto from "../../../assets/images/user.png";
import ProfileDataEditingForm from "../../Form/ProfileDataEditingForm";
import {setEditMode, setError} from "../../../redux/profile-reducer";
import {useDispatch} from "react-redux";

export const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto, saveProfile, error, editMode}) => {

    const dispatch = useDispatch()

    const onPhotoSelected = (e) => {
        savePhoto(e.target.files[0])
    }

    const enableEditMode = () => {
        dispatch(setEditMode(true))
    }
    const disableEditMode = () => {
        dispatch(setEditMode(false))
        dispatch(setError(""))
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
                    alt={"photo"}
                    className={classes.userPhoto}/>
                {isOwner && <span>Сменить фото<input type={"file"}
                                                     onChange={onPhotoSelected}/></span>}
            </span>
            <ProfileStatus status={status}
                           updateStatus={updateStatus}/>
            {editMode && <button onClick={disableEditMode}>Cancel Editing</button>}
            {editMode
                ? <ProfileDataEditingForm profile={profile}
                                          saveProfile={saveProfile}
                                          error={error}/>
                : <ProfileData profile={profile}
                               goToEditMode={enableEditMode}
                               isOwner={isOwner}/>}
        </div>
    )
}

const ProfileData = ({profile, isOwner, goToEditMode}) => {
    return (
        <div>
            {isOwner && <button onClick={goToEditMode}>Edit Profile</button>}
            <div className={classes.description}>
                <h3>  {profile.fullName}</h3>
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

export const Contact = ({title, value}) => {
    return <div>
        <b>{title}</b>: {value}
    </div>
}