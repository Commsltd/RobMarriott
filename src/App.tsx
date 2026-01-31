import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
// BYPASSING BARREL FILE TO PREVENT CIRCULAR DEPENDENCY DEADLOCK
import { HomePage } from './pages/HomePage';
import { CapabilitiesPage } from './pages/CapabilitiesPage';
import { DiagnosticPage } from './pages/DiagnosticPage';
import { InsightsPage } from './pages/InsightsPage';
import { PrivacyPage } from './pages/PrivacyPage';
import { TermsPage } from './pages/TermsPage';
import { ScrollToTop } from './components/ScrollToTop';
import { TransitionWrapper } from './components/TransitionWrapper';

console.log('App.tsx: Module evaluating...');

function App() {
  const location = useLocation();
  console.log('App.tsx: Component rendering...');

  return (
    <>
      <ScrollToTop />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<TransitionWrapper><HomePage /></TransitionWrapper>} />
          <Route path="/capabilities" element={<TransitionWrapper><CapabilitiesPage /></TransitionWrapper>} />
          <Route path="/diagnostic" element={<TransitionWrapper><DiagnosticPage /></TransitionWrapper>} />
          <Route path="/insights" element={<TransitionWrapper><InsightsPage /></TransitionWrapper>} />
          <Route path="/insights/:slug" element={<TransitionWrapper><InsightsPage /></TransitionWrapper>} />
          <Route path="/privacy" element={<TransitionWrapper><PrivacyPage /></TransitionWrapper>} />
          <Route path="/terms" element={<TransitionWrapper><TermsPage /></TransitionWrapper>} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
