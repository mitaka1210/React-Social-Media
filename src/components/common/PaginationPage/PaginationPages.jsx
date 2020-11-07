import React from 'react';
import styles from './pagination.module.css';
function PaginationPages(props) {
  //? броят на всичко потребители разделяме на страниците и закръгляме към по голямото
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  return (
    <div className={styles.pageNum}>
      {pages.map((p, index) => {
        return (
          <span
            key={`${p.id}_${index}`}
            className={props.currentPage === p ? styles.selectedPAge : null}
            onClick={() => {
              props.onPageChanged(p);
            }}>
            {p}
          </span>
        );
      })}
    </div>
  );
}

export default PaginationPages;
