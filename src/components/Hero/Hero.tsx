import { motion, useScroll, useTransform } from 'framer-motion';
import styled from 'styled-components';
import { images } from '../../data/images';
import { Container } from '../../styles/shared';
import { CoverImage, ImageOverlay } from '../../styles/image';

const HeroSection = styled.section`
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  overflow: hidden;
`;

const HeroBackground = styled.div`
  position: absolute;
  inset: 0;
  z-index: 0;

  img {
    filter: brightness(0.35) saturate(0.8);
  }
`;

const BackgroundGlow = styled(motion.div)`
  position: absolute;
  top: -20%;
  right: -10%;
  width: 70vw;
  height: 70vw;
  max-width: 800px;
  max-height: 800px;
  border-radius: 50%;
  background: radial-gradient(
    circle,
    rgba(201, 169, 110, 0.08) 0%,
    rgba(201, 169, 110, 0.02) 40%,
    transparent 70%
  );
  pointer-events: none;
  z-index: 1;
`;

const BackgroundOrb = styled(motion.div)`
  position: absolute;
  bottom: 10%;
  left: -5%;
  width: 40vw;
  height: 40vw;
  max-width: 500px;
  max-height: 500px;
  border-radius: 50%;
  background: radial-gradient(
    circle,
    rgba(138, 115, 72, 0.06) 0%,
    transparent 70%
  );
  pointer-events: none;
  z-index: 1;
`;

const GridOverlay = styled.div`
  position: absolute;
  inset: 0;
  background-image: linear-gradient(
      rgba(201, 169, 110, 0.03) 1px,
      transparent 1px
    ),
    linear-gradient(90deg, rgba(201, 169, 110, 0.03) 1px, transparent 1px);
  background-size: 80px 80px;
  mask-image: radial-gradient(ellipse at center, black 20%, transparent 70%);
  pointer-events: none;
  z-index: 1;
`;

const HeroLayout = styled(Container)`
  position: relative;
  z-index: 2;
  padding-top: 120px;
  padding-bottom: 80px;
  display: grid;
  grid-template-columns: 1fr;
  gap: 48px;
  align-items: center;

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: 1.1fr 0.9fr;
    gap: 64px;
  }
`;

const HeroText = styled.div``;

const HeroImageCard = styled(motion.div)`
  position: relative;
  aspect-ratio: 4 / 5;
  border-radius: 4px;
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.colors.border};
  box-shadow: ${({ theme }) => theme.shadows.card};
  max-width: 480px;
  margin: 0 auto;

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    margin: 0;
    margin-left: auto;
  }

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    border: 1px solid rgba(201, 169, 110, 0.2);
    border-radius: 4px;
    pointer-events: none;
    z-index: 2;
  }
`;

const HeroImageOverlay = styled(ImageOverlay)`
  background: linear-gradient(
    160deg,
    rgba(8, 8, 8, 0.1) 0%,
    rgba(8, 8, 8, 0.45) 100%
  );
`;

const Eyebrow = styled(motion.div)`
  display: inline-flex;
  align-items: center;
  gap: 12px;
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.gold};
  margin-bottom: 32px;

  &::before {
    content: '';
    width: 40px;
    height: 1px;
    background: ${({ theme }) => theme.colors.gold};
  }
`;

const Title = styled(motion.h1)`
  font-size: clamp(3.5rem, 10vw, 7rem);
  font-weight: 400;
  line-height: 1.05;
  margin-bottom: 32px;
  max-width: 900px;

  em {
    font-style: italic;
    color: ${({ theme }) => theme.colors.goldLight};
  }
`;

const Description = styled(motion.p)`
  font-size: clamp(1rem, 2vw, 1.2rem);
  color: ${({ theme }) => theme.colors.textMuted};
  max-width: 480px;
  line-height: 1.9;
  margin-bottom: 48px;
`;

const Actions = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
`;

const PrimaryButton = styled(motion.a)`
  display: inline-flex;
  align-items: center;
  gap: 12px;
  padding: 18px 36px;
  font-size: 0.85rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.bg};
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.gold},
    ${({ theme }) => theme.colors.goldDark}
  );
  border-radius: 2px;

  svg {
    transition: transform ${({ theme }) => theme.transitions.fast};
  }

  &:hover svg {
    transform: translateX(4px);
  }
`;

const SecondaryButton = styled(motion.a)`
  display: inline-flex;
  align-items: center;
  padding: 18px 36px;
  font-size: 0.85rem;
  font-weight: 500;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.text};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 2px;
  transition: border-color ${({ theme }) => theme.transitions.fast};

  &:hover {
    border-color: ${({ theme }) => theme.colors.borderHover};
  }
`;

const Stats = styled(motion.div)`
  display: flex;
  gap: 48px;
  margin-top: 80px;
  padding-top: 40px;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  flex-wrap: wrap;
`;

const StatItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const StatNumber = styled.span`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 2.5rem;
  color: ${({ theme }) => theme.colors.gold};
`;

const StatLabel = styled.span`
  font-size: 0.8rem;
  color: ${({ theme }) => theme.colors.textMuted};
  letter-spacing: 0.05em;
`;

const ScrollIndicator = styled(motion.div)`
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  color: ${({ theme }) => theme.colors.textDim};
  font-size: 0.7rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  z-index: 2;
`;

const ScrollLine = styled(motion.div)`
  width: 1px;
  height: 48px;
  background: linear-gradient(
    to bottom,
    ${({ theme }) => theme.colors.gold},
    transparent
  );
`;

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15 + 0.4, duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  }),
};

export const Hero = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  return (
    <HeroSection id="hero">
      <HeroBackground>
        <CoverImage src={images.hero} alt="" aria-hidden="true" />
        <ImageOverlay />
      </HeroBackground>

      <BackgroundGlow
        animate={{ scale: [1, 1.1, 1], rotate: [0, 5, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />
      <BackgroundOrb
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />
      <GridOverlay />

      <motion.div style={{ y, opacity, width: '100%' }}>
        <HeroLayout>
          <HeroText>
            <Eyebrow
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0}
            >
              Премиальный салон красоты
            </Eyebrow>

            <Title variants={fadeUp} initial="hidden" animate="visible" custom={1}>
              Искусство <em>красоты</em> в каждой детали
            </Title>

            <Description
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={2}
            >
              Создаём образы, которые отражают вашу индивидуальность.
              Профессиональный уход, атмосфера роскоши и безупречный сервис.
            </Description>

            <Actions variants={fadeUp} initial="hidden" animate="visible" custom={3}>
              <PrimaryButton
                href="#contact"
                whileHover={{ scale: 1.02, boxShadow: '0 0 40px rgba(201,169,110,0.2)' }}
                whileTap={{ scale: 0.98 }}
              >
                Записаться
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M3 8h10M9 4l4 4-4 4"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </PrimaryButton>
              <SecondaryButton href="#gallery" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                Галерея
              </SecondaryButton>
            </Actions>

            <Stats variants={fadeUp} initial="hidden" animate="visible" custom={4}>
              <StatItem>
                <StatNumber>12+</StatNumber>
                <StatLabel>лет опыта</StatLabel>
              </StatItem>
              <StatItem>
                <StatNumber>8K+</StatNumber>
                <StatLabel>довольных клиентов</StatLabel>
              </StatItem>
              <StatItem>
                <StatNumber>15</StatNumber>
                <StatLabel>мастеров</StatLabel>
              </StatItem>
            </Stats>
          </HeroText>

          <HeroImageCard
            initial={{ opacity: 0, x: 60, rotateY: -15 }}
            animate={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ delay: 0.6, duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <CoverImage
              src="https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=800&q=80"
              alt="Мастер салона Lumière за работой"
            />
            <HeroImageOverlay />
          </HeroImageCard>
        </HeroLayout>
      </motion.div>

      <ScrollIndicator
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <span>Листайте</span>
        <ScrollLine
          animate={{ scaleY: [1, 0.5, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </ScrollIndicator>
    </HeroSection>
  );
};
