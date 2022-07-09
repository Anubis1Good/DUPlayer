import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import FooterDU from './component/FooterDU';
import HeaderDU from './component/HeaderDU';
import NavBar from './component/NavBar';
import Loader from './UI/Loader';
const MainPage = lazy(() => import('./pages/MainPage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const ErrorPage = lazy(() => import('./pages/ErrorPage'));
const ArtistPage = lazy(() => import('./pages/ArtistPage'));






function App() {
  return (
    <Router>
      <HeaderDU/>
      <NavBar/>
    <Suspense fallback={<Loader/>}>
      <Routes>
        <Route path="/" element={<MainPage/>} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="*" element={<ErrorPage/>} />
        <Route path="/artists" element={<ArtistPage/>} />
      </Routes>
    </Suspense>
    <FooterDU/>
  </Router>
  )
  
}

export default App;