import styled from 'styled-components';
import Image from 'components/Image/Image';
import { size, duration, timing } from 'styles/variables';

const CasesGalleryItem = ({ el }) => {
  return (
    <Li>
      <Image
        deskWebp={el.url.deskWebp}
        deskWebp_2x={el.url.deskWebp_2x}
        desk={el.url.desk}
        desk_2x={el.url.desk_2x}
        tabWebp={el.url.tabWebp}
        tabWebp_2x={el.url.tabWebp_2x}
        tab={el.url.tab}
        tab_2x={el.url.tab_2x}
        mobWebp={el.url.mobWebp}
        mobWebp_2x={el.url.mobWebp_2x}
        mob={el.url.mob}
        mob_2x={el.url.mob_2x}
        src={el.url.mob}
        alt={el.title}
      />
    </Li>
  );
};

export default CasesGalleryItem;

const Li = styled.li`
  transition: opacity ${duration} ${timing};

  ${size.mobileMax} {
    :not(:last-child) {
      margin-bottom: 8px;
    }
  }

  :hover,
  :focus-visible {
    opacity: 0.8;
    cursor: pointer;
  }
`;
