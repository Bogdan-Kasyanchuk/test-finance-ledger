import PropTypes from 'prop-types';
import styled from 'styled-components';
import { size } from 'styles/variables';

const TextAboutWrapper = ({ children }) => {
  return <Div>{children}</Div>;
};

TextAboutWrapper.propTypes = {
  children: PropTypes.node,
};

export default TextAboutWrapper;

const Div = styled.div`
  text-align: center;

  .paragraph,
  .sub-title,
  .paragraph-text {
    margin-bottom: 20px;

    ${size.tabletMin} {
      margin-bottom: 24px;
    }
  }
`;
