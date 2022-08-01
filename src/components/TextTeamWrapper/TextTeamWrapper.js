import PropTypes from 'prop-types';
import styled from 'styled-components';
import { size } from 'styles/variables';

const TextTeamWrapper = ({ children }) => {
  return <Div>{children}</Div>;
};

TextTeamWrapper.propTypes = {
  children: PropTypes.node,
};

export default TextTeamWrapper;

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
