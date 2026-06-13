import styled from 'styled-components';
import { Header } from './components/Header/Header';
import { Hero } from './components/Hero/Hero';
import { Services } from './components/Services/Services';
import { About } from './components/About/About';
import { Contact } from './components/Contact/Contact';
import { Footer } from './components/Footer/Footer';

const AppWrapper = styled.div`
  position: relative;
  min-height: 100vh;
`;

const DividerGlow = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 1px;
  height: 200px;
  background: linear-gradient(
    to bottom,
    transparent,
    ${({ theme }) => theme.colors.gold},
    transparent
  );
  opacity: 0.3;
  pointer-events: none;
`;

function App() {
  return (
    <AppWrapper>
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <Contact />
      </main>
      <Footer />
      <DividerGlow style={{ top: '100vh' }} />
    </AppWrapper>
  );
}

export default App;
