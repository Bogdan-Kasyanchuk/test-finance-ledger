import PropTypes from 'prop-types';
import styled from 'styled-components';

const SubTitle = ({ children }) => {
  return <H2 className="sub-title">{children}</H2>;
};

SubTitle.propTypes = {
  children: PropTypes.node,
};

export default SubTitle;

const H2 = styled.h2`
  font-size: 38px;
  font-weight: 300;
  line-height: 1.26;
`;
