import { Footer, Header } from '@/components/common';
import { LayoutProps } from '@/models';
import { Stack } from '@mui/material';
import { Box } from '@mui/system';
import * as React from 'react';

export function MainLayout(props: LayoutProps) {
  return (
    <Stack minHeight="100vh">
      <Header />
      <Box component="main" flexGrow={1}>
        {props.children}
      </Box>
      <Footer />
    </Stack>
  );
}
