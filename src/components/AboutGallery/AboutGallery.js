import styled from 'styled-components';
import Image from 'components/Image/Image';
import GalleryList from 'components/GalleryList/GalleryList';
import SocialLinkList from 'components/SocialLinkList/SocialLinkList';
import { images } from 'helpers/imageImport/aboutGallery/allImage';
import { size, secondColor, duration, timing } from 'styles/variables';

const AboutGallery = () => {
  return (
    <GalleryList>
      {images.map(el => (
        <Li key={el.name}>
          <ImageWrapper>
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
              alt={el.name}
            />
            <SocialLinkList />
          </ImageWrapper>
          <TextWrapper>
            <H3>{el.name}</H3>
            <P>{el.position}</P>
          </TextWrapper>
        </Li>
      ))}
    </GalleryList>
  );
};

export default AboutGallery;

const Li = styled.li`
  ${size.mobileMax} {
    :not(:last-child) {
      margin-bottom: 20px;
    }
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  margin-bottom: 16px;
  transition: transform ${duration} ${timing}, box-shadow ${duration} ${timing};

  ::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(rgb(0, 0, 0), rgb(0, 0, 0));
    opacity: 0;
    transition: opacity ${duration} ${timing};
  }

  .social-list {
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: 1;
    opacity: 0;
    margin-bottom: 0;
    transform: translate(-50%, -50%);
    transition: opacity ${duration} ${timing};
  }

  :hover,
  :focus-visible {
    box-shadow: 2px 2px 12px 2px rgba(0, 0, 0, 0.4);
    transform: scale(1.03);
    cursor: pointer;

    ::after {
      opacity: 0.6;
    }

    .social-list {
      opacity: 1;
    }

    .social-link {
      color: ${secondColor};
      transition: opacity ${duration} ${timing};

      :hover,
      :focus-visible {
        opacity: 0.8;
      }
    }
  }
`;

const TextWrapper = styled.div`
  text-align: center;
`;

const H3 = styled.h3`
  margin-bottom: 12px;
  font-size: 23px;
  font-weight: 400;
  line-height: 1.25;
`;

const P = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 1.6;
`;