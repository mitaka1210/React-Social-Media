import React from 'react';
import styles from '../FormControl/formControl.module.css';
function LoginControl({ input, meta, ...props }) {
  const hasError = meta.touched && meta.error;

  return (
    <div className={styles.formControl + ' ' + (hasError ? styles.error : '')}>
      <div>
        <input {...input} {...props} />
      </div>
      {hasError && <span>{meta.error}</span>}
    </div>
  );
}

export default LoginControl;
