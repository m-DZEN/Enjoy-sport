import React, { useEffect } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';

export default function AuthForm() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/auth/login');
    // тут должен быть пустой массив
  }, []);

  return (
    <>
      <div>
        <Link to="/auth/login">
          Login
        </Link>
        <Link to="/auth/register">
          Register
        </Link>
      </div>
      <Outlet />
    </>
  );
}
