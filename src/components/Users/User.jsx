import styles from "./users.module.css";
import UserPhoto from "../../assets/images/user.png";
import React from "react";
import {NavLink} from "react-router-dom";

let User = ({
                user,
                isAuth,
                following,
                followingInProgress,
                unfollowing
            }) => {

    return <div>

                <span>`
                      <div>
                          <NavLink to={"/profile/" + user.id}>
                        <img src={user.photos.small != null ? user.photos.small : UserPhoto} className={styles.userAvatar}
                             alt={"photo"}/>
                          </NavLink>
                      </div>
                    <div className={styles.follow}>
                        {user.followed ?
                            <button disabled={!isAuth || followingInProgress
                                .some(id => id === user.id)} onClick={() => {
                                unfollowing(user.id)
                            }}>Unfollow</button>

                            : <button disabled={!isAuth || followingInProgress
                                .some(id => id === user.id)} onClick={() => {
                                following(user.id)
                            }}>Follow</button>}
                      </div>
                </span>
        <span>
                    <div className={styles.usersName}>{user.name}</div>
                    <div className={styles.usersDescr}>{user.status}</div>
                </span>
        <span>
                    <div className={styles.usersDescr}>{"user.location.city"}</div>
                    <div className={styles.usersDescr}>{"user.location.country"}</div>
                </span>
    </div>
}
export default User;