import { motion } from 'framer-motion';
import { Autoplay, EffectCoverflow, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import styled from 'styled-components';
import { gallerySlides } from '../../data/images';
import {
  Container,
  GoldLine,
  Section,
  SectionLabel,
  SectionSubtitle,
  SectionTitle,
} from '../../styles/shared';
import { CoverImage } from '../../styles/image';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const GalleryWrapper = styled.div`
  margin-top: 72px;
  position: relative;
  padding: 40px 0 80px;

  .gallery-swiper {
    width: 100%;
    padding: 60px 0 100px;
    overflow: visible;
  }

  .swiper-slide {
    width: 320px;
    height: 420px;
    border-radius: 6px;
    overflow: hidden;
    background: ${({ theme }) => theme.colors.bgCard};
    border: 1px solid ${({ theme }) => theme.colors.border};
    box-shadow: ${({ theme }) => theme.shadows.card};
    transition: border-color 0.3s ease;

    @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
      width: 380px;
      height: 480px;
    }
  }

  .swiper-slide-active {
    border-color: ${({ theme }) => theme.colors.borderHover};
  }

  .swiper-button-prev,
  .swiper-button-next {
    color: ${({ theme }) => theme.colors.gold};
    width: 44px;
    height: 44px;
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: 50%;
    background: rgba(8, 8, 8, 0.7);
    backdrop-filter: blur(8px);
    transition: all 0.3s ease;

    &::after {
      font-size: 16px;
      font-weight: 700;
    }

    &:hover {
      border-color: ${({ theme }) => theme.colors.gold};
      box-shadow: ${({ theme }) => theme.shadows.glow};
    }
  }

  .swiper-button-prev {
    left: 8px;
  }

  .swiper-button-next {
    right: 8px;
  }

  .swiper-pagination-bullet {
    background: ${({ theme }) => theme.colors.textDim};
    opacity: 1;
    width: 8px;
    height: 8px;
    transition: all 0.3s ease;
  }

  .swiper-pagination-bullet-active {
    background: ${({ theme }) => theme.colors.gold};
    width: 24px;
    border-radius: 4px;
  }
`;

const SlideInner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const SlideImage = styled(CoverImage)`
  filter: saturate(0.9) brightness(0.85);
  transition: filter 0.5s ease, transform 0.5s ease;

  .swiper-slide-active & {
    filter: saturate(1) brightness(1);
    transform: scale(1.02);
  }
`;

const SlideOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to top,
    rgba(8, 8, 8, 0.92) 0%,
    rgba(8, 8, 8, 0.2) 50%,
    transparent 100%
  );
`;

const SlideContent = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 28px 24px;
  z-index: 2;
`;

const SlideTitle = styled.h3`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 6px;
`;

const SlideSubtitle = styled.p`
  font-size: 0.85rem;
  color: ${({ theme }) => theme.colors.textMuted};
  letter-spacing: 0.03em;
`;

const GlowBg = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 60%;
  height: 60%;
  background: radial-gradient(
    circle,
    rgba(201, 169, 110, 0.08) 0%,
    transparent 70%
  );
  pointer-events: none;
`;

export const GallerySlider = () => {
  return (
    <Section id="gallery">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
        >
          <SectionLabel>Галерея</SectionLabel>
          <SectionTitle>Наши работы</SectionTitle>
          <GoldLine />
          <SectionSubtitle>
            Вдохновляющие образы, атмосфера салона и результаты процедур —
            листайте 3D-галерею.
          </SectionSubtitle>
        </motion.div>

        <GalleryWrapper>
          <GlowBg />
          <Swiper
            className="gallery-swiper"
            effect="coverflow"
            grabCursor
            centeredSlides
            slidesPerView="auto"
            loop
            speed={800}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            coverflowEffect={{
              rotate: 42,
              stretch: 0,
              depth: 160,
              modifier: 1.2,
              slideShadows: true,
            }}
            pagination={{ clickable: true }}
            navigation
            modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
          >
            {gallerySlides.map((slide) => (
              <SwiperSlide key={slide.title}>
                <SlideInner>
                  <SlideImage src={slide.image} alt={slide.title} loading="lazy" />
                  <SlideOverlay />
                  <SlideContent>
                    <SlideTitle>{slide.title}</SlideTitle>
                    <SlideSubtitle>{slide.subtitle}</SlideSubtitle>
                  </SlideContent>
                </SlideInner>
              </SwiperSlide>
            ))}
          </Swiper>
        </GalleryWrapper>
      </Container>
    </Section>
  );
};
