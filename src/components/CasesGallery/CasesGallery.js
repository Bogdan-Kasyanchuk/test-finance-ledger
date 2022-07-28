import { useState } from 'react';
import styled from 'styled-components';
import Lightbox from 'react-awesome-lightbox';
import 'react-awesome-lightbox/build/style.css';
import GalleryList from 'components/GalleryList/GalleryList';
import Image from 'components/Image/Image';
import { images } from 'service/imageImport/casesGallery/allImage';
import { size, duration, timing } from 'styles/variables';

const CasesGallery = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const openModal = ({ target }) => {
    if (target.nodeName !== 'IMG') {
      return;
    }
    setIndex(images.findIndex(el => el.title === target.alt));
    setIsOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsOpen(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <>
      <GalleryList cases openModal={openModal}>
        {images.map(el => (
          <Li key={el.title}>
            <Image
              deskWebp={el.url.deskWebp}
              deskWebp_2x={el.url.deskWebp_2x}
              desk={el.url.desk}
              desk_2x={el.url.desk_2x}
              tabWebp={el.url.tabWebp}
              tabWebp_2x={el.url.tabWebp_2x}
              tab={el.url.tab}
              tab_2x={el.url.tab_2x}
              mobWebp={el.url.mobWebp}
              mobWebp_2x={el.url.mobWebp_2x}
              mob={el.url.mob}
              mob_2x={el.url.mob_2x}
              src={el.url.mob}
              alt={el.title}
            />
          </Li>
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

const Li = styled.li`
  transition: opacity ${duration} ${timing};

  ${size.mobileMax} {
    :not(:last-child) {
      margin-bottom: 8px;
    }
  }

  :hover,
  :focus-visible {
    opacity: 0.8;
    cursor: pointer;
  }
`;
