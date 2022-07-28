import PropTypes from 'prop-types';
import styled from 'styled-components';
import { size } from 'styles/variables';

const SectionBlog = ({ children }) => {
  return <Section>{children}</Section>;
};

SectionBlog.propTypes = {
  children: PropTypes.node,
};

export default SectionBlog;

const Section = styled.section`
  ${size.tabletMin} {
    display: flex;
  }
`;
