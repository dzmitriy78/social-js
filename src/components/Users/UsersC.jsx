import React from "react";
import styles from "./users.module.css"
import * as axios from "axios";
import UserPhoto from "../../assets/images/user.png"

class UsersC extends React.Component {


    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setUsersTotalCount(response.data.totalCount)
            })
    }
    onPageChanged = (numberPage)=>{
        this.props.setCurrentPage(numberPage)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${numberPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }

    render() {
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }
        return <div>
            <div>
                {pages.map(p => {
                    return <span onClick={() => {this.onPageChanged(p)}} className={this.props.currentPage === p && styles.selectedPage}>{p}</span>
                })}
            </div>
            {
                this.props.users.map(u => <div key={u.id}>
                <span>
                      <div>
                        <img src={u.photos.small != null ? u.photos.small : UserPhoto} className={styles.userAvatar}
                             alt={""}/>
                      </div>
                      <div>
                        {u.followed ? <button onClick={() => {
                                this.props.unFollow(u.id)
                            }}>Unfollow</button>
                            : <button onClick={() => {
                                this.props.follow(u.id)
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
}

export default UsersC;