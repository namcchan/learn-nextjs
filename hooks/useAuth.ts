import { authApi } from '@/api';
import useSWR from 'swr';
import { PublicConfiguration } from 'swr/dist/types';

export function useAuth(options?: Partial<PublicConfiguration>) {
  const {
    data: profile,
    error,
    mutate,
  } = useSWR('/profile', {
    dedupingInterval: 60 * 60 * 1000, // 1hr
    revalidateOnFocus: false,
    ...options,
  });

  async function login() {
    await authApi.login({ username: 'nana', password: '123123' });

    await mutate();
  }
  async function logout() {
    await authApi.logout();

    mutate({}, false);
  }

  return {
    profile,
    error,
    login,
    logout,
  };
}
