import styled from 'styled-components';
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

const Logo = styled.span`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 1.5rem;
  font-weight: 600;
  letter-spacing: 0.05em;
  color: ${({ theme }) => theme.colors.text};

  span {
    color: ${({ theme }) => theme.colors.gold};
  }
`;

const Copyright = styled.p`
  font-size: 0.8rem;
  color: ${({ theme }) => theme.colors.textDim};
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 20px;
`;

const SocialLink = styled.a`
  font-size: 0.8rem;
  font-weight: 500;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.textMuted};
  transition: color ${({ theme }) => theme.transitions.fast};

  &:hover {
    color: ${({ theme }) => theme.colors.gold};
  }
`;

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <FooterWrapper>
      <FooterInner>
        <Logo>
          Lumi<span>ère</span>
        </Logo>

        <Copyright>© {year} Lumière. Все права защищены.</Copyright>

        <SocialLinks>
          <SocialLink href="#" aria-label="Instagram">
            Instagram
          </SocialLink>
          <SocialLink href="#" aria-label="Telegram">
            Telegram
          </SocialLink>
          <SocialLink href="#" aria-label="WhatsApp">
            WhatsApp
          </SocialLink>
        </SocialLinks>
      </FooterInner>
    </FooterWrapper>
  );
};
