import { Box, Container, Stack, Typography, Link as MuiLink } from '@mui/material';
import Link from 'next/link';
import React from 'react';
import { PostCard } from './PostCard';

export function RecentPostsSection() {
  return (
    <Box component="section" bgcolor="#EDF7FA" pt={2} pb={4}>
      <Container maxWidth="md">
        <Stack
          direction="row"
          justifyContent={{
            xs: 'center',
            md: 'space-between',
          }}
          alignItems="center"
          pb={2}
        >
          <Typography variant="h6" fontWeight="normal">
            Recent posts
          </Typography>
          <Link href="" passHref>
            <MuiLink
              sx={{
                display: {
                  xs: 'none',
                  md: 'block',
                },
                color: 'secondary.main',
                textDecoration: 'none',
              }}
            >
              View all
            </MuiLink>
          </Link>
        </Stack>
        <Stack
          direction={{
            xs: 'column',
            md: 'row',
          }}
          spacing={3}
          sx={{
            '& > div': {
              width: {
                xs: 1,
                md: 1 / 2,
              },
            },
          }}
        >
          <Box>
            <PostCard />
          </Box>
          <Box>
            <PostCard />
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}
