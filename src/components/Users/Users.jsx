import styles from "./users.module.css";
import React from "react";
import Paginator from "../common/Paginator";
import User from "./User";

let Users = ({
                 users,
                 isAuth,
                 currentPage,
                 following,
                 followingInProgress,
                 onPageChanged,
                 pageSize,
                 totalUsersCount,
                 unfollowing
             }) => {

    return <div className={styles.usersRoot}>
        <Paginator currentPage={currentPage}
                   onPageChanged={onPageChanged}
                   totalItemsCount={totalUsersCount}
                   pageSize={pageSize}
                   portionSize={10}
        />
        {
            users.map((u, i) => <User key={i}
                                      user={u}
                                      isAuth={isAuth}
                                      following={following}
                                      followingInProgress={followingInProgress}
                                      unfollowing={unfollowing}
            />)
        }
    </div>
}
export default Users;