import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

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

      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand>
            <Link to="/">Enjoy Sport</Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="dark-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link>
                <Link to="/statistic">Статистика</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/cabinet">Личный кабинет</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/settings">Настройки</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/wschat">Чат с тренером</Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Link to="/">
        <button type="button">My Day</button>
      </Link>
      <Link to="/wschat">
        <button type="button">WSChat</button>
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
      <button type="button" onClick={handleLogout}>Logout</button>
      <Outlet />
    </>
  );
}
