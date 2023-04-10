import { Link } from 'react-router-dom';
import PostDetail from '../../components/PostDetail';
import { useFetchDocuments } from '../../hooks/useFetchDocuments'
import { useQuery } from '../../hooks/useQuey'

import './index.scss'

const Search = () => {
  const query = useQuery();
  const search = query.get("q");
  const { documents: posts } = useFetchDocuments("posts", search);

  return (
    <div className="search-container">
      <h2>Search</h2>
      <>
        {posts && posts.length === 0 ? (
          <>
            <p>Não foram encontrados posts a partir da sua busca...</p>
            <Link to="/" className="btn btn-dark" >Voltar</Link>
          </>
        ) : (
          <>
            {posts && (
              posts.map(post => <PostDetail key={post.id} post={post} />)
            )}
          </>
        )}
      </>
    </div>
  )
}

export default Search