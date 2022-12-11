import Container from 'react-bootstrap/Container';

import imageUrl from './volleyball.jpeg';

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

export default TeamStandings;
