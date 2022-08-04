import PropTypes from 'prop-types';
import styled from 'styled-components';

const SubTitleSection = ({ children }) => {
  return <H2 className="sub-title">{children}</H2>;
};

SubTitleSection.propTypes = {
  children: PropTypes.node,
};

export default SubTitleSection;

const H2 = styled.h2`
  font-size: 38px;
  font-weight: 300;
  line-height: 1.26;
`;
