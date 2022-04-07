import React from "react";
import {Profile} from "./Profile";
import {getProfile, getStatus, updateStatus} from "../../redux/profile-reducer";
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

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match ? this.props.match.params.userId : /*"My id"*/ 7384;
        this.props.getProfile(userId)
        this.props.getStatus(userId)
    }

    render() {
        return (
            <Profile {...this.props}
                     profile={this.props.profile}
                     status={this.props.status}
                     updateStatus = {this.props.updateStatus}
            />
        )
    }
}

let mapStateToProps = (state) => ({
        profile: state.profilePage.profile,
        status: state.profilePage.status
    }
)

export default compose(
    connect(mapStateToProps, {getProfile, getStatus, updateStatus}),
    ProfileURLMatch,
    /* withAuthRedirect*/)
(ProfileContainer)
