import { MainLayout } from '@/components/layout';
import { Box, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { NextPageWithLayout } from '../models';

// const Header = dynamic(() => import('@/components/header'), { ssr: true });

const About: NextPageWithLayout = () => {
  const [postList, setPostList] = useState([]);
  const router = useRouter();

  console.log('About query: ', router.query);
  const page = router.query?.page;

  useEffect(() => {
    if (!page) return;

    (async () => {
      const response = await fetch(`https://js-post-api.herokuapp.com/api/posts?_page=${page} `);
      const data = await response.json();

      setPostList(data.data);
    })();
  }, [page]);

  function handleNextPage() {
    router.push(
      {
        pathname: '/about',
        query: {
          page: Number(page || 1) + 1,
        },
      },
      undefined,
      { shallow: true }
    );
  }

  return (
    <Box>
      <Typography component="h1" variant="h3" color="primary.main">
        About page
      </Typography>
      <ul className="post-list">
        {postList.map((post: any) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
      <button onClick={handleNextPage}>Next Page</button>
    </Box>
  );
};

export const getStaticProps = () => {
  console.log('get static props');

  return {
    props: {},
  };
};

About.Layout = MainLayout;

export default About;
