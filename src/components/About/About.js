import SectionBlog from 'components/SectionBlog/SectionBlog';
import ImageBlogWrapper from 'components/ImageBlogWrapper/ImageBlogWrapper';
import Image from 'components/Image/Image';
import TextBlogWrapper from 'components/TextBlogWrapper/TextBlogWrapper';
import Paragraph from 'components/Paragraph/Paragraph';
import SubTitleSection from 'components/SubTitleSection/SubTitleSection';
import ParagraphText from 'components/ParagraphText/ParagraphText';
import LinkIconText from 'components/LinkIconText/LinkIconText';
import * as imgPeople from 'service/imageImport/bespokeSolutions/imagePeople';

const About = () => {
  return (
    <SectionBlog id="about">
      <ImageBlogWrapper maxHeightTab="576px" maxHeightDesk="460px">
        <Image
          deskWebp={imgPeople.peopleDeskWebp}
          deskWebp_2x={imgPeople.peopleDeskWebp_2x}
          desk={imgPeople.peopleDesk}
          desk_2x={imgPeople.peopleDesk_2x}
          tabWebp={imgPeople.peopleTabWebp}
          tabWebp_2x={imgPeople.peopleTabWebp_2x}
          tab={imgPeople.peopleTab}
          tab_2x={imgPeople.peopleTab_2x}
          mobWebp={imgPeople.peopleMobWebp}
          mobWebp_2x={imgPeople.peopleMobWebp_2x}
          mob={imgPeople.peopleMob}
          mob_2x={imgPeople.peopleMob_2x}
          src={imgPeople.peopleMob}
          alt="People"
        />
      </ImageBlogWrapper>
      <TextBlogWrapper>
        <Paragraph>What you are looking for</Paragraph>
        <SubTitleSection>We provide bespoke solutions</SubTitleSection>
        <ParagraphText>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate,
          ipsum dignissimos quae laudantium asperiores nam aliquid impedit harum
          illum dolore explicabo ab dolores itaque rerum temporibus doloribus
          iste maiores deleniti?
        </ParagraphText>
        <LinkIconText iconName="arrow">Read More</LinkIconText>
      </TextBlogWrapper>
    </SectionBlog>
  );
};

export default About;
