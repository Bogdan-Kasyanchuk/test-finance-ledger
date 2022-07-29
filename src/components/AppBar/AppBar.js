import styled from 'styled-components';
import Container from 'components/Container/Container';
import Logo from 'components/Logo/Logo';
import Navigation from 'components/Navigation/Navigation';
import { size, duration, timing } from 'styles/variables';

const AppBar = () => {
  return (
    <Header>
      <Container>
        <Nav>
          <Logo firstChildren="Finance" secondChildren="Ledger" />
          <Navigation />
        </Nav>
      </Container>
    </Header>
  );
};

export default AppBar;

const Header = styled.header`
  position: fixed;
  top: 0;
  z-index: 1000;
  width: 100%;
  max-width: 1360px;
  padding-top: 20px;
  padding-bottom: 20px;
  transition: background-color ${duration} ${timing};

  ${size.desktopMin} {
    padding-top: 14px;
    padding-bottom: 14px;
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
