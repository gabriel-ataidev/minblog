import { NavLink, Link } from 'react-router-dom'

import './Navbar.scss'

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className="content">
        <Link className='brand' to="/">
          Instaíde
        </Link>
        <ul className='links_list'>
          <li>
            <NavLink
              to="/"
              end
              className={({isActive}) => (isActive ? 'active' : '')}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({isActive}) => (isActive ? 'active' : '')}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/login"
              className={({isActive}) => (isActive ? 'active' : '')}
            >
              Entrar
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/signup"
              className={({isActive}) => (isActive ? 'active' : '')}
            >
              Cadastrar
            </NavLink>
          </li>

        </ul>
      </div>
    </nav>
  )
}

export default Navbar
