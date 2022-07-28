import styled from 'styled-components';
import Icon from 'components/Icon/Icon';
import { secondColor, accentColor, duration, timing } from 'styles/variables';

const SocialLinkList = () => {
  return (
    <Ul className="social-list">
      <Li>
        <A
          className="social-link"
          href="https://uk-ua.facebook.com"
          target="_blank"
          rel="noreferrer noopener"
        >
          <Icon iconName="facebook" width="35px" height="35px" />
        </A>
      </Li>
      <Li>
        <A
          className="social-link"
          href="https://twitter.com"
          target="_blank"
          rel="noreferrer noopener"
        >
          <Icon iconName="twiter" width="35px" height="35px" />
        </A>
      </Li>
      <Li>
        <A
          className="social-link"
          href="https://www.youtube.com/"
          target="_blank"
          rel="noreferrer noopener"
        >
          <Icon iconName="youtube" width="40px" height="35px" />
        </A>
      </Li>
      <Li>
        <A
          className="social-link"
          href="https://www.linkedin.com"
          target="_blank"
          rel="noreferrer noopener"
        >
          <Icon iconName="linkedin" width="31px" height="35px" />
        </A>
      </Li>
    </Ul>
  );
};

export default SocialLinkList;

const Ul = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 8px;
`;

const Li = styled.li`
  :not(:last-child) {
    margin-right: 25px;
  }
`;

const A = styled.a`
  color: ${secondColor};
  transition: color ${duration} ${timing};

  .icon {
    display: block;
    fill: currentColor;
  }

  :hover,
  :focus-visible {
    color: ${accentColor};
    outline: none;
  }
`;
