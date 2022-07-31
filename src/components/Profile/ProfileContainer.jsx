import React, {useEffect} from "react";
import {Profile} from "./Profile";
import {getProfile, getStatus, savePhoto, saveProfile, updateStatus} from "../../redux/profile-reducer";
import {connect} from "react-redux";
import {useMatch} from "react-router-dom";
import {compose} from "redux";

export const ProfileURLMatch = (Component) => {
    let RouterComponent;
    RouterComponent = (props) => {
        const match = useMatch('/profile/:userId/');
        return <Component {...props} match={match}/>;
    };
    return RouterComponent
}

function ProfileContainer({
                              getProfile,
                              getStatus,
                              match,
                              meId,
                              profile,
                              status,
                              updateStatus,
                              savePhoto,
                              saveProfile,
                              error,
                              editMode
                          }) {
    useEffect(() => {
        let userId = match ? match.params.userId : meId
        if (userId) {
            getProfile(userId)
            getStatus(userId)
        }
    }, [match])
    return (
        <Profile profile={profile}
                 status={status}
                 updateStatus={updateStatus}
                 isOwner={!match}
                 savePhoto={savePhoto}
                 saveProfile={saveProfile}
                 error={error}
                 editMode={editMode}
        />
    )
}

let mapStateToProps = (state) => ({
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        meId: state.auth.userId,
        error: state.profilePage.error,
        editMode: state.profilePage.editMode
    }
)

export default compose(
    connect(mapStateToProps, {getProfile, getStatus, updateStatus, savePhoto, saveProfile}),
    ProfileURLMatch,
    /*withAuthRedirect*/)
(ProfileContainer)
