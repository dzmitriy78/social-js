import styles from "./users.module.css";
import UserPhoto from "../../assets/images/user.png";
import React from "react";
import {NavLink} from "react-router-dom";
import * as axios from "axios";

let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    return <div>
        <div>
            {pages.map(p => {
                return <span key={p.id} onClick={() => {
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
                        {u.followed ? <button onClick={() => {
                                axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                    withCredentials: true,
                                    headers: {
                                        "API-KEY": "f9b35462-4ca0-4325-b47c-45fa527c54b4"
                                    }
                                })
                                    .then(response => {
                                            if (response.data.resultCode === 0) {
                                                    props.unFollow(u.id)
                                            }
                                        }
                                    )
                            }}>Unfollow</button>
                            : <button onClick={() => {
                                axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                                    withCredentials: true,
                                    headers: {
                                        "API-KEY": "f9b35462-4ca0-4325-b47c-45fa527c54b4"
                                    }
                                })
                                    .then(response => {
                                            if (response.data.resultCode === 0) {
                                                    props.follow(u.id)
                                            }
                                        }
                                    )
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