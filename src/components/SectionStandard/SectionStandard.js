import PropTypes from 'prop-types';
import styled from 'styled-components';
import { size } from 'styles/variables';

const SectionStandard = ({ id, children }) => {
  return <Section id={id}>{children}</Section>;
};

SectionStandard.propTypes = {
  id: PropTypes.string,
  children: PropTypes.node,
};

export default SectionStandard;

const Section = styled.section`
  padding-top: 40px;
  padding-bottom: 40px;

  ${size.desktopMin} {
    padding-top: 80px;
    padding-bottom: 80px;
  }
`;
