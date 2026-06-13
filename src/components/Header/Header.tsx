import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import styled from 'styled-components';
import { Container } from '../../styles/shared';

const navItems = [
  { label: 'Главная', href: '#hero' },
  { label: 'Услуги', href: '#services' },
  { label: 'О нас', href: '#about' },
  { label: 'Контакты', href: '#contact' },
];

const HeaderWrapper = styled(motion.header)<{ $scrolled: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: 20px 0;
  background: ${({ $scrolled }) =>
    $scrolled ? 'rgba(8, 8, 8, 0.92)' : 'transparent'};
  backdrop-filter: ${({ $scrolled }) => ($scrolled ? 'blur(20px)' : 'none')};
  border-bottom: ${({ $scrolled, theme }) =>
    $scrolled ? `1px solid ${theme.colors.border}` : '1px solid transparent'};
  transition: all ${({ theme }) => theme.transitions.medium};
`;

const HeaderInner = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.a`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 1.75rem;
  font-weight: 600;
  letter-spacing: 0.05em;
  color: ${({ theme }) => theme.colors.text};
  position: relative;

  span {
    color: ${({ theme }) => theme.colors.gold};
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 0;
    height: 1px;
    background: ${({ theme }) => theme.colors.gold};
    transition: width ${({ theme }) => theme.transitions.medium};
  }

  &:hover::after {
    width: 100%;
  }
`;

const Nav = styled.nav`
  display: none;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    display: flex;
    align-items: center;
    gap: 40px;
  }
`;

const NavLink = styled(motion.a)`
  font-size: 0.85rem;
  font-weight: 500;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.textMuted};
  position: relative;
  padding: 4px 0;

  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: ${({ theme }) => theme.colors.gold};
    opacity: 0;
    transition: opacity ${({ theme }) => theme.transitions.fast};
  }

  &:hover {
    color: ${({ theme }) => theme.colors.text};

    &::before {
      opacity: 1;
    }
  }
`;

const BookButton = styled(motion.a)`
  display: none;
  padding: 12px 28px;
  font-size: 0.8rem;
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
  transition: box-shadow ${({ theme }) => theme.transitions.medium};

  &:hover {
    box-shadow: ${({ theme }) => theme.shadows.glow};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    display: inline-block;
  }
`;

const BurgerButton = styled.button<{ $open: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 6px;
  width: 32px;
  height: 32px;
  z-index: 1001;

  span {
    display: block;
    width: 100%;
    height: 1px;
    background: ${({ theme }) => theme.colors.gold};
    transition: all ${({ theme }) => theme.transitions.fast};
    transform-origin: center;

    &:nth-child(1) {
      transform: ${({ $open }) =>
        $open ? 'rotate(45deg) translateY(7px)' : 'none'};
    }

    &:nth-child(2) {
      opacity: ${({ $open }) => ($open ? 0 : 1)};
      transform: ${({ $open }) => ($open ? 'scaleX(0)' : 'none')};
    }

    &:nth-child(3) {
      transform: ${({ $open }) =>
        $open ? 'rotate(-45deg) translateY(-7px)' : 'none'};
    }
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    display: none;
  }
`;

const MobileMenu = styled(motion.div)`
  position: fixed;
  inset: 0;
  background: rgba(8, 8, 8, 0.97);
  backdrop-filter: blur(30px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 32px;
  z-index: 999;
`;

const MobileNavLink = styled(motion.a)`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 2.5rem;
  color: ${({ theme }) => theme.colors.text};
  letter-spacing: 0.05em;

  &:hover {
    color: ${({ theme }) => theme.colors.gold};
  }
`;

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <HeaderWrapper
        $scrolled={scrolled}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <HeaderInner>
          <Logo href="#hero" onClick={closeMenu}>
            Lumi<span>ère</span>
          </Logo>

          <Nav>
            {navItems.map((item, i) => (
              <NavLink
                key={item.href}
                href={item.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i + 0.3 }}
                whileHover={{ y: -2 }}
              >
                {item.label}
              </NavLink>
            ))}
          </Nav>

          <BookButton
            href="#contact"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            Записаться
          </BookButton>

          <BurgerButton
            $open={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Меню"
          >
            <span />
            <span />
            <span />
          </BurgerButton>
        </HeaderInner>
      </HeaderWrapper>

      <AnimatePresence>
        {menuOpen && (
          <MobileMenu
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {navItems.map((item, i) => (
              <MobileNavLink
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ delay: i * 0.08 }}
              >
                {item.label}
              </MobileNavLink>
            ))}
          </MobileMenu>
        )}
      </AnimatePresence>
    </>
  );
};
