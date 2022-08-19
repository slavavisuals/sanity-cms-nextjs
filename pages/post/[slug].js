import PageLayout from 'components/Layout';
import { getPostBySlug, getAllPosts } from 'lib/api';
import { urlFor } from 'lib/api';
import Image from 'next/image';
import { PortableText } from '@portabletext/react';
import PostContent from 'components/PostContent';
import RelatedPosts from 'components/RelatedPosts';

import ImageGrid from 'components/ImageGrid';

let images = [
  {
    url: 'http://placeimg.com/640/360/any',
    title: 'image title 1',
  },
  {
    url: 'http://placeimg.com/640/360/animals',
    title: 'image title 2',
  },
];

const PostDetail = ({ post }) => {
  console.log('post', post);

  return (
    <>
      <main className='flex flex-col xl:w-[1140px] mx-auto px-4'>
        <div className='py-4'></div>
        <article className='flex flex-col rounded-2xl bg-[#fff] pb-8 shadow-md'>
          {/* image wrapper */}
          <div className='image-wrapper min-h-[18rem] relative overflow-hidden md:h-[400px]'>
            <img
              src={urlFor(post.mainImage)
                .minHeight(300)
                .width(1140)
                .fit('max')
                .url()}
              alt=''
              className='rounded-t-2xl  absolute object-cover '
            />
          </div>

          <div className='article-text px-8'>
            <header className='py-8'>
              <h1 className='text-4xl pb-3 font-bold text-[#2d3748]'>
                {post.title}
              </h1>
              <div className='flex-col flex  text-xl'>
                {/* <div className='font-bold'>by Author Name</div> */}
                {/* <div>Published in Travel</div> */}
                <div>April 11, 2021</div>
                {/* <div className='text-[#f56565] font-bold'>1 min read</div> */}
              </div>
            </header>

            <div>bla bla123</div>

            <PostContent post={post.content} />
          </div>
        </article>

        {/* related posts content */}
        {post.relatedPosts && <RelatedPosts related={post.relatedPosts} />}
      </main>
    </>
  );
};

export async function getStaticProps({ params }) {
  const post = await getPostBySlug(params.slug);
  return {
    props: { post },
  };
}

export async function getStaticPaths() {
  const posts = await getAllPosts();
  //iterating over all paths
  const paths = posts?.map((post) => ({ params: { slug: post.slug } }));
  return {
    paths,
    fallback: false,
  };
}

export default PostDetail;
