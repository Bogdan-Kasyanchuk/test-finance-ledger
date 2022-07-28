import PropTypes from 'prop-types';
import styled from 'styled-components';
import { size } from 'styles/variables';

const ParagraphText = ({ children }) => {
  return <P className="paragraph-text">{children}</P>;
};

ParagraphText.propTypes = {
  children: PropTypes.node,
};

export default ParagraphText;

const P = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 1.6;

  ${size.tabletMin} {
    font-size: 18px;
    line-height: 1.56;
  }
`;
