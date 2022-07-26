import styled from 'styled-components';
import Link from 'components/Link/Link';
import { size } from 'styles/variables';

const Navigation = () => {
  return (
    <Ul>
      <Li>
        <Link to="/">Home</Link>
      </Li>
      <Li>
        <Link to="/about">About</Link>
      </Li>
      <Li>
        <Link to="/cases">Cases</Link>
      </Li>
      <Li>
        <Link to="/blog">Blog</Link>
      </Li>
      <Li>
        <Link to="/contact">Contact</Link>
      </Li>
    </Ul>
  );
};

export default Navigation;

const Ul = styled.ul`
  display: flex;
  align-items: center;
`;

const Li = styled.li`
  :not(:last-child) {
    margin-right: 12px;

    ${size.tabletMin} {
      margin-right: 20px;
    }

    ${size.desktopMin} {
      margin-right: 40px;
    }
  }
`;
