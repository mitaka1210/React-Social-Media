import React, { useState } from 'react';
import styles from './pagination.module.scss';
import cn from 'classnames';

function PaginationPages({
  totalUsersCount,
  pageSize,
  currentPage,
  onPageChanged,
  portionSize = 10,
}) {
  //? броят на всичко потребители разделяме на страниците и закръгляме към по голямото
  let pagesCount = Math.ceil(totalUsersCount / pageSize);

  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  let portionCount = Math.ceil(pagesCount / portionSize);
  let [portionNumber, setPortionNumber] = useState(1);

  let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
  let rightPortionPageNumber = portionNumber * portionSize;

  return (
    <div className={cn(styles.paginator)}>
      {portionNumber > 1 && (
        <button
          onClick={() => {
            setPortionNumber(portionNumber - 1);
          }}>
          Prev
        </button>
      )}

      {pages
        .filter((p) => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
        .map((p, index) => {
          return (
            <span
              className={cn(
                {
                  [styles.selectedPage]: currentPage === p,
                },
                styles.pageNumber,
              )}
              key={`${p.id}${index}`}
              onClick={(e) => {
                onPageChanged(p);
              }}>
              {p}
            </span>
          );
        })}
      {portionCount > portionNumber && (
        <button
          onClick={() => {
            setPortionNumber(portionNumber + 1);
          }}>
          Next
        </button>
      )}
    </div>
  );
}
//TODO: преди да добавим бутоните Prev и Next
//function PaginationPages(props) {
//  //? броят на всичко потребители разделяме на страниците и закръгляме към по голямото
//  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

//  let pages = [];
//  for (let i = 1; i <= pagesCount; i++) {
//    pages.push(i);
//  }
//  return (
//    <div className={styles.pageNum}>
//      {pages.map((p, index) => {
//        return (
//          <span
//            key={`${p.id}_${index}`}
//            className={props.currentPage === p ? styles.selectedPAge : null}
//            onClick={() => {
//              props.onPageChanged(p);
//            }}>
//            {p}
//          </span>
//        );
//      })}
//    </div>
//  );
//}

export default PaginationPages;
