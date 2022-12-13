import Container from 'react-bootstrap/Container';
import { useParams } from "react-router-dom";

import Article from '../components/article/Article';

function ArticleDetail() {
  const params = useParams()

  return (
    <>
      <Article></Article>
    </>
  )
}

export default ArticleDetail;
