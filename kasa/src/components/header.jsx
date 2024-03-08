import logo from '../assets/logo.png'
import '../styles/components/Header.scss'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header>
      <div className="container">
        <Link to="/">
          <img src={logo} alt="Kasa" className="kasa-logo" />
        </Link>
        <ul>
          <li>
            <Link to="/">
              <h2>Accueil</h2>
            </Link>
          </li>
          <li>
            <Link to="/about">
              <h2>A Propos</h2>
            </Link>
          </li>
        </ul>
      </div>
    </header>
  )
}

export default Header
