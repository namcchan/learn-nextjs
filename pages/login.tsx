import { authApi } from '@/api';
import React from 'react';
import { useAuth } from '../hooks';

type Props = {};

export default function Login({}: Props) {
  const { login, logout, profile } = useAuth({
    revalidateOnMount: false,
  });

  async function handleLogin() {
    try {
      await login();

      // TODO redirect to home page
    } catch (error) {
      console.log('Failed to login: ', error);
    }
  }

  async function handleLogout() {
    try {
      await logout();
    } catch (error) {
      console.log('Failed to logout: ', error);
    }
  }

  return (
    <div>
      <h1>Login page</h1>

      <p>PROFILE: {JSON.stringify(profile || {}, null, 4)}</p>

      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}
