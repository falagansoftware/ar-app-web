import { ReactElement } from 'react';
import { Navigate } from 'react-router-dom';
import { LocalStorageKeys } from '../../../config/local-storage.config';

export function PrivateRoute({ children }: { children: ReactElement }) {
  const token = localStorage.getItem(LocalStorageKeys.ACCESS_TOKEN);
  if (!token) {
    return <Navigate to="/" />;
  }
  return children;
}
