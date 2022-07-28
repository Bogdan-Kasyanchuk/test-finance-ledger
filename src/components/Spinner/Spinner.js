import { RotatingLines } from 'react-loader-spinner';
import styled from 'styled-components';
import { accentColor } from 'styles/variables';

const Spinner = () => {
  return (
    <Div>
      <RotatingLines
        strokeColor={accentColor}
        strokeWidth="4"
        animationDuration="1"
        width="50"
      />
    </Div>
  );
};

export default Spinner;

const Div = styled.div`
  position: fixed;
  top: 50vh;
  left: 50vw;
  z-index: 2000;
  transform: translate(-50%, -50%);
`;
