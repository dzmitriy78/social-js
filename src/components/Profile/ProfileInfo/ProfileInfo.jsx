import React, {useRef} from "react";
import classes from "./ProfileInfo.module.css"
import ProfileStatus from "./ProfileStatus";
import UserPhoto from "../../../assets/images/user.png";
import ProfileDataEditingForm from "../../Form/ProfileDataEditingForm";
import {setEditMode, setError} from "../../../redux/profile-reducer";
import {useDispatch} from "react-redux";
import {ProfileData} from "./ProfileData";

export const ProfileInfo = ({
                                profile,
                                status,
                                updateStatus,
                                isOwner,
                                savePhoto,
                                saveProfile,
                                error,
                                editMode,
                                isAuth
                            }) => {

    const dispatch = useDispatch()
    const pickFile = useRef(null)

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

    function filePicker() {
        pickFile.current.click()
    }

    return (
        <div className={classes.profileInfo}>
            {!profile && <div>
                <img
                    src="https://cdn-prod.medicalnewstoday.com/content/images/articles/325/325466/man-walking-dog.jpg"
                    alt={"rootImg"}/>
            </div>}

            <span className={classes.description}>
                <img
                    src={profile.photos.large || profile.photos.small || UserPhoto}
                    alt={"photo"}
                    className={classes.userPhoto}/>
                {isAuth && isOwner && <div>
                    <button onClick={filePicker}>Change photo</button>
                    <input type={"file"}
                           className={classes.hidden}
                           onChange={onPhotoSelected}
                           ref={pickFile}
                           accept="image/*"/>
                </div>}
            </span>
            <ProfileStatus status={status}
                           updateStatus={updateStatus}
                           isOwner={isOwner}
                           isAuth={isAuth}/>
            {isAuth && isOwner && editMode && <button onClick={disableEditMode}>Cancel Editing</button>}
            {isAuth && isOwner && editMode
                ? <ProfileDataEditingForm profile={profile}
                                          saveProfile={saveProfile}
                                          error={error}/>
                : <ProfileData profile={profile}
                               goToEditMode={enableEditMode}
                               isOwner={isOwner}
                               isAuth={isAuth}/>}
        </div>
    )
}

export const Contact = ({title, value}) => {
    return <div>
        <b>{title}</b>: {value}
    </div>
}