import { authApi } from '@/api';
import React from 'react';

type Props = {};

export default function Login({}: Props) {
  async function handleLogin() {
    try {
      const data = await authApi.login({ username: 'nana', password: '123123' });
    } catch (error) {
      console.log('Failed to login: ', error);
    }
  }

  async function handleGetProfile() {
    try {
      const data = await authApi.getProfile();
      console.log(data);
    } catch (error) {
      console.log('Failed to get profile: ', error);
    }
  }

  async function handleLogout() {
    try {
      const data = await authApi.logout();
      console.log(data);
    } catch (error) {
      console.log('Failed to logout: ', error);
    }
  }

  return (
    <div>
      <h1>Login page</h1>

      <button onClick={handleLogin}>Login</button>
      <button onClick={handleGetProfile}>Get profile</button>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}
