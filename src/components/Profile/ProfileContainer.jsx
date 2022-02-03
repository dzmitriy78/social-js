import React from "react";
import {Profile} from "./Profile";
import * as axios from "axios";
import {setUserProfile} from "../../redux/profile-reducer";
import {connect} from "react-redux";
import {useMatch} from "react-router-dom";

const ProfileURLMatch = (props) => {
    const match = useMatch('/profile/:userId/');
    return <ProfileContainer {...props} match={match}/>;
}

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match ? this.props.match.params.userId : 'My ID';
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`).then(({data}) => {
            this.props.setUserProfile(data);
        });
    }

    /*
         axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
             .then(response => {
                 this.props.setUserProfile(response.data);
             })
     }
 */
    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }
}

let mapStateToProps = (state) => ({
        profile: state.profilePage.profile
    }
)

export default connect(mapStateToProps, {setUserProfile})(ProfileURLMatch);