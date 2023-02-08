import React, { useEffect } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';

export default function AuthForm() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/auth/login');
    // тут тоже был пустой массив но ругался эслинт
  }, []);

  return (
    <>
      <div>
        <Link to="/auth/login">
          Войти
        </Link>
        <Link to="/auth/register">
          Регистрация
        </Link>
      </div>
      <Outlet />
    </>
  );
}
