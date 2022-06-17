import styles from "./paginator.module.css";
import React from "react";

let Paginator = ({currentPage, onPageChanged, totalUsersCount, pageSize}) => {
    let pagesCount = Math.ceil(totalUsersCount / pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    return <div className={styles.pageWrapper}>
        {pages.map((p,i) => {
            return <span key={i} onClick={() => {
                onPageChanged(p)
            }} className={currentPage === p ? styles.selectedPage : styles.page}>{p}</span>
        })}
    </div>
}
export default Paginator;