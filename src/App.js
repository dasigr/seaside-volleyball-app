import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import Video from './pages/Video';
import SponsorDetail from './pages/SponsorDetail';
import ArticleDetail from './pages/ArticleDetail';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';

import './App.css';

const App = () => (
  <BrowserRouter>
    <div className="page">
      <Header></Header>
      <section className="main">
        <Routes>
          <Route exact path='/' element={<Home></Home>} />
          <Route path='/video' element={<Video></Video>} />
          <Route path='/sponsors/:name' element={<SponsorDetail ></SponsorDetail>} />
          <Route path='/article/:slug' element={<ArticleDetail ></ArticleDetail>} />
        </Routes>
      </section>
      <Footer></Footer>
    </div>
  </BrowserRouter>
);

export default App;
