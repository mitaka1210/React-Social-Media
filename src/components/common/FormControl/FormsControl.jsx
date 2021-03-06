import React from 'react';
import styles from './formControl.module.scss';

function FormsControl({ input, meta, ...props }) {
  const hasError = meta.touched && meta.error;

  return (
    <div className={styles.formControl + ' ' + (hasError ? styles.error : '')}>
      <div>
        <textarea {...input} {...props} />
      </div>
      {hasError && <span>{meta.error}</span>}
    </div>
  );
}

export default FormsControl;
