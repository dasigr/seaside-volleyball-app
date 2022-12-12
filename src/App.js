import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import Video from './pages/Video';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Advertisement from './components/advertisement/Advertisement';
import LatestNews from './components/latest-news/LatestNews';
import UpcomingEvents from './components/upcoming-events/UpcomingEvents';
import TeamStandings from './components/team-standings/TeamStandings';

import './App.css';

const App = () => (
  <Router>
    <div className="page">
      <Header></Header>
      <section className="main">
        <Routes>
          <Route exact path='/' element={<Home></Home>} />
          <Route path='/video' element={<Video ></Video>} />
        </Routes>
      </section>
      <Footer></Footer>
    </div>
  </Router>
);

export default App;
