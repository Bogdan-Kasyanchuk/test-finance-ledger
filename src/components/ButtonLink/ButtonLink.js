import PropTypes from 'prop-types';
import styled from 'styled-components';
import Icon from 'components/Icon/Icon';
import {
  size,
  secondColor,
  accentColor,
  borderRadius,
  duration,
  timing,
} from 'styles/variables';

const ButtonIconText = ({ iconName, children }) => {
  return (
    <A href="#">
      <Icon iconName={iconName} />
      {children}
    </A>
  );
};

ButtonIconText.propTypes = {
  iconName: PropTypes.string,
  children: PropTypes.node,
};

export default ButtonIconText;

const A = styled.a`
  display: inline-block;
  padding: 10px 30px;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.6;
  color: ${secondColor};
  border-radius: ${borderRadius};
  background-color: ${accentColor};
  transition: background-color ${duration} ${timing};

  ${size.tabletMin} {
    font-size: 18px;
    line-height: 1.56;
  }

  .icon {
    margin-right: 4px;
    width: 9px;
    height: 15px;
    vertical-align: middle;
    fill: currentColor;
  }

  :hover,
  :focus-visible {
    background-color: rgba(40, 167, 69, 0.9);
  }
`;
