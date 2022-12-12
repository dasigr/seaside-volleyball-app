import Container from 'react-bootstrap/Container';
import { useParams } from "react-router-dom";

function SponsorDetail() {
  const params = useParams()

  return (
    <>
      <Container className='py-4'>
        <h1>Sponsor: {params.name}</h1>
      </Container>
    </>
  )
}

export default SponsorDetail;
