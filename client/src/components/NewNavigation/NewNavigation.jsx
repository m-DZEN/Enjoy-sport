import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { CgMenu } from 'react-icons/cg';

import styles from './NewNavigation.module.scss';

export default function NewNavigation() {
  const [fullNavbarVisible, setFullNavbarVisible] = useState(false);

  return (
    <div className={styles.container}>
      <div className={styles.navbar}>
        <div className={`${styles.navbarContent} ${fullNavbarVisible
          ? styles.navbarContentFull
          : styles.navbarContentSlim}`}
        >
          Enjoy Sport
          <button
            className={styles.navbarButton}
            type="button"
            onClick={() => setFullNavbarVisible((prev) => !prev)}
          >
            <CgMenu className={styles.navbarButtonIcon} />
          </button>
        </div>
      </div>
      <div className={styles.content}>
        <Outlet />
      </div>
    </div>
  );
}
