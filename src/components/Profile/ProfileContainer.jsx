import React from "react";
import {Profile} from "./Profile";
import {getProfile} from "../../redux/profile-reducer";
import {connect} from "react-redux";
import {Navigate, useMatch} from "react-router-dom";

const ProfileURLMatch = (props) => {
    const match = useMatch('/profile/:userId/');
    return <ProfileContainer {...props} match={match}/>;
}

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match ? this.props.match.params.userId : /*"My id"*/ 7384;
        this.props.getProfile(userId)
    }

    render() {
        if (!this.props.isAuth) return <Navigate replace to = "/login"/>
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }
}

let mapStateToProps = (state) => ({
        profile: state.profilePage.profile,
        isAuth: state.auth.isAuth
    }
)

export default connect(mapStateToProps, {getProfile})(ProfileURLMatch);