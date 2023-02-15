import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { CgMenu } from 'react-icons/cg';

import { fetchLogoutThunk } from '../../redux/asyncActions/fetchLogoutThunk';

import styles from './AdminNavigation.module.scss';

export default function AdminNavigation() {
  const [isFirstRender, setIsFirstRender] = useState(true);
  const [fullNavbarVisible, setFullNavbarVisible] = useState(false);
  const [extraClassName, setExtraClassName] = useState('');

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.userStore);
  console.log('user ===>', user);

  useEffect(() => {
    if (!user.userLogin && !user.isUserInfoLoading) {
      navigate('/');
    }
  }, [user]);

  useEffect(() => {
    if (!isFirstRender && fullNavbarVisible) {
      setExtraClassName(` ${styles.navbarContentFull}`);
    } else if (!isFirstRender && !fullNavbarVisible) {
      setExtraClassName(` ${styles.navbarContentSlim}`);
    } else {
      setExtraClassName('');
    }
  }, [isFirstRender, fullNavbarVisible]);

  const handleExtraLinkClick = () => {
    setIsFirstRender(false);
    setFullNavbarVisible(false);
  };

  const handleMainLinkClick = () => {
    if (fullNavbarVisible) {
      setIsFirstRender(false);
      setFullNavbarVisible(false);
    }
  };

  const handleLogout = () => {
    dispatch(fetchLogoutThunk());
  };

  return (
    <div className={styles.container}>

      <div className={styles.navbar}>
        <div className={`${styles.navbarContent}${extraClassName}`}>

          <div className={styles.navbarMain}>
            <Link to="/admin" className={styles.navbarMainLink} onClick={handleMainLinkClick}>
              Enjoy Sport
            </Link>

            <button
              type="button"
              className={styles.navbarMainButton}
              onClick={() => {
                setIsFirstRender(false);
                setFullNavbarVisible((prev) => !prev);
              }}
            >
              <CgMenu />
            </button>
          </div>

          <div className={styles.navbarExtra}>
            <Link to="map" className={styles.navbarExtraLink} onClick={handleExtraLinkClick}>
              Фитнес рядом
            </Link>

            <Link to="settings" className={styles.navbarExtraLink} onClick={handleExtraLinkClick}>
              Настройки
            </Link>

            <button
              type="button"
              className={styles.navbarExtraLink}
              onClick={handleLogout}
            >
              Выход
            </button>
          </div>

        </div>
      </div>

      <div className={styles.content}>
        <Outlet />
      </div>

    </div>
  );
}
