import PropTypes from 'prop-types';
import styled from 'styled-components';
import { size } from 'styles/variables';

const ImageBlogWrapper = ({ children }) => {
  return <Div>{children}</Div>;
};

ImageBlogWrapper.propTypes = {
  children: PropTypes.node,
};

export default ImageBlogWrapper;

const Div = styled.div`
  ${size.tabletMin} {
    flex-basis: calc(368 / 768 * 100%);
  }

  ${size.desktopMin} {
    flex-basis: calc(670 / 1360 * 100%);
  }
`;
