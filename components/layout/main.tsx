import { LayoutProps } from '@/models';
import Link from 'next/link';
import * as React from 'react';

export function MainLayout(props: LayoutProps) {
  return (
    <div>
      <h1>main layout</h1>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>

      <div>{props.children}</div>
    </div>
  );
}
