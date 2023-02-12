import React, { useEffect, useState } from 'react';
import { SwitchTransition, CSSTransition } from 'react-transition-group';
import { CiDumbbell as Dumbbell } from 'react-icons/ci';
import { SiInstagram as Instagram } from 'react-icons/si';
import RegisterForm from './AuthForms/RegisterForm';
import LoginForm from './AuthForms/LoginForm';

import styles from './AuthPage.module.scss';

import photo1 from '../../images/auth-photos/auth-photos-001.jpg';
import photo2 from '../../images/auth-photos/auth-photos-002.jpg';
import photo3 from '../../images/auth-photos/auth-photos-003.jpg';
import photo4 from '../../images/auth-photos/auth-photos-004.jpg';
import photo5 from '../../images/auth-photos/auth-photos-005.jpg';

const photos = [photo1, photo2, photo3, photo4, photo5];

export default function AuthPage() {
  const [photoIndex, setPhotoIndex] = useState(0);
  const [formVisible, setFormVisible] = useState(false);
  const [isAlreadyRegistered, setIsAlreadyRegistered] = useState(true);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setPhotoIndex((prev) => (prev === photos.length - 1 ? 0 : prev + 1));
    }, 7000);
    return () => clearInterval(intervalId);
  }, [formVisible]);

  return (
    <div className={styles.main}>

      <button
        type="button"
        onClick={() => setFormVisible((prev) => !prev)}
        className={styles.mainButton}
      >
        {formVisible ? 'Фото тренера' : 'Авторизация'}
      </button>

      <div className={styles.fillBlock} />

      <div className={styles.mainLogo}>
        <Dumbbell className={styles.mainLogoDumbbell} />
        <p className={styles.mainLogoBigText}>Enjoy Sport</p>
        <Dumbbell className={styles.mainLogoDumbbell} />
      </div>

      <div className={styles.mainLogo}>
        <p className={styles.mainLogoSmallText}>with</p>
        <a
          className={styles.mainLogoLink}
          href="/"
          target="_blank"
          rel="noreferrer"
        >
          <Instagram className={styles.mainLogoLinkInstagram} />
          <p className={styles.mainLogoSmallText}>julia_middle</p>
        </a>
      </div>

      <div className={styles.fillBlock} />

      <div className={styles.mainContent}>
        <SwitchTransition mode="out-in">
          <CSSTransition
            key={formVisible ? `${isAlreadyRegistered}` : photoIndex + 1}
            timeout={1500}
            appear
            classNames={{
              appear: styles.mainContentEnterActive,
              enterActive: styles.mainContentEnterActive,
              exitActive: styles.mainContentExitActive,
            }}
          >
            <>
              { formVisible
                && isAlreadyRegistered
                && (<LoginForm setIsAlreadyRegistered={setIsAlreadyRegistered} />) }

              { formVisible
                && !isAlreadyRegistered
                && (<RegisterForm setIsAlreadyRegistered={setIsAlreadyRegistered} />) }

              { !formVisible
                && (<img src={photos[photoIndex]} alt="julia" style={{ height: '100%' }} />) }
            </>
          </CSSTransition>
        </SwitchTransition>
      </div>

    </div>
  );
}
