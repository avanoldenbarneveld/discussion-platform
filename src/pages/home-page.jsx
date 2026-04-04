import { Link } from 'react-router-dom'
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
          <article key={post.id} className="post-item">
            <h3 className="post-title">
              <a href={post.url} target="_blank" rel="noreferrer">
                {post.title}
              </a>
            </h3>
            <p className="post-meta">
              <a href={post.url} target="_blank" rel="noreferrer">
                {post.source}
              </a>{' '}
              · {post.author} · {post.karma} karma · {post.timeAgo} ·{' '}
              <Link to={getCommentsPath(post)}>{post.commentCount} comentarios</Link>
            </p>
          </article>
        ))}
      </section>
    </main>
  )
}

function getCommentsPath(post) {
  return `/comments/${post.publicId}/${getPostSlug(post.title)}`
}

export default HomePage
