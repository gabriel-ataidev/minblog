import { useState, useEffect } from 'react';
import { useAuthentication } from '../../hooks/useAuthentication';

import './index.scss'

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login, error: authError, loading } = useAuthentication();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    const user = { email, password };

    await login(user);
  }

  useEffect(() => {
    if (authError) {
      setError(authError);
    }
  }, [authError])
  return (
    <div className='form'>
    <h1>Entrar</h1>
    <p>Faça login para utilizar o sistema</p>
    <form onSubmit={handleSubmit}>
      <label>
        <span>E-mail:</span>
        <input type="email" name="email" required placeholder="E-mail do usuário" value={email} onChange={e => setEmail(e.target.value)} />
      </label>
      <label>
        <span>Senha:</span>
        <input type="password" name="password" required placeholder="Defina uma senha" value={password} onChange={e => setPassword(e.target.value)} />
      </label>
      {loading ? (
        <button className="btn" disabled>Aguarde...</button>
      ) : (
        <button className="btn">Entrar</button>
      )}
      {error && (
        <p className='error'>{error}</p>
      )}
    </form>
  </div>
  )
}

export default Login;
