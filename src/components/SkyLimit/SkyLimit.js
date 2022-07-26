import styled from 'styled-components';
import Container from 'components/Container/Container';
import Title from 'components/Title/Title';
import ButtonLink from 'components/ButtonLink/ButtonLink';
import showcaseMob from 'assets/img/home/showcase-mob.jpg';
import showcaseMob_2x from 'assets/img/home/showcase-mob@2x.jpg';
import showcaseTab from 'assets/img/home/showcase-tab.jpg';
import showcaseTab_2x from 'assets/img/home/showcase-tab@2x.jpg';
import showcaseDesk from 'assets/img/home/showcase-desk.jpg';
import showcaseDesk_2x from 'assets/img/home/showcase-desk@2x.jpg';
import { size, firstColor, thirdColor, linGradBgHome } from 'styles/variables';

const SkyLimit = () => {
  return (
    <Section>
      <Container>
        <Title>The Sky Is The Limit</Title>
        <P>We provide world class financial assistance</P>
        <ButtonLink iconName="arrow">Read More</ButtonLink>
      </Container>
    </Section>
  );
};

export default SkyLimit;

const Section = styled.section`
  margin-left: auto;
  margin-right: auto;
  width: 320px;
  padding-top: 142px;
  padding-bottom: 96px;
  text-align: center;
  background-color: ${firstColor};
  background-size: cover;
  background-position: center;
  background-image: ${linGradBgHome}, url(${showcaseMob});

  ${size.mobileMax} {
    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: ${linGradBgHome}, url(${showcaseMob_2x});
    }
  }

  ${size.tabletMin} {
    width: 768px;
    padding-top: 406px;
    padding-bottom: 410px;
    background-image: ${linGradBgHome}, url(${showcaseTab});

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: ${linGradBgHome}, url(${showcaseTab_2x});
    }
  }

  ${size.desktopMin} {
    width: 1360px;
    padding-top: 278px;
    padding-bottom: 282px;
    background-image: ${linGradBgHome}, url(${showcaseDesk});

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: ${linGradBgHome}, url(${showcaseDesk_2x});
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
  font-weight: 400;
  line-height: 1.67;
  color: ${thirdColor};

  ${size.tabletMin} {
    margin-bottom: 32px;
  }
`;
