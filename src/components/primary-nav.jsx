import { Link } from 'react-router-dom'

function PrimaryNav() {
  return (
    <nav className="home-nav" aria-label="Navegación principal">
      <Link className="home-nav-link home-nav-link--active" to="/">
        Home
      </Link>
      <span className="home-nav-link" aria-disabled="true">
        New
      </span>
      <span className="home-nav-link" aria-disabled="true">
        Search
      </span>
    </nav>
  )
}

export default PrimaryNav
