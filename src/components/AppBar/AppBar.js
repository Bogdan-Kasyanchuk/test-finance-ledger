import styled from 'styled-components';
import Logo from 'components/Logo/Logo';
import Navigation from 'components/Navigation/Navigation';
import Container from 'components/Container/Container';
import { size } from 'styles/variables';

const AppBar = () => {
  return (
    <Header>
      <Container>
        <Div>
          <Logo firstChildren="Finance" secondChildren="Ledger" />
          <Navigation />
        </Div>
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
  left: 50%;
  z-index: 1000;
  padding-top: 20px;
  padding-bottom: 20px;
  transform: translateX(-50%);

  ${size.desktopMin} {
    padding-top: 14px;
    padding-bottom: 14px;
  }
`;

const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  .logo {
    ${size.mobileMax} {
      margin-bottom: 12px;
    }
  }

  ${size.tabletMin} {
    justify-content: space-between;
    flex-wrap: nowrap;
  }
`;
