import PropTypes from 'prop-types';
import styled from 'styled-components';
import Icon from 'components/Icon/Icon';
import {
  size,
  secondColor,
  accentColor,
  border,
  borderRadius,
  duration,
  timing,
} from 'styles/variables';

const BtnLinkIconText = ({ iconName, children, home }) => {
  return (
    <A href="#" home={home}>
      <Icon iconName={iconName} />
      {children}
    </A>
  );
};

BtnLinkIconText.propTypes = {
  iconName: PropTypes.string,
  children: PropTypes.node,
  home: PropTypes.bool,
};

export default BtnLinkIconText;

const A = styled.a`
  display: inline-block;
  padding: 10px 30px;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.6;
  color: ${({ home }) => (home ? secondColor : null)};
  border: ${({ home }) => (home ? null : border)};
  border-radius: ${borderRadius};
  background-color: ${({ home }) => (home ? accentColor : null)};
  transition: ${({ home }) =>
    home
      ? `background-color ${duration} ${timing}`
      : `color ${duration} ${timing}, background-color ${duration} ${timing}`};

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
    color: ${({ home }) => (home ? null : accentColor)};
    background-color: ${({ home }) =>
      home ? 'rgba(40, 167, 69, 0.9)' : secondColor};
  }
`;
