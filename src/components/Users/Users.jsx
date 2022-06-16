import styles from "./users.module.css";
import UserPhoto from "../../assets/images/user.png";
import React from "react";
import {NavLink} from "react-router-dom";

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
    let pagesCount = Math.ceil(totalUsersCount / pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    return <div className={styles.usersRoot}>

        {
            users.map((u, i) => <div key={i}>
                <span>
                      <div>
                          <NavLink to={"/profile/" + u.id}>
                        <img src={u.photos.small != null ? u.photos.small : UserPhoto} className={styles.userAvatar}
                             alt={"photo"}/>
                          </NavLink>
                      </div>
                    <div className={styles.follow}>
                        {u.followed ?
                            <button disabled={!isAuth || followingInProgress
                                .some(id => id === u.id)} onClick={() => {
                                unfollowing(u.id)
                            }}>Unfollow</button>

                            : <button disabled={!isAuth || followingInProgress
                                .some(id => id === u.id)} onClick={() => {
                                following(u.id)
                            }}>Follow</button>}
                      </div>
                </span>
                <span>
                    <div className={styles.usersName}>{u.name}</div>
                    <div className={styles.usersDescr}>{u.status}</div>
                </span>
                <span>
                    <div className={styles.usersDescr}>{"u.location.city"}</div>
                    <div className={styles.usersDescr}>{"u.location.country"}</div>
                </span>
            </div>)
        }
        <div className={styles.pageWrapper}>
            {pages.map(p => {
                return <span key={p} onClick={() => {
                    onPageChanged(p)
                }} className={currentPage === p ? styles.selectedPage : styles.page}>{p}</span>
            })}
        </div>
    </div>
}
export default Users;