import { useState, useEffect } from 'react';

import './index.scss'

const SignUp = () => {
  return (
    <div className='form'>
      <h1>Cadastre-se para postar!</h1>
      <p>Crie sua conta e compartilhe suas histórias</p>
      <form>
        <label>
          <span>Nome:</span>
          <input type="text" name="displayName" required placeholder="Nome do usuário" />
        </label>
        <label>
          <span>E-mail:</span>
          <input type="email" name="email" required placeholder="E-mail do usuário" />
        </label>
        <label>
          <span>Senha:</span>
          <input type="password" name="password" required placeholder="Defina uma senha" />
        </label>
        <label>
          <span>Confirmação de senha:</span>
          <input type="password" name="confirmPassword" required placeholder="Confirme a sua senha" />
        </label>
        <button className="btn">Cadastrar</button>
      </form>
    </div>
  )
}

export default SignUp;
