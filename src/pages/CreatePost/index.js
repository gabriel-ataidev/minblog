import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthValue } from '../../context/AuthContext'
import { useInsertDocument } from '../../hooks/useInsertDocument';
import './index.scss'

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [body, setBody] = useState("");
  const [tags, setTags] = useState([]);
  const [formError, setFormError] = useState("");

  const { user } = useAuthValue();
  const { insertDocument, response } = useInsertDocument("posts");
  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();
    setFormError("");

    //validate image URL
    try {
      new URL(image);
    } catch (error) {
      setFormError("A URL precisa ser válida.")
    }

    //criar o array de tags
    const tagsArray = tags.split(",").map(tag => tag.trim().toLowerCase());

    //verificar valores
    if (!title || !image || !tags || !body) {
      setFormError("Por favor preencha todos os campos");
      return;
    }
    if (formError) return;

    insertDocument({
      title,
      image,
      body,
      tagsArray,
      uid: user.uid,
      createdBy: user.displayName,
    })

    //redirect to home page
    navigate('/');
  }
  return (
    <div className='form'>
      <h1>Criar post</h1>
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
        {response.loading ? (
          <button className="btn" disabled>Aguarde...</button>
        ) : (
          <button className="btn">Publicar</button>
        )}
        {response.error && (
          <p className='error'>{response.error}</p>
        )}
        {formError && (
          <p className='error'>{formError}</p>
        )}
      </form>
    </div>
  )
}

export default CreatePost;
