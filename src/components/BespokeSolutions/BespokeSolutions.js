import styled from 'styled-components';
import Image from 'components/Image/Image';
import SubTitle from 'components/SubTitle/SubTitle';
import BtnLinkIconText from 'components/BtnLinkIconText/BtnLinkIconText';
import * as imgPeople from 'components/BespokeSolutions/imagePeopleImport';
import { size, secondColor, accentColor } from 'styles/variables';

const BespokeSolutions = () => {
  return (
    <Section>
      <div>
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
          width={670}
          height={460}
          alt="People"
        />
      </div>
      <Div>
        <P1>What you are looking for</P1>
        <SubTitle>We provide bespoke solutions</SubTitle>
        <P2>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate,
          ipsum dignissimos quae laudantium asperiores nam aliquid impedit harum
          illum dolore explicabo ab dolores itaque rerum temporibus doloribus
          iste maiores deleniti?
        </P2>
        <BtnLinkIconText iconName="arrow">Read More</BtnLinkIconText>
      </Div>
    </Section>
  );
};

export default BespokeSolutions;

const Section = styled.section`
  ${size.tabletMin} {
    display: flex;
  }
`;

const Div = styled.div`
  background-color: ${accentColor};
  padding: 40px 20px;
  color: ${secondColor};

  ${size.tabletMin} {
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
