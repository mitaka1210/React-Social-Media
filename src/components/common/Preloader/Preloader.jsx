import React from 'react';
import loader from '../../../assets/images/loader.svg';
import styles from './preloader.module.scss';
function Preloader() {
  return (
    <div className={styles.Loader}>
      <div className={styles.containerLoader}>
        <div className={styles.yellow}></div>
        <div className={styles.red}></div>
        <div className={styles.blue}></div>
        <div className={styles.violet}></div>
      </div>
    </div>
  );
}

export default Preloader;
