import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 0 40px;
  }
`;

export const Section = styled.section`
  padding: 100px 0;
  position: relative;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 140px 0;
  }
`;

export const SectionLabel = styled.span`
  display: inline-block;
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.gold};
  margin-bottom: 16px;
`;

export const SectionTitle = styled.h2`
  font-size: clamp(2.5rem, 5vw, 3.75rem);
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 24px;
`;

export const SectionSubtitle = styled.p`
  font-size: 1.05rem;
  color: ${({ theme }) => theme.colors.textMuted};
  max-width: 560px;
  line-height: 1.8;
`;

export const GoldLine = styled.div`
  width: 60px;
  height: 1px;
  background: linear-gradient(
    90deg,
    transparent,
    ${({ theme }) => theme.colors.gold},
    transparent
  );
  margin: 24px 0;
`;
