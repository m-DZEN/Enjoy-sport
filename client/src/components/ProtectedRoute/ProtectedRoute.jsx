/* eslint-disable react/prop-types */
import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

export default function ProtectedRoute({ user, redirectPath }) {
  if (!user) {
    return <Navigate to={redirectPath} replace />;
  }
  return <Outlet />;
}
