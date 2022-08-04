import PropTypes from 'prop-types';
import styled from 'styled-components';
import { size } from 'styles/variables';

const ImageBlogWrapper = ({ maxHeightTab, maxHeightDesk, children }) => {
  return (
    <Div maxHeightTab={maxHeightTab} maxHeightDesk={maxHeightDesk}>
      {children}
    </Div>
  );
};

ImageBlogWrapper.propTypes = {
  maxHeightTab: PropTypes.string,
  maxHeightDesk: PropTypes.string,
  children: PropTypes.node,
};

export default ImageBlogWrapper;

const Div = styled.div`
  ${size.tabletMin} {
    max-height: ${({ maxHeightTab }) => (maxHeightTab ? maxHeightTab : null)};
    flex-basis: calc(368 / 768 * 100%);
  }

  ${size.desktopMin} {
    max-height: ${({ maxHeightDesk }) =>
      maxHeightDesk ? maxHeightDesk : null};
    flex-basis: calc(670 / 1360 * 100%);
  }
`;
