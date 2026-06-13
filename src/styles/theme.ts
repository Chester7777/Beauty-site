export const theme = {
  colors: {
    bg: '#080808',
    bgElevated: '#111111',
    bgCard: '#161616',
    surface: '#1c1c1c',
    gold: '#c9a96e',
    goldLight: '#e8d5a8',
    goldDark: '#8a7348',
    text: '#f5f0e8',
    textMuted: '#9a9488',
    textDim: '#5c5850',
    border: 'rgba(201, 169, 110, 0.15)',
    borderHover: 'rgba(201, 169, 110, 0.35)',
    accent: '#d4a574',
    error: '#e57373',
    success: '#81c784',
  },
  fonts: {
    heading: "'Cormorant Garamond', Georgia, serif",
    body: "'Manrope', system-ui, sans-serif",
  },
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
  },
  shadows: {
    glow: '0 0 60px rgba(201, 169, 110, 0.12)',
    card: '0 24px 48px rgba(0, 0, 0, 0.4)',
  },
  transitions: {
    fast: '0.2s ease',
    medium: '0.4s ease',
    slow: '0.6s ease',
  },
} as const;

export type Theme = typeof theme;
