import PropTypes from 'prop-types';
import styled from 'styled-components';
import { size, thirdColor } from 'styles/variables';

const Title = ({ children }) => {
  return <H1 className="title">{children}</H1>;
};

Title.propTypes = {
  children: PropTypes.node,
};

export default Title;

const H1 = styled.h1`
  font-size: 52px;
  font-weight: 300;
  line-height: 1.27;
  color: ${thirdColor};

  ${size.tabletMin} {
    font-size: 55px;
    line-height: 1.2;
  }
`;
