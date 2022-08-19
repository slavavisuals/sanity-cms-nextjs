import CardItem from './CardItem';

export default function CardList({ posts, filterState }) {
  //console.log(posts);
  //console.log('I am card list', posts);

  const viewStyles =
    filterState.view.list === 0
      ? 'md:grid-cols-3 lg:grid-cols-3'
      : 'md:grid-cols-1 lg:grid-cols-1';

  return (
    <>
      <div className={`grid ${viewStyles} gap-y-5 md:justify-items-center `}>
        {posts.map((post) => (
          <div key={post.slug} className='w-full md:w-11/12 lg:my-4 lg:px-4'>
            <CardItem
              title={post.title}
              slug={post.slug}
              // excerpt={post.excerpt}
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
    </>
  );
}
