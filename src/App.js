import React, { useState } from 'react';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Advertisement from './components/advertisement/Advertisement';
import LatestNews from './components/latest-news/LatestNews';
import UpcomingEvents from './components/upcoming-events/UpcomingEvents';
import TeamStandings from './components/team-standings/TeamStandings';

import './App.css';

const App = () => (
  <div className="page">
    <Header></Header>
    <section className="main">
      <Advertisement></Advertisement>
      <LatestNews></LatestNews>
      <UpcomingEvents></UpcomingEvents>
      <TeamStandings></TeamStandings>
      <Advertisement></Advertisement>
    </section>
    <Footer></Footer>
  </div>
);

export default App;
