import React from 'react';

//console.log(images);

const ImageGrid = ({ setSelectedImg }) => {
  let images = [
    {
      url: 'http://placeimg.com/320/340/any',
      title: 'image title 1',
    },
    {
      url: 'http://placeimg.com/320/340/animals',
      title: 'image title 2',
    },
  ];

  //console.log(images);
  return (
    <div className='img-grid'>
      {images &&
        images.map((img) => (
          <div className='img-wrap' onClick={() => setSelectedImg(img.url)}>
            <img src={img.url} alt='ff' />
          </div>
        ))}
    </div>
  );
};

export default ImageGrid;
