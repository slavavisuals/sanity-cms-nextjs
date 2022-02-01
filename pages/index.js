import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { getAllPosts } from '../lib/api';
import BlockContent from '@sanity/block-content-to-react';
import Navbar from 'components/Navbar';
import Author from 'components/Author';
import CardItem from 'components/CardItem';
import CardList from 'components/CardList';

export default function Home({ posts }) {
  //console.log(posts);
  //debugger;
  return (
    <>
      <div className='container'>
        {/* <Author /> */}
        <CardList posts={posts} />

        {/* <ul>
          {posts.map((post) => (
            <li className='text-3xl font-bold' key={post.slug}>
              {post.title}
            </li>
          ))}
        </ul> */}
      </div>
    </>
  );
}

// it will be called during build time
// it will be called on server and provides props to the page
// it will create static pages
export async function getStaticProps() {
  const posts = await getAllPosts();
  return {
    props: {
      posts,
    },
  };
}
