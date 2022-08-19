import { getDomainLocale } from 'next/dist/shared/lib/router/router';

export default function Author() {
  return (
    <>
      <div className='flex flex-col'>
        <img
          className='w-max rounded-lg'
          src='https://picsum.photos/seed/picsum/300/300'
          alt='img'
        />
        <div className=''>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus, corrupti sed, laboriosam eligendi dignissimos tempora
          architecto accusamus ipsam velit numquam fugit expedita ullam itaque
          ea totam voluptatum cupiditate animi aliquam.
        </div>
      </div>
    </>
  );
}
