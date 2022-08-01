import { memo } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link as ScrollLink } from 'react-scroll';
import { useSizeHeader } from 'hooks/useSizeHeader';
import { size, secondColor, accentColor } from 'styles/variables';

const Link = ({ to, children }) => {
  const sizeHeader = useSizeHeader();

  return (
    <CustomScrollLinc to={to} smooth={true} offset={-sizeHeader}>
      {children}
    </CustomScrollLinc>
  );
};

Link.propTypes = {
  to: PropTypes.string,
  children: PropTypes.node,
};

export default memo(Link);

const CustomScrollLinc = styled(ScrollLink)`
  position: relative;
  font-size: 16px;
  line-height: 1.6;
  color: ${secondColor};

  ${size.tabletMin} {
    font-size: 18px;
    line-height: 1.56;
  }

  :hover,
  :focus-visible {
    outline: none;

    ::after {
      content: '';
      position: absolute;
      left: -6px;
      bottom: -9px;
      width: calc(100% + 12px);
      height: 2px;
      background-color: ${accentColor};

      ${size.tabletMin} {
        left: -10px;
        width: calc(100% + 20px);
      }

      ${size.desktopMin} {
        left: -20px;
        width: calc(100% + 40px);
      }
    }
  }
`;
