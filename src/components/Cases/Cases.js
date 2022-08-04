import SectionStandard from 'components/SectionStandard/SectionStandard';
import Container from 'components/Container/Container';
import TextTeamWrapper from 'components/TextTeamWrapper/TextTeamWrapper';
import Paragraph from 'components/Paragraph/Paragraph';
import SubTitleSection from 'components/SubTitleSection/SubTitleSection';
import ParagraphText from 'components/ParagraphText/ParagraphText';
import CasesGallery from 'components/CasesGallery/CasesGallery';

const Cases = () => {
  return (
    <SectionStandard id="cases">
      <Container>
        <TextTeamWrapper>
          <Paragraph>This is what we do</Paragraph>
          <SubTitleSection>Business Cases</SubTitleSection>
          <ParagraphText>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto,
            sapiente!
          </ParagraphText>
        </TextTeamWrapper>
        <CasesGallery />
      </Container>
    </SectionStandard>
  );
};

export default Cases;
