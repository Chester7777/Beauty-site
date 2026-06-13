import styled from 'styled-components';
import {
  InstagramIcon,
  TelegramIcon,
  WhatsAppIcon,
} from '../Icons/SocialIcons';
import { Logo } from '../Logo/Logo';
import { Container } from '../../styles/shared';

const FooterWrapper = styled.footer`
  padding: 48px 0;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => theme.colors.bgElevated};
`;

const FooterInner = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  text-align: center;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: row;
    justify-content: space-between;
    text-align: left;
  }
`;

const Copyright = styled.p`
  font-size: 0.8rem;
  color: ${({ theme }) => theme.colors.textDim};
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 12px;
`;

const SocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 42px;
  height: 42px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 50%;
  color: ${({ theme }) => theme.colors.textMuted};
  transition: all ${({ theme }) => theme.transitions.fast};

  &:hover {
    color: ${({ theme }) => theme.colors.gold};
    border-color: ${({ theme }) => theme.colors.gold};
    box-shadow: ${({ theme }) => theme.shadows.glow};
    transform: translateY(-2px);
  }
`;

const socialItems = [
  { label: 'Instagram', href: 'https://instagram.com', Icon: InstagramIcon },
  { label: 'Telegram', href: 'https://t.me', Icon: TelegramIcon },
  { label: 'WhatsApp', href: 'https://wa.me', Icon: WhatsAppIcon },
] as const;

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <FooterWrapper>
      <FooterInner>
        <Logo as="div" size="sm" animated={false} />

        <Copyright>© {year} Lumière. Все права защищены.</Copyright>

        <SocialLinks>
          {socialItems.map(({ label, href, Icon }) => (
            <SocialLink
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              title={label}
            >
              <Icon size={18} />
            </SocialLink>
          ))}
        </SocialLinks>
      </FooterInner>
    </FooterWrapper>
  );
};
