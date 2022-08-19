import React, { useState } from 'react';
import ImageGrid from '../components/ImageGrid';
import Modal from '../components/Modal';

const gallery = () => {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <div className='App'>
      <ImageGrid setSelectedImg={setSelectedImg} />
      {selectedImg && (
        <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
      )}
    </div>
  );
};

export default gallery;
