import Header from '@/components/header';
import { MainLayout } from '@/components/layout';
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
    <>
      <h1>About page</h1>
      <Header />
      <ul className="post-list">
        {postList.map((post: any) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
      <button onClick={handleNextPage}>Next Page</button>
    </>
  );
};

export const getStaticProps = () => {
  console.log('get static props');

  return {
    props: {},
  };
};

About.Layout = MainLayout;

// export function getServerSideProps() {
//   return {
//     props: {},
//   };
// }

export default About;
