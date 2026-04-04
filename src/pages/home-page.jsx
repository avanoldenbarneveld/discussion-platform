import { Link } from 'react-router-dom'
import Story from '../components/story.jsx'
import { posts } from '../data/posts.js'
import { getPostSlug } from '../lib/postSlug.js'

function HomePage() {
  return (
    <main className="app">
      <h1>
        <Link to="/">La Portada</Link>
      </h1>
      <p className="app-intro">
        Una comunidad de noticias y debate para la comunidad tecnológica española.
      </p>

      <section className="post-list">
        {posts.map((post) => (
          <Story key={post.id} post={post} commentsPath={getCommentsPath(post)} />
        ))}
      </section>
    </main>
  )
}

function getCommentsPath(post) {
  return `/comments/${post.publicId}/${getPostSlug(post.title)}`
}

export default HomePage
