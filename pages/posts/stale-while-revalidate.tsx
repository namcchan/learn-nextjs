import { GetServerSideProps, GetServerSidePropsContext } from 'next';
import React, { useEffect, useState } from 'react';

type Props = {
  post: any;
};

export default function Params({ post }: Props) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const clockId = setInterval(() => {
      setCount((x) => {
        if (x > 60) clearInterval(clockId);
        return x + 1;
      });
    }, 1000);

    return clearInterval(clockId);
  }, []);

  return (
    <div>
      <h1>PostDetailPage</h1>

      <p>Seconds: {count}</p>

      <p>{post.author}</p>
      <p>{post.title}</p>
      <p>{post.description}</p>
      <img src={post.imageUrl} alt="" />
    </div>
  );
}

export const getServerSideProps: GetServerSideProps<Props> = async (context: GetServerSidePropsContext) => {
  context.res.setHeader('Cache-Control', 's-maxage=5,stale-while-revalidate=5');

  await new Promise((resolve) => setTimeout(resolve, 3000));

  const response = await fetch('https://js-post-api.herokuapp.com/api/posts/' + 'sktwi1cgkkuif36dj');
  const data = await response.json();

  return {
    props: {
      post: data,
    },
  };
};
