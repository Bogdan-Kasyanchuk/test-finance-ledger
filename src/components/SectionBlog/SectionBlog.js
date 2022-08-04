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
  margin-left: auto;
  margin-right: auto;
  max-width: 1650px;

  ${size.tabletMin} {
    display: flex;
  }
`;
