import React from "react";
import {Profile} from "./Profile";
import {getProfile} from "../../redux/profile-reducer";
import {connect} from "react-redux";
import {useMatch} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

const ProfileURLMatch = (Component) => {
    return (props) => {
        const match = useMatch('/profile/:userId/');
        return <Component {...props} match={match}/>;
    }
}

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match ? this.props.match.params.userId : /*"My id"*/ 7384;
        this.props.getProfile(userId)
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }
}

let mapStateToProps = (state) => ({
        profile: state.profilePage.profile,
    }
)

export default compose(
    connect(mapStateToProps, {getProfile}),
    ProfileURLMatch,
    withAuthRedirect)
(ProfileContainer)
