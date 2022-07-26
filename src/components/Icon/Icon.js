import PropTypes from 'prop-types';
import sprite from 'assets/sprite.svg';

const Icon = ({ iconName, width, height, fill, stroke }) => {
  return (
    <svg
      className={`icon icon-${iconName}`}
      width={width}
      height={height}
      fill={fill}
      stroke={stroke}
    >
      <use xlinkHref={`${sprite}#${iconName}`}></use>
    </svg>
  );
};

Icon.defaultProps = {
  iconName: '',
  width: '20px',
  height: '20px',
  fill: '#000',
  stroke: 'inherit',
};

Icon.propTypes = {
  iconName: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  fill: PropTypes.string,
  stroke: PropTypes.string,
};

export default Icon;
