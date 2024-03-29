import { useState, useEffect } from 'react';
import { useAuthentication } from '../../hooks/useAuthentication';

import './index.scss'

const SignUp = () => {
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const { createUser, error: authError, loading } = useAuthentication();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    const user = { displayName, email, password };

    if (password !== confirmPassword) {
      setError("As senhas precisam ser iguais!");
      return;
    }
    await createUser(user);
  }

  useEffect(() => {
    if (authError) {
      setError(authError);
    }
  }, [authError])

  return (
    <div className='form'>
      <h1>Cadastre-se para postar!</h1>
      <p>Crie sua conta e compartilhe suas histórias</p>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Nome:</span>
          <input type="text" name="name" required placeholder="Nome do usuário" value={displayName} onChange={e => setDisplayName(e.target.value)} />
        </label>
        <label>
          <span>E-mail:</span>
          <input type="email" name="email" required placeholder="E-mail do usuário" value={email} onChange={e => setEmail(e.target.value)} />
        </label>
        <label>
          <span>Senha:</span>
          <input type="password" name="password" required placeholder="Defina uma senha" value={password} onChange={e => setPassword(e.target.value)} />
        </label>
        <label>
          <span>Confirmação de senha:</span>
          <input type="password" name="confirmPassword" required placeholder="Confirme a sua senha" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} />
        </label>
        {loading ? (
          <button className="btn" disabled>Aguarde...</button>
        ) : (
          <button className="btn">Cadastrar</button>
        )}
        {error && (
          <p className='error'>{error}</p>
        )}
      </form>
    </div>
  )
}

export default SignUp;
