import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';

// Lazy load pages
const HomePage = lazy(() => import('./pages/HomePage'));
const QuestionnairePage = lazy(() => import('./pages/QuestionnairePage'));
const SuccessPage = lazy(() => import('./pages/SuccessPage'));

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen animated-bg">
        <div className="min-h-screen bg-gradient-to-b from-black/90 via-transparent to-black/90 backdrop-blur-[2px]">
          <Navbar />
          <Suspense fallback={
            <div className="flex items-center justify-center min-h-screen">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
            </div>
          }>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/questionnaire" element={<QuestionnairePage />} />
              <Route path="/success" element={<SuccessPage />} />
            </Routes>
          </Suspense>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;