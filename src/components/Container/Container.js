import PropTypes from 'prop-types';
import styled from 'styled-components';
import { size } from 'styles/variables';

const Container = ({ children }) => {
  return <Div>{children}</Div>;
};

Container.propTypes = {
  children: PropTypes.node,
};

export default Container;

const Div = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  padding-left: 20px;
  padding-right: 20px;

  ${size.tabletMin} {
    min-width: 768px;
    padding-left: 32px;
    padding-right: 32px;
  }

  ${size.desktopMin} {
    width: 1360px;
    padding-left: 28px;
    padding-right: 28px;
  }
`;
