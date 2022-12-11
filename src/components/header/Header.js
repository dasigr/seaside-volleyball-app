import Container from 'react-bootstrap/Container';

import logo from './logo.png';

const Header = () => {
  return (
    <>
      <header class="py-3 text-bg-dark">
        <Container>
          <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <a href="/" class="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
              <img src={logo} class="bi me-2" alt="logo" width="40" height="40" role="img" aria-label="Bootstrap" />
            </a>

            <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
              <li><a href="#" class="nav-link px-2 text-white">Video</a></li>
              <li><a href="#" class="nav-link px-2 text-white">Schedule</a></li>
              <li><a href="#" class="nav-link px-2 text-white">Standings</a></li>
              <li><a href="#" class="nav-link px-2 text-white">Players</a></li>
              <li><a href="#" class="nav-link px-2 text-white">Teams</a></li>
            </ul>

            <form class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
              <input type="search" class="form-control form-control-dark text-bg-dark" placeholder="Search..." aria-label="Search" />
            </form>

            <div class="text-end">
              <button type="button" class="btn btn-outline-light me-2">Login</button>
              <button type="button" class="btn btn-warning">Sign-up</button>
            </div>
          </div>
        </Container>
      </header>
    </>
  );
};

export default Header;
