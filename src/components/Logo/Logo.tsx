import { motion } from 'framer-motion';
import styled, { keyframes } from 'styled-components';

type LogoSize = 'sm' | 'md' | 'lg';

interface LogoProps {
  size?: LogoSize;
  as?: 'div' | 'a';
  href?: string;
  onClick?: () => void;
  animated?: boolean;
}

const sizes: Record<LogoSize, { font: string; icon: number; gap: string }> = {
  sm: { font: '1.35rem', icon: 28, gap: '10px' },
  md: { font: '1.75rem', icon: 34, gap: '12px' },
  lg: { font: '2.25rem', icon: 42, gap: '14px' },
};

const glow = keyframes`
  0%, 100% { opacity: 0.5; transform: scale(1); }
  50% { opacity: 1; transform: scale(1.08); }
`;

const shimmer = keyframes`
  0% { background-position: 0% 50%; }
  100% { background-position: 200% 50%; }
`;

const LogoWrapper = styled(motion.a)<{ $size: LogoSize }>`
  display: inline-flex;
  align-items: center;
  gap: ${({ $size }) => sizes[$size].gap};
  text-decoration: none;
  color: inherit;
  cursor: pointer;
`;

const LogoStatic = styled.div<{ $size: LogoSize }>`
  display: inline-flex;
  align-items: center;
  gap: ${({ $size }) => sizes[$size].gap};
`;

const IconWrap = styled.div<{ $animated?: boolean; $iconSize: number }>`
  position: relative;
  width: ${({ $iconSize }) => $iconSize}px;
  height: ${({ $iconSize }) => $iconSize}px;
  flex-shrink: 0;

  svg {
    width: 100%;
    height: 100%;
    display: block;
  }

  &::after {
    content: '';
    position: absolute;
    inset: -4px;
    border-radius: 50%;
    background: radial-gradient(
      circle,
      rgba(201, 169, 110, 0.25) 0%,
      transparent 70%
    );
    animation: ${({ $animated }) => ($animated ? glow : 'none')} 3s ease-in-out infinite;
    pointer-events: none;
  }
`;

const BrandName = styled.span<{ $size: LogoSize }>`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: ${({ $size }) => sizes[$size].font};
  font-weight: 600;
  letter-spacing: 0.06em;
  line-height: 1;
  color: ${({ theme }) => theme.colors.text};

  em {
    font-style: italic;
    background: linear-gradient(
      120deg,
      ${({ theme }) => theme.colors.goldLight} 0%,
      ${({ theme }) => theme.colors.gold} 45%,
      ${({ theme }) => theme.colors.goldDark} 100%
    );
    background-size: 200% auto;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    animation: ${shimmer} 6s linear infinite;
  }
`;

const LogoIcon = () => (
  <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <circle cx="20" cy="20" r="18" stroke="url(#logoRing)" strokeWidth="0.75" />
    <path
      d="M20 6 L22.2 16.5 L33 18.5 L22.2 20.5 L20 31 L17.8 20.5 L7 18.5 L17.8 16.5 Z"
      fill="url(#logoStar)"
    />
    <circle cx="20" cy="18.5" r="2" fill="#e8d5a8" opacity="0.9" />
    <defs>
      <linearGradient id="logoRing" x1="4" y1="4" x2="36" y2="36">
        <stop stopColor="#8a7348" />
        <stop offset="0.5" stopColor="#c9a96e" />
        <stop offset="1" stopColor="#e8d5a8" />
      </linearGradient>
      <linearGradient id="logoStar" x1="7" y1="6" x2="33" y2="31">
        <stop stopColor="#e8d5a8" />
        <stop offset="0.5" stopColor="#c9a96e" />
        <stop offset="1" stopColor="#8a7348" />
      </linearGradient>
    </defs>
  </svg>
);

const LogoContent = ({
  size,
  animated,
}: {
  size: LogoSize;
  animated: boolean;
}) => {
  const iconSize = sizes[size].icon;
  return (
    <>
      <IconWrap $animated={animated} $iconSize={iconSize}>
        <LogoIcon />
      </IconWrap>
      <BrandName $size={size}>
        Lumi<em>ère</em>
      </BrandName>
    </>
  );
};

export const Logo = ({
  size = 'md',
  as = 'a',
  href = '#hero',
  onClick,
  animated = true,
}: LogoProps) => {
  if (as === 'div') {
    return (
      <LogoStatic $size={size}>
        <LogoContent size={size} animated={animated} />
      </LogoStatic>
    );
  }

  return (
    <LogoWrapper
      href={href}
      onClick={onClick}
      $size={size}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <LogoContent size={size} animated={animated} />
    </LogoWrapper>
  );
};
