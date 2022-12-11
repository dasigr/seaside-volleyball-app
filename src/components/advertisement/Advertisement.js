import Container from 'react-bootstrap/Container';

import adsUrl from './ads.jpeg';

const Advertisement = () => {
  return (
    <>
      <Container className="py-4">
        <img src={adsUrl} alt="Advertisement" class="rounded mx-auto d-block" />
      </Container>
    </>
  );
};

export default Advertisement;
