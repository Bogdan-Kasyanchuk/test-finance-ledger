import { useRef, useEffect } from 'react';
import styled from 'styled-components';
import { useInViewport } from 'react-in-viewport';
import { headerStyle } from 'service/setStyle';
import { size } from 'styles/variables';

const Watcher = () => {
  const myRef = useRef();
  const { inViewport } = useInViewport(myRef);

  useEffect(() => {
    !inViewport
      ? headerStyle('rgba(51, 51, 51, 0.8)')
      : headerStyle('rgba(51, 51, 51, 0)');
  }, [inViewport]);

  return <Div ref={myRef}></Div>;
};

export default Watcher;

const Div = styled.div`
  height: 120px;
  position: absolute;

  ${size.tabletMin} {
    height: 82px;
  }

  ${size.desktopMin} {
    height: 70px;
  }
`;
