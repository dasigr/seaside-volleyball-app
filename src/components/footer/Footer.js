import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <>
      <footer class="pt-4 bg-light">
        <Container>
          <div class="row">
            <div class="col-6 col-md-3 mb-3">
              <h5>Seaside Volleyball</h5>
              <ul class="nav flex-column">
                <li class="nav-item mb-2"><Link to="/video" class="nav-link p-0 text-muted">Video</Link></li>
                <li class="nav-item mb-2"><Link to="/schedule" class="nav-link p-0 text-muted">Schedule</Link></li>
                <li class="nav-item mb-2"><Link to="/standings" class="nav-link p-0 text-muted">Standings</Link></li>
                <li class="nav-item mb-2"><Link to="/players" class="nav-link p-0 text-muted">Players</Link></li>
                <li class="nav-item mb-2"><Link to="/teams" class="nav-link p-0 text-muted">Teams</Link></li>
              </ul>
            </div>
    
            <div class="col-6 col-md-3 mb-3">
              <h5>Sponsors</h5>
              <ul class="nav flex-column">
                <li class="nav-item mb-2"><Link to="/sponsors/boss" class="nav-link p-0 text-muted">Boss</Link></li>
                <li class="nav-item mb-2"><Link to="/sponsors/madame" class="nav-link p-0 text-muted">Madame</Link></li>
                <li class="nav-item mb-2"><Link to="/sponsors/amo" class="nav-link p-0 text-muted">Amo</Link></li>
                <li class="nav-item mb-2"><Link to="/sponsors/konsehal" class="nav-link p-0 text-muted">Konsehal</Link></li>
                <li class="nav-item mb-2"><Link to="/sponsors/agawn" class="nav-link p-0 text-muted">Agawn</Link></li>
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

export default Footer;
