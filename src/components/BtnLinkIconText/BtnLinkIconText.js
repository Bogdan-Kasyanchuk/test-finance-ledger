import PropTypes from 'prop-types';
import styled from 'styled-components';
import Icon from 'components/Icon/Icon';
import {
  size,
  secondColor,
  accentColor,
  bgColor,
  border,
  borderRadius,
  duration,
  timing,
} from 'styles/variables';

const BtnLinkIconText = ({ iconName, children, home, blog }) => {
  return (
    <A href="#" home={home} blog={blog}>
      <Icon iconName={iconName} />
      {children}
    </A>
  );
};

BtnLinkIconText.propTypes = {
  children: PropTypes.node,
  home: PropTypes.bool,
  blog: PropTypes.bool,
};

export default BtnLinkIconText;

const A = styled.a`
  display: inline-block;
  padding: 10px 30px;
  font-size: 16px;
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
    position: relative;
    top: -1px;
    margin-right: 4px;
    width: 9px;
    height: 15px;
    vertical-align: middle;
  }

  :hover,
  :focus-visible {
    color: ${({ home, blog }) => (home ? null : blog ? bgColor : accentColor)};
    background-color: ${({ home }) =>
      home ? 'rgba(40, 167, 69, 0.9)' : secondColor};
    outline: none;
  }
`;
