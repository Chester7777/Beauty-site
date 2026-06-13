import { motion } from 'framer-motion';
import styled from 'styled-components';
import { images } from '../../data/images';
import {
  Container,
  GoldLine,
  Section,
  SectionLabel,
  SectionTitle,
} from '../../styles/shared';
import { CoverImage, ImageOverlay } from '../../styles/image';

const AboutGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 64px;
  margin-top: 64px;
  align-items: center;

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: 1fr 1fr;
    gap: 80px;
  }
`;

const ImageWrapper = styled(motion.div)`
  position: relative;
  aspect-ratio: 4 / 5;
  border-radius: 4px;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: 4px;
    z-index: 2;
    pointer-events: none;
  }

  &::after {
    content: '';
    position: absolute;
    top: 24px;
    right: -24px;
    bottom: -24px;
    left: 24px;
    border: 1px solid ${({ theme }) => theme.colors.goldDark};
    border-radius: 4px;
    z-index: 0;
    opacity: 0.4;
  }
`;

const SalonImage = styled(CoverImage)`
  position: relative;
  z-index: 1;
  filter: saturate(0.95) brightness(0.9);
  transition: transform 0.6s ease, filter 0.6s ease;

  ${ImageWrapper}:hover & {
    transform: scale(1.04);
    filter: saturate(1) brightness(1);
  }
`;

const FloatingBadge = styled(motion.div)`
  position: absolute;
  bottom: 32px;
  left: -20px;
  z-index: 3;
  padding: 20px 28px;
  background: ${({ theme }) => theme.colors.bgCard};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 4px;
  box-shadow: ${({ theme }) => theme.shadows.card};

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    left: -40px;
  }
`;

const BadgeNumber = styled.span`
  display: block;
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 2.5rem;
  color: ${({ theme }) => theme.colors.gold};
  line-height: 1;
`;

const BadgeText = styled.span`
  font-size: 0.8rem;
  color: ${({ theme }) => theme.colors.textMuted};
  letter-spacing: 0.05em;
`;

const AboutContent = styled(motion.div)``;

const AboutText = styled.p`
  font-size: 1.05rem;
  color: ${({ theme }) => theme.colors.textMuted};
  line-height: 1.9;
  margin-bottom: 24px;
`;

const ValuesList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 40px;
`;

const ValueItem = styled(motion.li)`
  display: flex;
  align-items: flex-start;
  gap: 16px;
  padding: 20px 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};

  &:last-child {
    border-bottom: none;
  }
`;

const ValueIcon = styled.span`
  flex-shrink: 0;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 50%;
  color: ${({ theme }) => theme.colors.gold};
  font-size: 0.9rem;
`;

const ValueText = styled.div`
  h4 {
    font-family: ${({ theme }) => theme.fonts.body};
    font-size: 1rem;
    font-weight: 600;
    margin-bottom: 4px;
    color: ${({ theme }) => theme.colors.text};
  }

  p {
    font-size: 0.9rem;
    color: ${({ theme }) => theme.colors.textMuted};
    line-height: 1.6;
  }
`;

const values = [
  {
    icon: '01',
    title: 'Индивидуальный подход',
    text: 'Каждый клиент уникален — мы подбираем процедуры под ваш тип кожи и стиль жизни.',
  },
  {
    icon: '02',
    title: 'Премиальная косметика',
    text: 'Работаем только с брендами мирового уровня: Kerastase, OPI, Dermalogica.',
  },
  {
    icon: '03',
    title: 'Атмосфера покоя',
    text: 'Тёмный интерьер, мягкий свет и ароматерапия создают пространство для релакса.',
  },
];

export const About = () => {
  return (
    <Section id="about">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
        >
          <SectionLabel>О нас</SectionLabel>
          <SectionTitle>Философия Lumière</SectionTitle>
          <GoldLine />
        </motion.div>

        <AboutGrid>
          <ImageWrapper
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <SalonImage src={images.about} alt="Интерьер салона Lumière" />
            <ImageOverlay />

            <FloatingBadge
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <BadgeNumber>12</BadgeNumber>
              <BadgeText>лет совершенства</BadgeText>
            </FloatingBadge>
          </ImageWrapper>

          <AboutContent
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <AboutText>
              Lumière — это больше, чем салон красоты. Это пространство, где
              мастерство встречается с эстетикой. Мы верим, что настоящая красота
              рождается в атмосфере заботы, внимания к деталям и глубокого
              понимания потребностей каждого гостя.
            </AboutText>
            <AboutText>
              Наша команда — это 15 сертифицированных специалистов с опытом
              работы в лучших салонах Москвы и Европы. Мы постоянно совершенствуем
              навыки и следим за мировыми трендами индустрии красоты.
            </AboutText>

            <ValuesList>
              {values.map((value, i) => (
                <ValueItem
                  key={value.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15, duration: 0.5 }}
                >
                  <ValueIcon>{value.icon}</ValueIcon>
                  <ValueText>
                    <h4>{value.title}</h4>
                    <p>{value.text}</p>
                  </ValueText>
                </ValueItem>
              ))}
            </ValuesList>
          </AboutContent>
        </AboutGrid>
      </Container>
    </Section>
  );
};
