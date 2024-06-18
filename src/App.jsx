import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import { AboutUs, Chef, FindUs, Footer, Gallery, Header, Intro, Laurels, SpecialMenu } from './container';
import { Navbar } from './components';
import Registration from './pages/Registration/Registration';
import  UnderDevelopment from './container/dev/UnderDevelopment'

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <Header />
            <AboutUs />
            <SpecialMenu />
            <Chef />
            <Intro />
            <Laurels />
            <Gallery />
            <FindUs />
            <Footer />
          </>
        } />
        <Route path="/registration" element={<Registration />} />
        <Route path="/login" element={< UnderDevelopment />} />
        {/* UnderDevelopment */}
      </Routes>
    </div>
  );
}

export default App;
