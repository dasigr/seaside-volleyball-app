import React, { useState } from 'react';

import Toast from 'react-bootstrap/Toast';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

import Header from './components/header/Header';
import Advertisement from './components/advertisement/Advertisement';

import imageUrl from './volleyball.jpeg';
import './App.css';

const Footer = () => {
  return (
    <>
      <footer class="pt-4 bg-light">
        <Container>
          <div class="row">
            <div class="col-6 col-md-3 mb-3">
              <h5>Seaside Volleyball</h5>
              <ul class="nav flex-column">
                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Video</a></li>
                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Schedule</a></li>
                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Standings</a></li>
                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Players</a></li>
                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Teams</a></li>
              </ul>
            </div>
    
            <div class="col-6 col-md-3 mb-3">
              <h5>Sponsors</h5>
              <ul class="nav flex-column">
                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Boss</a></li>
                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Madame</a></li>
                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Amo</a></li>
                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Konsehal</a></li>
                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Agawn</a></li>
              </ul>
            </div>
      
            <div class="col-md-5 offset-md-1 mb-3">
              <form>
                <h5>Subscribe to our newsletter</h5>
                <p>Monthly digest of what's new and exciting from us.</p>
                <div class="d-flex flex-column flex-sm-row w-100 gap-2">
                  <label for="newsletter1" class="visually-hidden">Email address</label>
                  <input id="newsletter1" type="text" class="form-control" placeholder="Email address" />
                  <button class="btn btn-primary" type="button">Subscribe</button>
                </div>
              </form>
            </div>
          </div>
      
          <div class="d-flex flex-column flex-sm-row justify-content-between pt-3 mt-3 border-top">
            <small>&copy; 2022 Seaside Volleyball - All rights reserved.</small>
            <ul class="list-unstyled d-flex">
              <li class="ms-3"><a class="link-dark" href="#"><svg class="bi" width="14" height="14"></svg></a></li>
              <li class="ms-3"><a class="link-dark" href="#"><svg class="bi" width="14" height="14"></svg></a></li>
              <li class="ms-3"><a class="link-dark" href="#"><svg class="bi" width="14" height="14"></svg></a></li>
            </ul>
          </div>
        </Container>
      </footer>
    </>
  );
};

const LatestNews = () => {
  return (
    <>
      <Container>
        <div className="row">
          <div className="col-6">
            <div class="card text-bg-dark mb-4">
              <img src={imageUrl} class="card-img" alt="Image" />
              <div class="card-img-overlay d-flex align-items-end">
                <div className="card-content">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  <p class="card-text"><small>Last updated 3 mins ago</small></p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="row">
              <div className="col-6">
                <div class="card text-bg-dark mb-4">
                  <img src={imageUrl} class="card-img" alt="Image" />
                  <div class="card-img-overlay d-flex align-items-end">
                    <div className="card-content">
                      <h6 class="card-title">Some quick example text to build on the card title and make up the card's content</h6>
                      <p class="card-text"><small>Last updated 3 mins ago</small></p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div class="card text-bg-dark mb-4">
                  <img src={imageUrl} class="card-img" alt="Image" />
                  <div class="card-img-overlay d-flex align-items-end">
                    <div className="card-content">
                      <h6 class="card-title">Some quick example text to build on the card title and make up the card's content</h6>
                      <p class="card-text"><small>Last updated 3 mins ago</small></p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div class="card text-bg-dark mb-4">
                  <img src={imageUrl} class="card-img" alt="Image" />
                  <div class="card-img-overlay d-flex align-items-end">
                    <div className="card-content">
                      <h6 class="card-title">Some quick example text to build on the card title and make up the card's content</h6>
                      <p class="card-text"><small>Last updated 3 mins ago</small></p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div class="card text-bg-dark mb-4">
                  <img src={imageUrl} class="card-img" alt="Image" />
                  <div class="card-img-overlay d-flex align-items-end">
                    <div className="card-content">
                      <h6 class="card-title">Some quick example text to build on the card title and make up the card's content</h6>
                      <p class="card-text"><small>Last updated 3 mins ago</small></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

const UpcomingEvents = () => {
  return (
    <>
      <div className="py-5 bg-dark">
        <Container>
          <div class="row">
            <div class="col-3">
              <div class="card text-bg-dark">
                <img src={imageUrl} class="card-img" alt="Image" />
                <div class="card-img-overlay d-flex align-items-end">
                  <div className="card-content">
                    <h6 class="card-title">Some quick example text to build on the card title and make up the card's content</h6>
                    <p class="card-text"><small>Last updated 3 mins ago</small></p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-3">
              <div class="card text-bg-dark">
                <img src={imageUrl} class="card-img" alt="Image" />
                <div class="card-img-overlay d-flex align-items-end">
                  <div className="card-content">
                    <h6 class="card-title">Some quick example text to build on the card title and make up the card's content</h6>
                    <p class="card-text"><small>Last updated 3 mins ago</small></p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-3">
              <div class="card text-bg-dark">
                <img src={imageUrl} class="card-img" alt="Image" />
                <div class="card-img-overlay d-flex align-items-end">
                  <div className="card-content">
                    <h6 class="card-title">Some quick example text to build on the card title and make up the card's content</h6>
                    <p class="card-text"><small>Last updated 3 mins ago</small></p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-3">
              <div class="card text-bg-dark">
                <img src={imageUrl} class="card-img" alt="Image" />
                <div class="card-img-overlay d-flex align-items-end">
                  <div className="card-content">
                    <h6 class="card-title">Some quick example text to build on the card title and make up the card's content</h6>
                    <p class="card-text"><small>Last updated 3 mins ago</small></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

const TeamStandings = () => {
  return (
    <>
      <div className="pt-4 bg-light">
        <Container>
          <h2 class="text-center">Team Standings</h2>
          <div class="row">
            <div class="col-4">
              <div class="card text-bg-dark mb-4">
                <img src={imageUrl} class="card-img" alt="Image" />
                <div class="card-img-overlay d-flex align-items-end">
                  <div className="card-content">
                    <h5 class="card-title">2nd Place</h5>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-4">
              <div class="card text-bg-dark mb-4">
                <img src={imageUrl} class="card-img" alt="Image" />
                <div class="card-img-overlay d-flex align-items-end">
                  <div className="card-content">
                    <h5 class="card-title">1st Place</h5>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-4">
              <div class="card text-bg-dark mb-4">
                <img src={imageUrl} class="card-img" alt="Image" />
                <div class="card-img-overlay d-flex align-items-end">
                  <div className="card-content">
                    <h5 class="card-title">3rd Place</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

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
