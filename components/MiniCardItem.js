import Link from 'next/link';
import { urlFor } from 'lib/api';

export default function MiniCardItem({ title, slug, img }) {
  return (
    <>
      <article className='flex rounded-lg shadow-xl border-t-[1px]  lg:shadow-zinc-300 lg:hover:ease-in lg:transition lg:duration-200 lg:ease-in-out lg:hover:shadow-zinc-400 p-3'>
        <div>
          <Link href={`${slug}`}>
            <a className=''>
              <img
                src={urlFor(img).height(150).width(150)}
                alt=''
                className='w-[150px] rounded-xl'
              />
            </a>
          </Link>
        </div>
        <div className='flex flex-col pl-3'>
          <h3 className='py-1 px-1 bg-slate-300 rounded-xl text-center mb-3'>
            portrait
          </h3>
          <h4 className='text-3xl'>
            {slug && (
              <Link href={`${slug}`}>
                <a className='no-underline hover:underline text-black'>
                  {title ? title : 'untitled'}
                </a>
              </Link>
            )}
          </h4>
        </div>
      </article>
    </>
  );
}
