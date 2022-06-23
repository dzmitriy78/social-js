import styles from "./paginator.module.css";
import React, {useState} from "react";

let Paginator = ({currentPage, onPageChanged, totalItemsCount, pageSize, portionSize}) => {
    let pagesCount = Math.ceil(totalItemsCount / pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    let portionCount = Math.ceil(pagesCount / portionSize)
    let [portionNumber, setPortionNumber] = useState(1)
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
    let rightPortionPageNumber = portionNumber * portionSize

    return <div className={styles.pageWrapper}>
        {portionNumber > 1 &&
            <button className={styles.btn} onClick={() => setPortionNumber(portionNumber - 1)}> prev </button>}
        {pages
            .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
            .map((p, i) => {
                return <span key={i} onClick={() => {
                    onPageChanged(p)
                }} className={currentPage === p ? styles.selectedPage : styles.page}>{p}</span>
            })}
        {portionNumber < portionCount
            && <button className={styles.btn} onClick={() => setPortionNumber(portionNumber + 1)}>next</button>}
    </div>
}
export default Paginator;