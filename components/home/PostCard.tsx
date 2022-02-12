import { Card, CardContent, Stack, Typography } from '@mui/material';
import { Box } from '@mui/system';
import * as React from 'react';

export interface PostCardProps {}

export function PostCard(props: PostCardProps) {
  return (
    <Card sx={{ boxShadow: 'none' }}>
      <CardContent sx={{ padding: '24px' }}>
        <Typography variant="h5" fontWeight="bold" pb={2}>
          Making a design system from scratch
        </Typography>
        <Stack direction="row" pb={2}>
          <Typography
            borderRight="1px solid"
            pr={{
              xs: 2,
              md: 3,
            }}
          >
            12 Feb 2020
          </Typography>
          <Typography
            pl={{
              xs: 2,
              md: 3,
            }}
          >
            Design, Pattern
          </Typography>
        </Stack>
        <Typography component="p">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim
          velit mollit. Exercitation veniam consequat sunt nostrud amet.
        </Typography>
      </CardContent>
    </Card>
  );
}
