import { Card, CardContent, Stack, Typography } from '@mui/material';
import { Post } from 'data/blogs';
import * as React from 'react';

export interface PostCardProps {
  post: Post;
  isCard: boolean;
}

export function PostCard({ post, isCard }: PostCardProps) {
  return (
    <Card sx={{ boxShadow: 'none' }}>
      <CardContent
        sx={{
          padding: {
            xs: isCard ? '16px' : '0',
            md: isCard ? '24px' : '0',
          },
          '&:last-child': {
            paddingBottom: isCard ? '' : 0,
          },
        }}
      >
        <Typography variant="h5" fontWeight="bold" pb={2}>
          {post.title}
        </Typography>
        <Stack direction="row" pb={2}>
          <Typography
            borderRight="1px solid"
            pr={{
              xs: 2,
              md: 3,
            }}
          >
            {post.date}
          </Typography>
          <Typography
            pl={{
              xs: 2,
              md: 3,
            }}
          >
            {post.tag}
          </Typography>
        </Stack>
        <Typography component="p">{post.description}</Typography>
      </CardContent>
    </Card>
  );
}
