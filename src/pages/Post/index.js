import { useParams } from "react-router-dom"
import { useFetchDocument } from "../../hooks/useFetchDocument";

import "./index.scss"

const Post = () => {
  const { id } = useParams();
  const { document: post } = useFetchDocument("posts", id);
  return (
    <>
      {post && (
        <div className="post-detail">
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
        </div>
      )}
    </>
  )
}

export default Post;
