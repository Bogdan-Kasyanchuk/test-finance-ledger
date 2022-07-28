import styled from 'styled-components';
import Logo from 'components/Logo/Logo';
import Navigation from 'components/Navigation/Navigation';
import Container from 'components/Container/Container';
import { size } from 'styles/variables';

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
  opacity: 0.8;
  background-color: #333;
  position: fixed;
  top: 0;
  z-index: 1000;
  width: 100%;
  max-width: 1360px;
  padding-top: 20px;
  padding-bottom: 20px;

  ${size.desktopMin} {
    padding-top: 14px;
    padding-bottom: 14px;
  }
`;

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  ${size.tabletMin} {
    justify-content: space-between;
    flex-wrap: nowrap;
  }

  .logo {
    ${size.mobileMax} {
      margin-bottom: 12px;
      flex-basis: 100%;
    }
  }
`;
