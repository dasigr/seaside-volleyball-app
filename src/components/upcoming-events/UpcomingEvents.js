import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';

import imageUrl from './volleyball.jpeg';

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
                    <p class="card-text mb-0"><small>Last updated 3 mins ago</small></p>
                    <Link to="/article/card-title" class="overlay-link">Read more</Link>
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
                    <p class="card-text mb-0"><small>Last updated 3 mins ago</small></p>
                    <Link to="/article/card-title" class="overlay-link">Read more</Link>
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
                    <p class="card-text mb-0"><small>Last updated 3 mins ago</small></p>
                    <Link to="/article/card-title" class="overlay-link">Read more</Link>
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
                    <p class="card-text mb-0"><small>Last updated 3 mins ago</small></p>
                    <Link to="/article/card-title" class="overlay-link">Read more</Link>
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

export default UpcomingEvents;
