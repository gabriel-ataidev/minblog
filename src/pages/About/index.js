import React from 'react'
import { Link } from 'react-router-dom';
import "./index.scss";

const About = () => {
  return (
    <div className='about'>
      <h2>Sobre o <strong>Instaíde</strong></h2>
      <p>Este projeto consiste em um blog feito com React no frontend e Firebase no backend</p>
      <Link to="/post/create" className='btn'>Criar post</Link>
    </div>
  )
}

export default About;
