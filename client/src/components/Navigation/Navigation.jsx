/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
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

  const [expanded, setExpanded] = useState(false);

  return (
    <>

      <Navbar expanded={expanded} bg="dark" expand="lg" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">Enjoy Sport</Navbar.Brand>
          <Navbar.Toggle onClick={() => setExpanded(expanded ? false : 'expanded')} aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link onClick={() => setExpanded(false)} as={Link} to="/wschat">Чат с тренером</Nav.Link>
              <Nav.Link onClick={() => setExpanded(false)} as={Link} to="/statistic">Статистика</Nav.Link>
              <Nav.Link onClick={() => setExpanded(false)} as={Link} to="/cabinet">Личный кабинет</Nav.Link>
              <Nav.Link onClick={() => setExpanded(false)} as={Link} to="/settings">Настройки</Nav.Link>
              <Nav.Link onClick={handleLogout} as={Link} to="/"> Выход</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet />
    </>
  );
}
