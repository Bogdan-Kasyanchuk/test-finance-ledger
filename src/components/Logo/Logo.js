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
    <A href="/" className="logo">
      <Icon iconName="logo" width="40px" height="31px" />
      {firstChildren}
      <Span>{secondChildren}</Span>
    </A>
  );
};

Logo.propTypes = {
  firstChildren: PropTypes.string,
  secondChildren: PropTypes.string,
};

export default Logo;

const A = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 32px;
  line-height: 1.32;
  color: ${accentColor};
  transition: transform ${duration} ${timing};

  ${size.tabletMin} {
    font-size: 35px;
    line-height: 1.21;
  }

  .icon {
    margin-right: 6px;

    ${size.tabletMin} {
      margin-right: 10px;
    }
  }

  :hover,
  :focus-visible {
    transform: scale(1.03);
    outline: none;
  }
`;

const Span = styled.span`
  margin-left: 6px;
  color: ${secondColor};

  ${size.tabletMin} {
    margin-left: 10px;
  }
`;
