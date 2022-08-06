import React from "react";
import classes from "../Profile/ProfileInfo/ProfileInfo.module.css";
import {useFormik} from "formik";

const ProfileDataEditingForm = ({profile, saveProfile, error}) => {

    const formik = useFormik({
        initialValues: {
            fullName: profile.fullName,
            lookingForAJob: profile.lookingForAJob,
            lookingForAJobDescription: profile.lookingForAJobDescription,
            AboutMe: profile.aboutMe,
            contacts: profile.contacts || ""
        },
        onSubmit: (values) => {
            saveProfile(values)
        }
    })
    return (
        <form onSubmit={formik.handleSubmit}>
            <div style={{color: "red", fontSize: "20px"}}>{error}</div>
            <div className={classes.description}>
                <label htmlFor={'fullName'}><b>Full Name: </b></label>
                <input type='text'
                       {...formik.getFieldProps("fullName")}
                />
            </div>
            <div className={classes.description}>
                <label htmlFor={'lookingForAJob'}> <b>Looking for a job: </b></label>
                <input type={'checkbox'} name={'lookingForAJob'} defaultChecked={profile.lookingForAJob}
                       {...formik.getFieldProps("lookingForAJob")}
                />
            </div>
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
            <div className={classes.description}>
                <label htmlFor={'contacts'}><b>Contacts</b></label>: {Object.keys(profile.contacts)
                .map((key, i) => {
                    return <div key={i}>
                        <b>{key}: <input type='text'
                                         {...formik.getFieldProps("contacts." + key)}/>
                        </b>
                    </div>

                })}
            </div>

            <button type={'submit'}>Отправить</button>
        </form>
    )
}
export default ProfileDataEditingForm