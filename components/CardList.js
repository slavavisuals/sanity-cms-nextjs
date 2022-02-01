import CardItem from './CardItem';

export default function CardList({ posts }) {
  //console.log(posts);
  //console.log('I am card list', posts);
  return (
    <>
      <div className='flex flex-col md:flex-row -mx-1 lg:-mx-4'>
        {posts.map((post) => (
          <div
            key={post.slug}
            className='my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3'
          >
            <CardItem
              title={post.title}
              slug={post.slug}
              excerpt={post.excerpt}
              date={post.publishedAt}
              img={post.mainImage}
              authorImage={
                post.author?.image || 'https://via.placeholder.com/150'
              }
              authorName={post.author?.name || 'unnamed'}
            />
          </div>
        ))}
      </div>
      {/* <div className='flex flex-col md:flex-row -mx-1 lg:-mx-4'>
       

        <div className='my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3'>
          <CardItem />
        </div>
        <div className='my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3'>
          <CardItem />
        </div>
        <div className='my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3'>
          <CardItem />
        </div>
      </div> */}
    </>
  );
}
