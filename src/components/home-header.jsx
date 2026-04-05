import { Link } from 'react-router-dom'

function HomeHeader() {
  return (
    <>
      <h1>
        <Link to="/">La Portada</Link>
      </h1>
      <p className="app-intro">
        Una comunidad de noticias y debate para la comunidad tecnológica española.
      </p>
    </>
  )
}

export default HomeHeader
