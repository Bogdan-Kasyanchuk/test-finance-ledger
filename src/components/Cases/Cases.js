import { useEffect } from 'react';
import SectionStandard from 'components/SectionStandard/SectionStandard';
import Container from 'components/Container/Container';
import TextAboutWrapper from 'components/TextAboutWrapper/TextAboutWrapper';
import Paragraph from 'components/Paragraph/Paragraph';
import SubTitle from 'components/SubTitle/SubTitle';
import ParagraphText from 'components/ParagraphText/ParagraphText';
import { headerStyle } from 'service/setStyle';
import CasesGallery from 'components/CasesGallery/CasesGallery';

const Cases = () => {
  useEffect(() => {
    headerStyle('rgba(51, 51, 51, 0.8)');
  }, []);

  return (
    <SectionStandard>
      <Container>
        <TextAboutWrapper>
          <Paragraph>This is what we do</Paragraph>
          <SubTitle>Business Cases</SubTitle>
          <ParagraphText>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto,
            sapiente!
          </ParagraphText>
        </TextAboutWrapper>
        <CasesGallery />
      </Container>
    </SectionStandard>
  );
};

export default Cases;
