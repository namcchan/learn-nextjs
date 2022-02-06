import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import React from 'react';

interface PostProps {
  post: any;
}

export default function PostDetailPage({ post }: PostProps) {
  return (
    <div>
      <h1>PostDetailPage</h1>
      <p>{post.author}</p>
      <p>{post.title}</p>
      <p>{post.description}</p>
      <img src={post.imageUrl} alt="" />
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  console.log('GET STATIC PATHS');

  const response = await fetch('https://js-post-api.herokuapp.com/api/posts?_page=1');
  const data = await response.json();

  return {
    paths: data.data.map((post: any) => ({ params: { postId: post.id } })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<PostProps> = async (context: GetStaticPropsContext) => {
  const postId = context.params?.postId;

  if (!postId) {
    return {
      notFound: true,
    };
  }

  const response = await fetch('https://js-post-api.herokuapp.com/api/posts/' + postId);
  const data = await response.json();

  return {
    props: {
      post: data,
    },
  };
};
