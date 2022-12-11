import Container from 'react-bootstrap/Container';

import imageUrl from './volleyball.jpeg';

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

export default LatestNews;
