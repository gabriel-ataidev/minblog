import './PostDetail.scss'
import { Link } from 'react-router-dom'

const PostDetail = ({ post }) => {
  return (
    <div className="post_detail">
      <img src={post.image} alt={post.title} />
      <h2>{post.title}</h2>
      <p className="createdby">por: {post.createdBy}</p>
      <div className="tags">
        {post.tagsArray.map((tag) => (
          <p key={tag}>
            <span>#</span>
            {tag}
          </p>
        ))}
      </div>
      <Link to={`/posts/${post.id}`} className="btn btn-outline">
        Ler
      </Link>
    </div>
  )
}

export default PostDetail;
