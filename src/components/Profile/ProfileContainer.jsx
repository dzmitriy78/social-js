import React from "react";
import {Profile} from "./Profile";
import {getProfile} from "../../redux/profile-reducer";
import {connect} from "react-redux";
import {useMatch} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

const ProfileURLMatch = (props) => {
    const match = useMatch('/profile/:userId/');
    return <AuthRedirectComponent {...props} match={match}/>;
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

let AuthRedirectComponent = withAuthRedirect(ProfileContainer)

let mapStateToProps = (state) => ({
        profile: state.profilePage.profile,
    }
)

export default connect(mapStateToProps, {getProfile})(ProfileURLMatch);