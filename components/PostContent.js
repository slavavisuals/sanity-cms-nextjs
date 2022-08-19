import { PortableText } from '@portabletext/react';
import Image from 'next/image';
import HightlightCode from 'components/HighlightCode';
import { urlFor } from 'lib/api';

import imageData from '../pages/api/images.json';
import { data } from 'autoprefixer';
import React, { useState } from 'react';

import Modal from 'components/Modal';

//modal gallery
import ImageGrid from '../components/ImageGrid';

const CodeBlock = ({ code }) => {
  return (
    <HightlightCode language={code.language}>
      {code.code}
      <div className='code-filename'>{code.filename}</div>
    </HightlightCode>

    // <pre data-language={code.language}>
    //   <code>{code.code}</code>
    //   <p>{code.filename}</p>
    // </pre>
  );
};

//image grid
// const InlineImage = ({ node: { asset, alt } }) => {
//   return (
//     <div className='w-10/12 mx-auto py-8 img-wrap'>
//       <img src={urlFor(asset).height(400).fit('max').url()} alt='my image' />
//     </div>
//   );
// };

const InlineImageGrid = ({ node: { asset, alt } }) => {
  const [selectedImg, setSelectedImg] = useState(null);
  console.log(selectedImg);

  return (
    <div className='flex'>
      <div className='img-wrap1 w-1/2' onClick={() => setSelectedImg(asset)}>
        <img src={asset} alt='ff' />
      </div>
      {selectedImg && (
        <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
      )}
    </div>
  );
};

const components = {
  types: {
    //image: ({ value }) => <InlineImage node={value} />,
    image: ({ value }) => (
      <div className='img-grid'>
        <InlineImageGrid node={value} />
      </div>
    ),
    code: ({ value }) => <CodeBlock code={value} />,
  },

  block: {
    normal: ({ children }) => (
      <p className='leading-relaxed text-2xl normal-paragraph'>{children}</p>
    ),
    h1: ({ children }) => <h1 className='h1-heading'>{children}</h1>,
    h2: ({ children }) => <h2 className='h2-heading'>{children}</h2>,
    h3: ({ children }) => <h3 className='h3-heading'>{children}</h3>,
    h4: ({ children }) => <h4 className=' h4-heading'>{children}</h4>,
  },
  marks: {
    link: ({ value, children }) => {
      const target = (value?.href || '').startsWith('http')
        ? '_blank'
        : undefined;
      return (
        <a
          className='my-link'
          href={value?.href}
          target={target}
          rel={target === '_blank' && 'noindex nofollow'}
        >
          {children}
        </a>
      );
    },
  },
};

const PostContent = ({ post }) => {
  return (
    <>
      <PortableText value={post} components={components} />
    </>
  );
};

export default PostContent;
