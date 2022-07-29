import { useState } from 'react';
import Lightbox from 'react-awesome-lightbox';
import 'react-awesome-lightbox/build/style.css';
import GalleryList from 'components/GalleryList/GalleryList';
import CasesGalleryItem from 'components/CasesGalleryItem/CasesGalleryItem';
import { images } from 'service/imageImport/casesGallery/allImage';
import { bodyStyle } from 'service/setStyle';

const CasesGallery = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const openModal = ({ target }) => {
    if (target.nodeName !== 'IMG') {
      return;
    }
    setIndex(images.findIndex(el => el.title === target.alt));
    setIsOpen(true);
    bodyStyle('hidden');
  };

  const closeModal = () => {
    setIsOpen(false);
    bodyStyle('auto');
  };

  return (
    <>
      <GalleryList cases openModal={openModal}>
        {images.map(el => (
          <CasesGalleryItem key={el.title} el={el} />
        ))}
      </GalleryList>
      {isOpen && (
        <Lightbox
          allowZoom={false}
          allowRotate={false}
          startIndex={index}
          onClose={closeModal}
          images={images.map(el => {
            return { url: el.urlModal, title: el.title };
          })}
        />
      )}
    </>
  );
};

export default CasesGallery;
