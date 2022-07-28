import PropTypes from 'prop-types';
import styled from 'styled-components';
import { size } from 'styles/variables';

const GalleryList = ({ children, cases, openModal }) => {
  return (
    <Ul onClick={openModal} cases={cases}>
      {children}
    </Ul>
  );
};

GalleryList.propTypes = {
  children: PropTypes.node,
  cases: PropTypes.bool,
  openModal: PropTypes.func,
};

export default GalleryList;

const Ul = styled.ul`
  ${size.tabletMin} {
    display: grid;
    grid-template-columns: repeat(auto-fill, calc((100% - 2 * 18px) / 3));
    justify-content: space-between;
    grid-row-gap: ${({ cases }) => (cases ? '18px' : null)};
  }

  ${size.desktopMin} {
    grid-template-columns: repeat(auto-fill, calc((100% - 2 * 20px) / 3));
    grid-row-gap: ${({ cases }) => (cases ? '24px' : null)};
  }
`;
