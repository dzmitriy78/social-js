import {connect} from "react-redux";
import {
    following,
    getUsers,
    setCurrentPage,
    setUsersTotalCount,
    unfollowing
} from "../../redux/users-reducer";
import React from "react";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";

export class UsersContainerC extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (numberPage) => {
        this.props.getUsers(numberPage, this.props.pageSize)
        this.props.setCurrentPage(numberPage);
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                users={this.props.users}
                unfollowing={this.props.unfollowing}
                following={this.props.following}
                onPageChanged={this.onPageChanged}
                followingInProgress={this.props.followingInProgress}
            />
        </>
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}

export const UsersContainer = connect(mapStateToProps, {
    following,
    unfollowing,
    setCurrentPage,
    setUsersTotalCount,
    getUsers
})(UsersContainerC)
export default UsersContainerC;