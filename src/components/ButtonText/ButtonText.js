import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  size,
  secondColor,
  accentColor,
  borderRadius,
  duration,
  timing,
} from 'styles/variables';

const ButtonText = ({ type, children }) => {
  return <Button type={type}>{children}</Button>;
};

ButtonText.defaultProps = {
  type: 'button',
};

ButtonText.propTypes = {
  type: PropTypes.string,
  children: PropTypes.node,
};

export default ButtonText;

const Button = styled.button`
  display: block;
  width: 100%;
  padding: 10px;
  font-size: 16px;
  line-height: 1.37;
  color: ${secondColor};
  border-radius: ${borderRadius};
  background-color: ${accentColor};
  transition: background-color ${duration} ${timing};

  ${size.tabletMin} {
    padding: 8px;
    font-size: 18px;
    line-height: 1.44;
  }

  :hover,
  :focus-visible {
    background-color: rgba(40, 167, 69, 0.9);
    outline: none;
  }
`;
