import Link from 'next/link';
import { urlFor } from 'lib/api';

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
      <article className='flex flex-col overflow-hidden rounded-lg shadow-lg'>
        <Link href={`post/${slug}`}>
          <a className='block   bg-yellow-50'>
            <img
              src={urlFor(img).height(300)}
              alt=''
              className='object-cover object-center w-full h-[200px] md:h-[150px] lg:h-[170px] xl:h-[250px] '
            />
          </a>
        </Link>

        <header className='flex flex-col items-start justify-between leading-tight p-2'>
          <p className='text-grey-darker text-xs'>{date}</p>
          <h1 className='text-sm'>
            {slug && (
              <Link href={`post/${slug}`}>
                <a className='no-underline hover:underline text-black'>
                  {title ? title : 'untitled'}
                </a>
              </Link>
            )}
          </h1>
        </header>

        {/* <section className='flex px-4'>{excerpt}</section> */}

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
