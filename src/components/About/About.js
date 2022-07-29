import { useEffect } from 'react';
import SectionStandard from 'components/SectionStandard/SectionStandard';
import Container from 'components/Container/Container';
import TextAboutWrapper from 'components/TextAboutWrapper/TextAboutWrapper';
import Paragraph from 'components/Paragraph/Paragraph';
import SubTitle from 'components/SubTitle/SubTitle';
import ParagraphText from 'components/ParagraphText/ParagraphText';
import { headerStyle } from 'service/setStyle';
import AboutGallery from 'components/AboutGallery/AboutGallery';

const About = () => {
  useEffect(() => {
    headerStyle('rgba(51, 51, 51, 0.8)');
  }, []);

  return (
    <SectionStandard>
      <Container>
        <TextAboutWrapper>
          <Paragraph>Who we are</Paragraph>
          <SubTitle>Our Professional Team</SubTitle>
          <ParagraphText>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto,
            sapiente!
          </ParagraphText>
        </TextAboutWrapper>
        <AboutGallery />
      </Container>
    </SectionStandard>
  );
};

export default About;
