import PropTypes from 'prop-types';

const Image = ({
  deskWebp,
  deskWebp_2x,
  desk,
  desk_2x,
  tabWebp,
  tabWebp_2x,
  tab,
  tab_2x,
  mobWebp,
  mobWebp_2x,
  mob,
  mob_2x,
  src,
  alt,
}) => {
  return (
    <picture>
      <source
        srcSet={`${deskWebp} 1x, ${deskWebp_2x} 2x`}
        media="(min-width: 1024px)"
        type="image/webp"
      />
      <source
        srcSet={`${desk} 1x, ${desk_2x} 2x`}
        media="(min-width: 1024px)"
      />
      <source
        srcSet={`${tabWebp} 1x, ${tabWebp_2x} 2x`}
        media="(min-width: 768px)"
        type="image/webp"
      />
      <source srcSet={`${tab} 1x, ${tab_2x} 2x`} media="(min-width: 768px)" />
      <source
        srcSet={`${mobWebp} 1x, ${mobWebp_2x} 2x`}
        media="(max-width: 767px)"
        type="image/webp"
      />
      <source srcSet={`${mob} 1x, ${mob_2x} 2x`} media="(max-width: 767px)" />
      <img src={src} alt={alt} />
    </picture>
  );
};

Image.propTypes = {
  deskWebp: PropTypes.string.isRequired,
  deskWebp_2x: PropTypes.string.isRequired,
  desk: PropTypes.string.isRequired,
  desk_2x: PropTypes.string.isRequired,
  tabWebp: PropTypes.string.isRequired,
  tabWebp_2x: PropTypes.string.isRequired,
  tab: PropTypes.string.isRequired,
  tab_2x: PropTypes.string.isRequired,
  mobWebp: PropTypes.string.isRequired,
  mobWebp_2x: PropTypes.string.isRequired,
  mob: PropTypes.string.isRequired,
  mob_2x: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default Image;
