import React from 'react';
import { Outlet } from 'react-router-dom';

import styles from './NewNavigation.module.scss';

export default function NewNavigation() {
  return (
    <div className={styles.navigationBlock}>
      <div className={styles.navbar}>Navigation</div>
      <Outlet />
    </div>
  );
}
