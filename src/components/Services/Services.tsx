import { motion } from 'framer-motion';
import styled from 'styled-components';
import {
  Container,
  GoldLine,
  Section,
  SectionLabel,
  SectionSubtitle,
  SectionTitle,
} from '../../styles/shared';

const services = [
  {
    icon: '✦',
    title: 'Стрижки и укладки',
    description:
      'Авторские стрижки, окрашивание и укладки от ведущих стилистов салона.',
    price: 'от 3 500 ₽',
  },
  {
    icon: '◈',
    title: 'Маникюр и педикюр',
    description:
      'Премиальный уход за руками и ногами, дизайн любой сложности.',
    price: 'от 2 800 ₽',
  },
  {
    icon: '◇',
    title: 'Косметология',
    description:
      'Профессиональные процедуры для сияния и молодости кожи.',
    price: 'от 5 000 ₽',
  },
  {
    icon: '◎',
    title: 'Макияж',
    description:
      'Вечерний, свадебный и повседневный макияж с индивидуальным подходом.',
    price: 'от 4 200 ₽',
  },
  {
    icon: '❋',
    title: 'SPA-ритуалы',
    description:
      'Расслабляющие программы для тела и лица в атмосфере полного покоя.',
    price: 'от 6 500 ₽',
  },
  {
    icon: '✧',
    title: 'Брови и ресницы',
    description:
      'Архитектура бровей, ламинирование и наращивание ресниц.',
    price: 'от 1 900 ₽',
  },
];

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
  margin-top: 64px;

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const ServiceCard = styled(motion.article)`
  position: relative;
  padding: 40px 32px;
  background: ${({ theme }) => theme.colors.bgCard};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 4px;
  overflow: hidden;
  transition: border-color ${({ theme }) => theme.transitions.medium};

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(
      90deg,
      transparent,
      ${({ theme }) => theme.colors.gold},
      transparent
    );
    opacity: 0;
    transition: opacity ${({ theme }) => theme.transitions.medium};
  }

  &:hover {
    border-color: ${({ theme }) => theme.colors.borderHover};

    &::before {
      opacity: 1;
    }
  }
`;

const ServiceIcon = styled.div`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.gold};
  margin-bottom: 24px;
`;

const ServiceTitle = styled.h3`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 1.5rem;
  margin-bottom: 12px;
  color: ${({ theme }) => theme.colors.text};
`;

const ServiceDescription = styled.p`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.textMuted};
  line-height: 1.7;
  margin-bottom: 24px;
`;

const ServicePrice = styled.span`
  font-size: 0.85rem;
  font-weight: 600;
  letter-spacing: 0.05em;
  color: ${({ theme }) => theme.colors.gold};
`;

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  }),
};

export const Services = () => {
  return (
    <Section id="services">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
        >
          <SectionLabel>Услуги</SectionLabel>
          <SectionTitle>Что мы предлагаем</SectionTitle>
          <GoldLine />
          <SectionSubtitle>
            Каждая процедура — это ритуал заботы о себе. Мы используем только
            премиальную косметику и современные техники.
          </SectionSubtitle>
        </motion.div>

        <ServicesGrid>
          {services.map((service, i) => (
            <ServiceCard
              key={service.title}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              custom={i}
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
            >
              <ServiceIcon>{service.icon}</ServiceIcon>
              <ServiceTitle>{service.title}</ServiceTitle>
              <ServiceDescription>{service.description}</ServiceDescription>
              <ServicePrice>{service.price}</ServicePrice>
            </ServiceCard>
          ))}
        </ServicesGrid>
      </Container>
    </Section>
  );
};
