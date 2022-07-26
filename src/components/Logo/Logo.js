import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Icon from 'components/Icon/Icon';
import {
  size,
  accentColor,
  secondColor,
  duration,
  timing,
} from 'styles/variables';

const Logo = ({ firstChildren, secondChildren }) => {
  return (
    <CustomNavLink to="/" className="logo">
      <Icon iconName="logo" width="39px" height="31px" />
      {firstChildren}
      <Span>{secondChildren}</Span>
    </CustomNavLink>
  );
};

Logo.propTypes = {
  firstChildren: PropTypes.string,
  secondChildren: PropTypes.string,
};

export default Logo;

const CustomNavLink = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 32px;
  font-weight: 400;
  line-height: 1.32;
  color: ${accentColor};
  transition: transform ${duration} ${timing};

  .icon {
    margin-right: 6px;
    fill: currentColor;

    ${size.tabletMin} {
      margin-right: 10px;
    }
  }

  ${size.tabletMin} {
    font-size: 35px;
    line-height: 1.21;
  }

  :hover,
  :focus {
    transform: scale(1.05);
  }
`;

const Span = styled.span`
  margin-left: 6px;
  color: ${secondColor};

  ${size.tabletMin} {
    margin-left: 10px;
  }
`;
