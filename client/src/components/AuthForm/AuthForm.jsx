import React, { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

export default function AuthForm() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/auth/login');
  }, []);

  return (
    <Outlet />
  );
}
