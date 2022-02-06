import { LayoutProps } from '@/models';
import * as React from 'react';

export function EmptyLayout(props: LayoutProps) {
  return <>{props.children}</>;
}
