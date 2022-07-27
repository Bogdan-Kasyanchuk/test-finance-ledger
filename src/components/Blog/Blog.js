import styled from 'styled-components';
import Image from 'components/Image/Image';
import SubTitle from 'components/SubTitle/SubTitle';
import BtnLinkIconText from 'components/BtnLinkIconText/BtnLinkIconText';
import * as imgBlog from 'components/Blog/imageBlogImport';
import { size, secondColor, backgroundColor } from 'styles/variables';

const Blog = () => {
  return (
    <Section>
      <div>
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
          width={670}
          height={460}
          alt="Desk"
        />
      </div>
      <Div>
        <P1>April 16 2020</P1>
        <SubTitle>Blog Post One</SubTitle>
        <P2>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate,
          ipsum dignissimos quae laudantium asperiores nam aliquid impedit harum
          illum dolore explicabo ab dolores itaque rerum temporibus doloribus
          iste maiores deleniti?
        </P2>
        <BtnLinkIconText iconName="arrow" blog>
          Read Our Blog
        </BtnLinkIconText>
      </Div>
    </Section>
  );
};

export default Blog;

const Section = styled.section`
  ${size.tabletMin} {
    display: flex;
  }
`;

const Div = styled.div`
  background-color: ${backgroundColor};
  padding: 40px 20px;
  color: ${secondColor};

  ${size.tabletMin} {
    order: -1;
    min-width: 400px;
    max-width: 400px;
    padding-left: 32px;
    padding-right: 32px;
  }

  ${size.desktopMin} {
    min-width: 690px;
    max-width: 690px;
    padding: 80px 20px;
  }

  .sub-title {
    margin-bottom: 24px;
  }
`;

const P1 = styled.p`
  margin-bottom: 8px;
  font-size: 18px;
  font-weight: 400;
  line-height: 1.66;

  ${size.tabletMin} {
    font-size: 20px;
    line-height: 1.65;
  }
`;

const P2 = styled.p`
  margin-bottom: 24px;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.6;

  ${size.tabletMin} {
    font-size: 18px;
    line-height: 1.56;
  }
`;
