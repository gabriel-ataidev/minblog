import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthValue } from '../../context/AuthContext'
import './index.scss'

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [body, setBody] = useState("");
  const [tags, setTags] = useState([]);
  const [formError, setFormError] = useState("");
  const handleSubmit = e => {
    e.preventDefault();
  }
  return (
    <div className='form'>
      <h2>Criar post</h2>
      <p>Escreva sobre o que quiser e compartilhe!</p>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Título:</span>
          <input
            type="text"
            name='title'
            required
            placeholder='Título da foto'
            onChange={e => setTitle(e.target.value)}
            value={title} />
        </label>
        <label>
          <span>URL da imagem:</span>
          <input
            type="text"
            name='image'
            required
            placeholder='Insira uma imagem'
            onChange={e => setImage(e.target.value)}
            value={image} />
        </label>
        <label>
          <span>Conteúdo:</span>
          <textarea
            name='body'
            required
            placeholder='Insira o conteúdo do post'
            onChange={e => setBody(e.target.value)}
            value={body} />
        </label>
        <label>
          <span>Legenda:</span>
          <input
            type="text"
            name='tags'
            required
            placeholder='Insira as tags separadas por vírgula'
            onChange={e => setTags(e.target.value)}
            value={tags} />
        </label>
        <button className="btn">Publicar</button>
      </form>
    </div>
  )
}

export default CreatePost;
