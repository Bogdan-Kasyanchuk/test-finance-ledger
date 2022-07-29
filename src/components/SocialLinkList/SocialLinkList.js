import styled from 'styled-components';
import SocialLinkItem from 'components/SocialLinkItem/SocialLinkItem';

const SocialLinkList = () => {
  return (
    <Ul className="social-list">
      <SocialLinkItem
        href="https://uk-ua.facebook.com"
        iconName="facebook"
        iconWidth="35px"
        iconHeight="35px"
      />
      <SocialLinkItem
        href="https://twitter.com"
        iconName="twiter"
        iconWidth="35px"
        iconHeight="35px"
      />
      <SocialLinkItem
        href="https://www.youtube.com/"
        iconName="youtube"
        iconWidth="40px"
        iconHeight="35px"
      />
      <SocialLinkItem
        href="https://www.linkedin.com"
        iconName="linkedin"
        iconWidth="31px"
        iconHeight="35px"
      />
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
