import Container from 'react-bootstrap/Container';
import { useParams } from "react-router-dom";

function ArticleDetail() {
  const params = useParams()

  return (
    <>
      <Container className='py-4'>
        <h1>Article: {params.slug}</h1>
      </Container>
    </>
  )
}

export default ArticleDetail;
