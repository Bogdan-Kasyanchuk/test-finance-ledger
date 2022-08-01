import { useRef } from 'react';
import styled from 'styled-components';
import { useInViewport } from 'react-in-viewport';
import Container from 'components/Container/Container';
import Logo from 'components/Logo/Logo';
import Menu from 'components/Menu/Menu';
import { size, duration, timing } from 'styles/variables';

const Header = () => {
  const myRef = useRef();
  const { inViewport, leaveCount } = useInViewport(myRef);

  return (
    <>
      <HeaderTag inViewport={inViewport} leaveCount={leaveCount}>
        <Container>
          <Nav>
            <Logo firstChildren="Finance" secondChildren="Ledger" />
            <Menu />
          </Nav>
        </Container>
      </HeaderTag>
      <Watcher ref={myRef} />
    </>
  );
};

export default Header;

const HeaderTag = styled.header`
  position: fixed;
  top: 0;
  z-index: 1000;
  width: 100%;
  max-width: 1360px;
  padding-top: 20px;
  padding-bottom: 20px;
  background-color: ${({ inViewport, leaveCount }) =>
    !inViewport && leaveCount
      ? 'rgba(51, 51, 51, 0.8)'
      : 'rgba(51, 51, 51, 0)'};
  transition: background-color ${duration} ${timing};

  ${size.desktopMin} {
    padding-top: 14px;
    padding-bottom: 14px;
  }
`;

const Watcher = styled.div`
  height: 120px;
  position: absolute;

  ${size.tabletMin} {
    height: 82px;
  }

  ${size.desktopMin} {
    height: 70px;
  }
`;

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;

  ${size.mobileMax} {
    flex-wrap: wrap;
    margin-left: auto;
    margin-right: auto;
    max-width: 280px;
  }

  ${size.tabletMin} {
    justify-content: space-between;
  }

  .logo {
    ${size.mobileMax} {
      margin-bottom: 12px;
    }
  }
`;
