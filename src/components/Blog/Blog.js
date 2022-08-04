import SectionBlog from 'components/SectionBlog/SectionBlog';
import ImageBlogWrapper from 'components/ImageBlogWrapper/ImageBlogWrapper';
import Image from 'components/Image/Image';
import TextBlogWrapper from 'components/TextBlogWrapper/TextBlogWrapper';
import Paragraph from 'components/Paragraph/Paragraph';
import SubTitleSection from 'components/SubTitleSection/SubTitleSection';
import ParagraphText from 'components/ParagraphText/ParagraphText';
import LinkIconText from 'components/LinkIconText/LinkIconText';
import * as imgBlog from 'service/imageImport/blog/imageBlog';

const Blog = () => {
  return (
    <SectionBlog id="blog">
      <ImageBlogWrapper maxHeightTab="482px" maxHeightDesk="460px">
        <Image
          deskWebp={imgBlog.blogDeskWebp}
          deskWebp_2x={imgBlog.blogDeskWebp_2x}
          desk={imgBlog.blogDesk}
          desk_2x={imgBlog.blogDesk_2x}
          tabWebp={imgBlog.blogTabWebp}
          tabWebp_2x={imgBlog.blogTabWebp_2x}
          tab={imgBlog.blogTab}
          tab_2x={imgBlog.blogTab_2x}
          mobWebp={imgBlog.blogMobWebp}
          mobWebp_2x={imgBlog.blogMobWebp_2x}
          mob={imgBlog.blogMob}
          mob_2x={imgBlog.blogMob_2x}
          src={imgBlog.blogMob}
          alt="Desk"
        />
      </ImageBlogWrapper>
      <TextBlogWrapper blog>
        <Paragraph>April 16 2020</Paragraph>
        <SubTitleSection>Blog Post One</SubTitleSection>
        <ParagraphText>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate,
          ipsum dignissimos quae laudantium asperiores nam aliquid impedit harum
          illum dolore explicabo ab dolores itaque rerum temporibus doloribus
          iste maiores deleniti?
        </ParagraphText>
        <LinkIconText iconName="arrow" blog>
          Read Our Blog
        </LinkIconText>
      </TextBlogWrapper>
    </SectionBlog>
  );
};

export default Blog;
