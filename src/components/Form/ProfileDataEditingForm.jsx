import React from "react";
import classes from "../Profile/ProfileInfo/ProfileInfo.module.css";
import {useFormik} from "formik";

const ProfileDataEditingForm = ({profile, saveProfile, disableEditMode}) => {

    const formik = useFormik({
        initialValues: {
            fullName: profile.fullName,
            lookingForAJob: profile.lookingForAJob,
            lookingForAJobDescription: profile.lookingForAJobDescription,
            AboutMe: profile.aboutMe
        },
        onSubmit: (values) => {
            alert(JSON.stringify(values))
            saveProfile(values)
            disableEditMode()
            //formik.resetForm()
        }
    })

    return (
        <form onSubmit={formik.handleSubmit}>
            <div className={classes.description}>
                <label htmlFor={'fullName'}><b>fullName: </b></label>
                <input type='text'
                       {...formik.getFieldProps("fullName")}
                />
            </div>
            <div className={classes.description}>
                <label htmlFor={'lookingForAJob'}> <b>Looking for a job: </b></label>
                <input type={'checkbox'} name={'lookingForAJob'}/>
            </div>
            {/* <div className={classes.description}>
                <b>Looking for a job:</b> {profile.lookingForAJob ? "Yes" : "No"}
            </div>*/}
            <div className={classes.description}>
                <label htmlFor={'lookingForAJobDescription'}> <b>My professional skills: </b></label>
                <input type='text'
                       {...formik.getFieldProps("lookingForAJobDescription")}
                />
            </div>
            <div className={classes.description}>
                <label htmlFor={'AboutMe'}><b>AboutMe: </b></label>
                <textarea {...formik.getFieldProps("AboutMe")}
                />
            </div>
            <button type={'submit'}>Отправить</button>
        </form>
    )
}
export default ProfileDataEditingForm