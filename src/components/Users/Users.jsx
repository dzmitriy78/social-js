import styles from "./users.module.css";
import UserPhoto from "../../assets/images/user.png";
import React from "react";
import {NavLink} from "react-router-dom";

let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    return <div>
        <div>
            {pages.map(p => {
                return <span key={p.toString()} onClick={() => {
                    props.onPageChanged(p)
                }} className={props.currentPage === p ? styles.selectedPage : ""}>{p}</span>
            })}
        </div>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                      <div>
                          <NavLink to={"/profile/" + u.id}>
                        <img src={u.photos.small != null ? u.photos.small : UserPhoto} className={styles.userAvatar}
                             alt={""}/>
                          </NavLink>
                      </div>
                      <div>
                        {u.followed ?
                            <button disabled={props.followingInProgress
                                .some(id => id === u.id)} onClick={() => {props.unfollowing(u.id)
                            }}>Unfollow</button>

                            : <button disabled={props.followingInProgress
                                .some(id => id === u.id)} onClick={() => {props.following(u.id)
                            }}>Follow</button>}
                      </div>
                </span>
                <span>
                    <div>{u.name}</div>
                    <div>{u.status}</div>
                </span>
                <span>
                    <div>{"u.location.city"}</div>
                    <div>{"u.location.country"}</div>
                </span>
            </div>)
        }
    </div>
}
export default Users;