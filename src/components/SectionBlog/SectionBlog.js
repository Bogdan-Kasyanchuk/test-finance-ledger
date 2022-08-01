import PropTypes from 'prop-types';
import styled from 'styled-components';
import { size } from 'styles/variables';

const SectionBlog = ({ id, children }) => {
  return <Section id={id}>{children}</Section>;
};

SectionBlog.propTypes = {
  id: PropTypes.string,
  children: PropTypes.node,
};

export default SectionBlog;

const Section = styled.section`
  ${size.tabletMin} {
    display: flex;
  }
`;
