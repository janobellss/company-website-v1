import React, { useState } from 'react';

// import './App.css';
import './dist/css/App.css';

// COMPONENT CONTENTS
import Header from './components/Header/Header';
import HeroBanner from './components/HeroBanner/HeroBanner';
import SiteContents from './components/SiteContents/SiteContents';
import Footer from './components/Footer/Footer';

// FONTAWESOME
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';

// ADD FONTAWESOME TO LIBRARY
library.add(fab, fas);

const App = () => {
  const [isMenuOpen, setOpenMenu] = useState(false);
  const toggleMenu = () => setOpenMenu(isMenuOpen => !isMenuOpen);

  // console.log("IS MEUN OPEN? " + isMenuOpen);

  return (
    <div className='App'>
      <Header isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      <HeroBanner />
      <SiteContents />
      <Footer />
    </div>
  );
}

export default App;