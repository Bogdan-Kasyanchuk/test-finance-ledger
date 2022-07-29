import GalleryList from 'components/GalleryList/GalleryList';
import AboutGalleryItem from 'components/AboutGalleryItem/AboutGalleryItem';
import { images } from 'service/imageImport/aboutGallery/allImage';

const AboutGallery = () => {
  return (
    <GalleryList>
      {images.map(el => (
        <AboutGalleryItem key={el.name} el={el} />
      ))}
    </GalleryList>
  );
};

export default AboutGallery;
