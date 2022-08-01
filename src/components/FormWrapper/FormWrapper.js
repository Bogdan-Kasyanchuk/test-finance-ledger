import PropTypes from 'prop-types';
import styled from 'styled-components';
import { size, bgColorForm } from 'styles/variables';

const FormWrapper = ({ children }) => {
  return <Div>{children}</Div>;
};

FormWrapper.propTypes = {
  children: PropTypes.node,
};

export default FormWrapper;

const Div = styled.div`
  padding: 40px 20px;
  background-color: ${bgColorForm};

  ${size.tabletMin} {
    flex-basis: calc(400 / 768 * 100%);
    padding-left: 32px;
    padding-right: 32px;
  }

  ${size.desktopMin} {
    flex-basis: calc(690 / 1360 * 100%);
    padding: 80px 20px;
  }

  .sub-title {
    margin-bottom: 32px;
  }
`;
