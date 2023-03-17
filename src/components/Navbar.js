import { NavLink, Link } from 'react-router-dom';
import { useAuthentication } from '../hooks/useAuthentication';
import { useAuthValue } from '../context/AuthContext';

import './Navbar.scss'

const Navbar = () => {
  const { user } = useAuthValue();

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
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              Home
            </NavLink>
          </li>
          {user ? (
            <>
              <li>
                <NavLink
                  to="/post/create"
                  className={({ isActive }) => (isActive ? 'active' : '')}
                >
                  Criar post
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard"
                  className={({ isActive }) => (isActive ? 'active' : '')}
                >
                  Dashboard
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink
                  to="/login"
                  className={({ isActive }) => (isActive ? 'active' : '')}
                >
                  Entrar
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/signup"
                  className={({ isActive }) => (isActive ? 'active' : '')}
                >
                  Cadastrar
                </NavLink>
              </li>
            </>
          )}
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              About
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
