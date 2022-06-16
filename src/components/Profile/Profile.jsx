import React from "react";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";

export const Profile = ({profile, status, updateStatus}) => {
    if (!profile) {
        return <div>
            <img
                src="https://cdn-prod.medicalnewstoday.com/content/images/articles/325/325466/man-walking-dog.jpg" alt={"profileImg"}/>
        </div>
    }
    return (
        <div>
            <ProfileInfo profile = {profile}
                         status={status}
                         updateStatus = {updateStatus}/>
            <MyPostsContainer/>
        </div>
    )
}