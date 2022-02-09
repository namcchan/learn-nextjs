import { useAuth } from '@/hooks/index';
import { LayoutProps } from '@/models';
import Link from 'next/link';
import { useRouter } from 'next/router';
import * as React from 'react';
import { Auth } from '../common';

export function AdminLayout(props: LayoutProps) {
  const router = useRouter();
  const { logout, profile } = useAuth();

  async function handleLogout() {
    try {
      await logout();

      router.push('/login');
    } catch (error) {
      console.log('Failed to logout: ', error);
    }
  }

  return (
    <Auth>
      <h1>Admin layout</h1>
      <div>Sidebar</div>

      <p>{JSON.stringify(profile)}</p>

      <button onClick={handleLogout}>Logout</button>

      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>

      <div>{props.children}</div>
    </Auth>
  );
}
