import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Outlet, useNavigate } from 'react-router-dom';

import { clearUserInfoAction } from '../../redux/reducers/userReducer';

export default function WSNavigation() {
  const user = useSelector((store) => store.userStore);
  // console.log('user ===>', user);

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
    <>
      <div style={{ marginBottom: '10px', backgroundColor: 'lightgray' }}>
        <strong style={{ margin: '5px' }}>{`Hello, ${user.userLogin}!`}</strong>
        <Link to="/" style={{ margin: '5px' }}>WSMain</Link>
        <Link to="/wschat" style={{ margin: '5px' }}>WSChat</Link>
        <button type="button" onClick={handleLogout} style={{ margin: '5px' }}>Logout</button>
      </div>
      <Outlet />
    </>
  );
}
