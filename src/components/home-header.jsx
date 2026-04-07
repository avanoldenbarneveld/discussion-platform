import { Link } from 'react-router-dom'
import PrimaryNav from './primary-nav.jsx'

function HomeHeader() {
  return (
    <>
      <div className="home-header-top">
        <h1>
          <Link to="/">La Portada Tech</Link>
        </h1>
        <PrimaryNav />
      </div>
      <p className="app-intro">
        Una comunidad de noticias y debate para la comunidad tecnológica española.
      </p>
    </>
  )
}

export default HomeHeader
