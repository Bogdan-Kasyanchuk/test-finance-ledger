import PropTypes from 'prop-types';
import styled from 'styled-components';
import sprite from 'assets/sprite.svg';

const Icon = ({ iconName, width, height, fill, stroke }) => {
  return (
    <Svg
      className={`icon icon-${iconName}`}
      width={width}
      height={height}
      fill={fill}
      stroke={stroke}
    >
      <use xlinkHref={`${sprite}#${iconName}`}></use>
    </Svg>
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

const Svg = styled.svg`
  fill: currentColor;
`;
