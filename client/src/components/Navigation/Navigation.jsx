/* eslint-disable func-names */
/* eslint-disable no-console */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/button-has-type */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Outlet, useNavigate } from 'react-router-dom';

import { clearUserInfoAction } from '../../redux/reducers/userReducer';

export default function Navigation() {
  const user = useSelector((store) => store.userStore);
  console.log('user ===>', user);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    (async function () {
      try {
        const res = await fetch('http://localhost:3001/logout', { credentials: 'include' });
        // console.log('res.status ===>', res.status);
        if (res.status === 200) {
          const { backendResult } = await res.json();
          if (backendResult === 'LOGOUT-OK') {
            console.log('LOGOUT-OK');
            dispatch(clearUserInfoAction());
            navigate('/');
          }
        } else {
          console.log(`Ошибка ${res.status} на сервере!`);
        }
      } catch (error) {
        console.log('ERROR:', error.message);
      }
    }());
  };

  return (
    <div>
      <Link to="/">
        <button>My Day</button>
      </Link>
      <Link to="/statistic">
        <button>Statistic</button>
      </Link>
      <Link to="/cabinet">
        <button>Cabinet</button>
      </Link>
      <Link to="/settings">
        <button>Setting</button>
      </Link>
      <Link>
        <button type="button" onClick={handleLogout}>Logout</button>
      </Link>
      <Outlet />
    </div>
  );
}
