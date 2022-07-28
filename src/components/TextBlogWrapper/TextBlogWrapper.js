import PropTypes from 'prop-types';
import styled from 'styled-components';
import { size, secondColor, accentColor, bgColor } from 'styles/variables';

const TextBlogWrapper = ({ children, blog }) => {
  return <Div blog={blog}>{children}</Div>;
};

TextBlogWrapper.propTypes = {
  children: PropTypes.node,
  blog: PropTypes.bool,
};

export default TextBlogWrapper;

const Div = styled.div`
  background-color: ${({ blog }) => (blog ? bgColor : accentColor)};
  padding: 40px 20px;
  color: ${secondColor};

  ${size.tabletMin} {
    flex-basis: calc(400 / 768 * 100%);
    order: ${({ blog }) => (blog ? -1 : null)};
    padding-left: 32px;
    padding-right: 32px;
  }

  ${size.desktopMin} {
    flex-basis: calc(690 / 1360 * 100%);
    padding: 80px 20px;
  }

  .paragraph {
    margin-bottom: 8px;
  }

  .sub-title,
  .paragraph-text {
    margin-bottom: 24px;
  }
`;
