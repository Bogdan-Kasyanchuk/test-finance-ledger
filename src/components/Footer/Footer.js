import styled from 'styled-components';
import Container from 'components/Container/Container';
import SocialLinkList from 'components/SocialLinkList/SocialLinkList';
import { size, firstColor, secondColor } from 'styles/variables';

const Footer = () => {
  return (
    <FooterTag>
      <Container>
        <SocialLinkList />
        <P>Copyright © 2021 - FinanceLedger</P>
      </Container>
    </FooterTag>
  );
};

export default Footer;

const FooterTag = styled.footer`
  padding-top: 20px;
  padding-bottom: 20px;
  text-align: center;
  background-color: ${firstColor};
`;

const P = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 1.6;
  color: ${secondColor};

  ${size.tabletMin} {
    font-size: 18px;
    line-height: 1.56;
  }
`;
