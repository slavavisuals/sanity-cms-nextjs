import Link from 'next/link';
export default function CardItem({
  title,
  slug,
  excerpt,
  date,
  img,
  authorImage,
  authorName,
}) {
  return (
    <>
      <article className='overflow-hidden rounded-lg shadow-lg'>
        <Link href={`post/${slug}`}>
          <a>
            <img alt='Placeholder' className='block h-auto w-full' src={img} />
          </a>
        </Link>

        <header className='flex items-center justify-between leading-tight p-2 md:p-4'>
          <h1 className='text-lg'>
            {slug && (
              <Link href={`post/${slug}`}>
                <a className='no-underline hover:underline text-black'>
                  {title ? title : 'untitled'}
                </a>
              </Link>
            )}
          </h1>
          <p className='text-grey-darker text-sm'>{date}</p>
        </header>

        <section className='flex px-4'>{excerpt}</section>

        <footer className='flex items-center justify-between leading-none p-2 md:p-4'>
          <a
            className='flex items-center no-underline hover:underline text-black'
            href='#'
          >
            <img
              alt='Placeholder'
              className='block rounded-full w-[64px]'
              src={authorImage}
            />
            <p className='ml-2 text-sm'>{authorName}</p>
          </a>
          <a
            className='no-underline text-grey-darker hover:text-red-dark'
            href=''
          >
            <span className='hidden'>Like</span>
            <i className='fa fa-heart'></i>
          </a>
        </footer>
      </article>
    </>
  );
}
