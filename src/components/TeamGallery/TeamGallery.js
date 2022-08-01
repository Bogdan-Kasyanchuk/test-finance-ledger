import GalleryList from 'components/GalleryList/GalleryList';
import TeamGalleryItem from 'components/TeamGalleryItem/TeamGalleryItem';
import { images } from 'service/imageImport/aboutGallery/allImage';

const TeamGallery = () => {
  return (
    <GalleryList>
      {images.map(el => (
        <TeamGalleryItem key={el.name} el={el} />
      ))}
    </GalleryList>
  );
};

export default TeamGallery;
