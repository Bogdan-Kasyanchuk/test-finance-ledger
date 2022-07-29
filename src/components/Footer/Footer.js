import styled from 'styled-components';
import Container from 'components/Container/Container';
import SocialLinkList from 'components/SocialLinkList/SocialLinkList';
import ParagraphText from 'components/ParagraphText/ParagraphText';
import { firstColor, secondColor } from 'styles/variables';

const Footer = () => {
  return (
    <FooterTag>
      <Container>
        <SocialLinkList />
        <ParagraphText>Copyright © 2022 - FinanceLedger</ParagraphText>
      </Container>
    </FooterTag>
  );
};

export default Footer;

const FooterTag = styled.footer`
  padding-top: 20px;
  padding-bottom: 20px;
  color: ${secondColor};
  text-align: center;
  background-color: ${firstColor};
`;
