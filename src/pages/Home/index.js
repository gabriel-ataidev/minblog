import { useNavigate, Link } from "react-router-dom"
import { useState } from "react";
import "./index.scss";
import { useFetchDocuments } from "../../hooks/useFetchDocuments";
import PostDetail from "../../components/PostDetail";

const Home = () => {
  const [query, setQuery] = useState("");
  const {documents: posts, loading} = useFetchDocuments("posts");
  const navigate = useNavigate();
  const handleSubmit = e => {
    e.preventDefault();

    if(query) {
      return navigate(`/search?q=${query}`)
    }
  }
  return (
    <div className="home">
      <div className='search_form'>
        <h1>Veja os nossos posts mais recentes</h1>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Ou busque por tags..." onChange={e => setQuery(e.target.value)} />
          <button className="btn btn-dark">Pesquisar</button>
        </form>
      </div>
      <div className="posts">
        {posts && posts.length === 0 ? (
          <div className="no_posts">
            <p>Não foram encontrados posts</p>
            <Link className="btn" to="/post/create">
              Criar primeiro post
            </Link>
          </div>
        ) : (
          <>
          {posts && posts.map(post => (
          <PostDetail key={post.id} post={post} />
          ))}
          </>
        )}
        {loading && <p>Carregando...</p>}
      </div>
    </div>
  )
}

export default Home;
