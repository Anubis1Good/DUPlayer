import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

const MainPage = lazy(() => import('./pages/MainPage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const ErrorPage = lazy(() => import('./pages/ErrorPage'));
const ArtistPage = lazy(() => import('./pages/ArtistPage'));





function App() {
  return (
    <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<MainPage/>} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="*" element={<ErrorPage/>} />
        <Route path="/artist" element={<ArtistPage/>} />
      </Routes>
    </Suspense>
  </Router>
  )
  
}

export default App;