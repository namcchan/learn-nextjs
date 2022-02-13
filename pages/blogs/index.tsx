import { PostCard } from '@/components/common/PostCard';
import { MainLayout } from '@/components/layout';
import { NextPageWithLayout } from '@/models';
import { Container, Stack, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { posts } from 'data/blogs';

const Blogs: NextPageWithLayout = () => {
  return (
    <Box>
      <Container maxWidth="md">
        <Typography
          component="h1"
          variant="h3"
          fontWeight="bold"
          mt={{
            xs: 6,
            md: 16,
          }}
          mb={{
            xs: 4,
            md: 10,
          }}
        >
          Blogs
        </Typography>
        <Stack>
          {posts.map((post, index) => (
            <Box
              mb={{
                xs: 2,
                md: 4,
              }}
              pb={{
                xs: 2,
                md: 4,
              }}
              key={index}
              borderBottom="1px solid #E0E0E0"
            >
              <PostCard isCard={false} post={post} />
            </Box>
          ))}
        </Stack>
      </Container>
    </Box>
  );
};

Blogs.Layout = MainLayout;

export default Blogs;
