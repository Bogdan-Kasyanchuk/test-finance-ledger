import SectionStandard from 'components/SectionStandard/SectionStandard';
import Container from 'components/Container/Container';
import TextTeamWrapper from 'components/TextTeamWrapper/TextTeamWrapper';
import Paragraph from 'components/Paragraph/Paragraph';
import SubTitleSection from 'components/SubTitleSection/SubTitleSection';
import ParagraphText from 'components/ParagraphText/ParagraphText';
import TeamGallery from 'components/TeamGallery/TeamGallery';

const Team = () => {
  return (
    <SectionStandard>
      <Container>
        <TextTeamWrapper>
          <Paragraph>Who we are</Paragraph>
          <SubTitleSection>Our Professional Team</SubTitleSection>
          <ParagraphText>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto,
            sapiente!
          </ParagraphText>
        </TextTeamWrapper>
        <TeamGallery />
      </Container>
    </SectionStandard>
  );
};

export default Team;
