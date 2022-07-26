import PropTypes from 'prop-types';
import styled from 'styled-components';

const Section = ({ children }) => {
  return <SectionTag>{children}</SectionTag>;
};

Section.propTypes = {
  children: PropTypes.node,
};

export default Section;

const SectionTag = styled.section``;
