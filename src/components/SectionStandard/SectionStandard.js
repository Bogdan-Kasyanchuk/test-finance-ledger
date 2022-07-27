import PropTypes from 'prop-types';
import styled from 'styled-components';
import { size } from 'styles/variables';

const SectionStandard = ({ children }) => {
  return <Section>{children}</Section>;
};

SectionStandard.propTypes = {
  children: PropTypes.node,
};

export default SectionStandard;

const Section = styled.section`
  padding-top: 160px;
  padding-bottom: 40px;

  ${size.tabletMin} {
    padding-top: 122px;
  }

  ${size.desktopMin} {
    padding-top: 150px;
    padding-bottom: 80px;
  }
`;
