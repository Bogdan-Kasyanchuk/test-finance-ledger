import { useState } from 'react';
import styled from 'styled-components';
import Lightbox from 'react-awesome-lightbox';
import 'react-awesome-lightbox/build/style.css';
import Image from 'components/Image/Image';
import * as imgMeeting from 'components/CasesGallery/imageMeetingImport';
import * as imgManWorking from 'components/CasesGallery/imageManWorkingImport';
import * as imgHandshake from 'components/CasesGallery/imageHandshakeImport';
import * as imgHands from 'components/CasesGallery/imageHandsImport';
import * as imgWomanWorking from 'components/CasesGallery/imageWomanWorkingImport';
import * as imgBuildings from 'components/CasesGallery/imageBuildingsImport';
import { size, duration, timing } from 'styles/variables';

const images = [
  { url: imgMeeting, urlModal: imgMeeting.meeting, title: 'Meeting' },
  {
    url: imgManWorking,
    urlModal: imgManWorking.manWorking,
    title: 'Man working',
  },
  { url: imgHandshake, urlModal: imgHandshake.handshake, title: 'Handshake' },
  { url: imgHands, urlModal: imgHands.hands, title: 'Hands' },
  {
    url: imgWomanWorking,
    urlModal: imgWomanWorking.womanWorking,
    title: 'Woman working',
  },
  { url: imgBuildings, urlModal: imgBuildings.buildings, title: 'Buildings' },
];

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
      <Ul onClick={openModal}>
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
              width={421}
              height={282}
              alt={el.title}
            />
          </Li>
        ))}
      </Ul>
      {isOpen && (
        <Lightbox
          allowZoom={false}
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

const Ul = styled.ul`
  ${size.tabletMin} {
    display: grid;
    grid-template-columns: repeat(auto-fill, calc((100% - 2 * 18px) / 3));
    justify-content: space-between;
    grid-row-gap: 18px;
  }

  ${size.desktopMin} {
    grid-template-columns: repeat(auto-fill, calc((100% - 2 * 20px) / 3));
    grid-row-gap: 24px;
  }
`;
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
