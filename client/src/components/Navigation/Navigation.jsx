/* eslint-disable jsx-a11y/anchor-is-valid */
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
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Navbar</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-link active" aria-current="page" href="#">Home</a>
              <a className="nav-link" href="#">Features</a>
              <a className="nav-link" href="#">Pricing</a>
              <a className="nav-link disabled">Disabled</a>
            </div>
          </div>
        </div>
      </nav>
      <div>
        <Link to="/">
          <button type="button">My Day</button>
        </Link>
        <Link to="/statistic">
          <button type="button">Statistic</button>
        </Link>
        <Link to="/cabinet">
          <button type="button">Cabinet</button>
        </Link>
        <Link to="/settings">
          <button type="button">Setting</button>
        </Link>
        <Link to="/wschat">
          <button type="button">WSChat</button>
        </Link>
        <button type="button" onClick={handleLogout}>Logout</button>
      </div>
      <Outlet />
    </>
  );
}
