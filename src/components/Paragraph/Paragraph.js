import PropTypes from 'prop-types';
import styled from 'styled-components';
import { size } from 'styles/variables';

const Paragraph = ({ children }) => {
  return <P className="paragraph">{children}</P>;
};

Paragraph.propTypes = {
  children: PropTypes.node,
};

export default Paragraph;

const P = styled.p`
  font-size: 18px;
  font-weight: 400;
  line-height: 1.66;

  ${size.tabletMin} {
    font-size: 20px;
    line-height: 1.65;
  }
`;
