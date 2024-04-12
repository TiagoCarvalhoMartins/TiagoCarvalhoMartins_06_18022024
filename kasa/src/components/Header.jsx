import logo from '../assets/logo.png'
import '../styles/components/Header.scss'
import { Link, useLocation } from 'react-router-dom'

function Header() {
  const location = useLocation()

  return (
    <header>
      <div className="container">
        <Link to="/">
          <img src={logo} alt="Kasa" className="kasa-logo" />
        </Link>
        <ul>
          <li>
            <Link to="/">
              <h2 className={location.pathname === '/' ? 'headerActive' : ''}>
                Accueil
              </h2>
            </Link>
          </li>
          <li>
            <Link to="/about">
              <h2
                className={location.pathname === '/about' ? 'headerActive' : ''}
              >
                A Propos
              </h2>
            </Link>
          </li>
        </ul>
      </div>
    </header>
  )
}

export default Header
