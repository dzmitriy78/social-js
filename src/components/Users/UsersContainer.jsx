import {connect} from "react-redux";
import {following, getUsers, setCurrentPage, setUsersTotalCount, unfollowing} from "../../redux/users-reducer";
import React from "react";
import Users from "./Users";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {
    getCurrentPage, getFollowingInProgress, getIsAuth,
    getIsFetching,
    getPageSize,
    getTotalUsersCount,
    requestUsers
} from "../../redux/users-selectors";
import {ProgressBarDemo} from "../common/Preloader/ProgressBar";

class UsersContainer extends React.Component {

    componentDidMount() {
        const {currentPage, pageSize} = this.props
        this.props.getUsers(currentPage, pageSize)
    }

    onPageChanged = (numberPage) => {
        const pageSize = this.props
        this.props.getUsers(numberPage, pageSize)
        this.props.setCurrentPage(numberPage);
    }

    render() {
        return <>
            {this.props.isFetching ? <ProgressBarDemo/> : null}
            <Users
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                users={this.props.users}
                unfollowing={this.props.unfollowing}
                following={this.props.following}
                onPageChanged={this.onPageChanged}
                followingInProgress={this.props.followingInProgress}
                isAuth={this.props.isAuth}
            />
        </>
    }
}

const mapStateToProps = (state) => {
    return {
        users: requestUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
        isAuth: getIsAuth(state)
    }

    /*{
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress,
        isAuth: state.auth.isAuth
    }*/

}

export default compose(
    /*withAuthRedirect,*/
    connect(mapStateToProps, {
        following, unfollowing, setCurrentPage, setUsersTotalCount, getUsers
    }))(UsersContainer)