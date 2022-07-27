import styled from 'styled-components';
import SectionStandard from 'components/SectionStandard/SectionStandard';
import Container from 'components/Container/Container';
import SubTitle from 'components/SubTitle/SubTitle';
import CasesGallery from 'components/CasesGallery/CasesGallery';
import { size } from 'styles/variables';

const Cases = () => {
  return (
    <SectionStandard>
      <Container>
        <Div>
          <P1>This is what we do</P1>
          <SubTitle>Business Cases</SubTitle>
          <P2>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto,
            sapiente!
          </P2>
        </Div>
        <CasesGallery />
      </Container>
    </SectionStandard>
  );
};

export default Cases;

const Div = styled.div`
  text-align: center;

  .sub-title {
    margin-bottom: 20px;

    ${size.tabletMin} {
      margin-bottom: 24px;
    }
  }
`;

const P1 = styled.p`
  margin-bottom: 20px;
  font-size: 18px;
  font-weight: 400;
  line-height: 1.66;

  ${size.tabletMin} {
    margin-bottom: 24px;
    font-size: 20px;
    line-height: 1.65;
  }
`;

const P2 = styled.p`
  margin-bottom: 20px;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.6;

  ${size.tabletMin} {
    margin-bottom: 24px;
    font-size: 18px;
    line-height: 1.56;
  }
`;
