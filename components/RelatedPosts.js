import React from 'react';
import MiniCardItem from './MiniCardItem';

const RelatedPosts = ({ related }) => {
  console.log('related:', related);
  return (
    <div className='pt-4 grid  md:grid-cols-2 gap-x-4 md:gap-y-6'>
      {related.map((related) => (
        <div key={related._id} className='w-full my-2 md:my-0 flex flex-col'>
          <MiniCardItem
            title={related.title}
            slug={related.slug.current}
            img={related.mainImage}
          />
        </div>
      ))}
    </div>
  );
};

export async function getStaticProps() {
  const posts = await getAllPosts();
  return {
    props: {
      posts,
    },
  };
}

export default RelatedPosts;
