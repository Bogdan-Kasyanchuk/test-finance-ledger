import PropTypes from 'prop-types';
import styled from 'styled-components';
import Icon from 'components/Icon/Icon';
import { secondColor, accentColor, duration, timing } from 'styles/variables';

const SocialLinkItem = ({ href, iconName, iconWidth, iconHeight }) => {
  return (
    <Li>
      <A
        className="social-link"
        href={href}
        target="_blank"
        rel="noreferrer noopener"
      >
        <Icon iconName={iconName} width={iconWidth} height={iconHeight} />
      </A>
    </Li>
  );
};

SocialLinkItem.defaultProps = {
  href: '#',
};

SocialLinkItem.propTypes = {
  href: PropTypes.string,
};

export default SocialLinkItem;

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
  }

  :hover,
  :focus-visible {
    color: ${accentColor};
    outline: none;
  }
`;
