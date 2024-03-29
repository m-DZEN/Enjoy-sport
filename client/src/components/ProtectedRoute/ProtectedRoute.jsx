import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

export default function ProtectedRoute({ user, redirectPath }) {
  if (!user) {
    return <Navigate to={redirectPath} replace />;
  }
  if (user === 'admin') {
    return <Navigate to="admin" replace />;
  }
  return <Outlet />;
}
