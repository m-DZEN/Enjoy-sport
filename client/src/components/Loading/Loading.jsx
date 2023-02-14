import React from 'react';
import { CiDumbbell as Dumbbell } from 'react-icons/ci';

import styles from './Loading.module.scss';

export default function Loading() {
  return (
    <div className={styles.loading}>
      <Dumbbell />
    </div>
  );
}
