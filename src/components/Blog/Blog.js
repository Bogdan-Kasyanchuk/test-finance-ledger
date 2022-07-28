import SectionBlog from 'components/SectionBlog/SectionBlog';
import ImageBlogWrapper from 'components/ImageBlogWrapper/ImageBlogWrapper';
import Image from 'components/Image/Image';
import TextBlogWrapper from 'components/TextBlogWrapper/TextBlogWrapper';
import Paragraph from 'components/Paragraph/Paragraph';
import SubTitle from 'components/SubTitle/SubTitle';
import ParagraphText from 'components/ParagraphText/ParagraphText';
import BtnLinkIconText from 'components/BtnLinkIconText/BtnLinkIconText';
import * as imgBlog from 'helpers/imageImport/Blog/imageBlog';

const Blog = () => {
  return (
    <SectionBlog>
      <ImageBlogWrapper>
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
        <SubTitle>Blog Post One</SubTitle>
        <ParagraphText>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate,
          ipsum dignissimos quae laudantium asperiores nam aliquid impedit harum
          illum dolore explicabo ab dolores itaque rerum temporibus doloribus
          iste maiores deleniti?
        </ParagraphText>
        <BtnLinkIconText iconName="arrow" blog>
          Read Our Blog
        </BtnLinkIconText>
      </TextBlogWrapper>
    </SectionBlog>
  );
};

export default Blog;
