import PageLayout from 'components/Layout';
//import { useRouter } from 'next/router';
import { getPostBySlug, getAllPosts } from 'lib/api';

const PostDetail = ({ post }) => {
  //console.log('...Displaying page :');

  return (
    <>
      <div className='flex'>
        <img className='px-3' src='http://placekitten.com/250/350' alt='' />
        <img className='px-3' src='http://placekitten.com/250/350' alt='' />
        <img className='px-3' src='http://placekitten.com/250/350' alt='' />
      </div>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam ipsam
        fuga ullam labore vero cum modi similique ipsum deleniti provident
        earum, deserunt nulla esse sapiente tempora dolores sunt eligendi?
        Quaerat.
      </div>
      <h1>Hello Detail Page - {post.slug} </h1>
    </>
  );
};

export async function getStaticProps({ params }) {
  //console.log('...Fetching post by:', params.slug);
  const post = await getPostBySlug(params.slug);
  return {
    props: { post },
  };
}

export async function getStaticPaths() {
  //console.log('...Getting paths : ');
  const posts = await getAllPosts();
  //iterating over all paths
  const paths = posts?.map((post) => ({ params: { slug: post.slug } }));
  return {
    paths,
    fallback: false,
  };
}

export default PostDetail;
