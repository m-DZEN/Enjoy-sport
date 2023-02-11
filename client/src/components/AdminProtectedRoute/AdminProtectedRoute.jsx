import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

export default function AdminProtectedRoute({ userLogin, redirectPath }) {
  if (userLogin !== 'admin') {
    return <Navigate to={redirectPath} replace />;
  }
  return <Outlet />;
}
