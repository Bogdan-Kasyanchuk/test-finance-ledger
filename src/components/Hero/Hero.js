import styled from 'styled-components';
import Container from 'components/Container/Container';
import Title from 'components/Title/Title';
import BtnLinkIconText from 'components/BtnLinkIconText/BtnLinkIconText';
import * as imgShowcase from 'service/imageImport/skyLimit/imageShowcase';
import { size, firstColor, thirdColor, linGradBgHome } from 'styles/variables';

const Hero = () => {
  return (
    <Section id="hero">
      <Container>
        <Title>The Sky Is The Limit</Title>
        <P>We provide world class financial assistance</P>
        <BtnLinkIconText iconName="arrow" home>
          Read More
        </BtnLinkIconText>
      </Container>
    </Section>
  );
};

export default Hero;

const Section = styled.section`
  padding-top: 142px;
  padding-bottom: 96px;
  text-align: center;
  background-image: ${linGradBgHome}, url(${imgShowcase.showcaseMob});
  background-color: ${firstColor};
  background-size: cover;
  background-position: center;

  ${size.mobileMax} {
    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: ${linGradBgHome}, url(${imgShowcase.showcaseMob_2x});
    }
  }

  ${size.tabletMin} {
    padding-top: 406px;
    padding-bottom: 410px;
    background-image: ${linGradBgHome}, url(${imgShowcase.showcaseTab});

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: ${linGradBgHome}, url(${imgShowcase.showcaseTab_2x});
    }
  }

  ${size['1024Min']} {
    padding-top: 278px;
    padding-bottom: 282px;
    background-image: ${linGradBgHome}, url(${imgShowcase.showcaseDesk});

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: ${linGradBgHome}, url(${imgShowcase.showcaseDesk_2x});
    }
  }

  .title {
    margin-bottom: 20px;

    ${size.tabletMin} {
      margin-bottom: 24px;
    }
  }
`;

const P = styled.p`
  margin-bottom: 24px;
  font-size: 22px;
  line-height: 1.67;
  color: ${thirdColor};

  ${size.tabletMin} {
    margin-bottom: 32px;
  }
`;
