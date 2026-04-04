import './app.css'
import { Link, Route, Routes } from 'react-router-dom'
import { posts } from './data/posts.js'
import CommentsPage from './pages/comments-page.jsx'

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/comments/:id/:slug" element={<CommentsPage />} />
    </Routes>
  )
}

function HomePage() {
  return (
    <main className="app">
      <h1>La Portada</h1>
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
  return `/comments/${post.id}/${slugify(post.title)}`
}

// Keep comment URLs readable without depending on the full title.
function slugify(text) {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .split('-')
    .filter(Boolean)
    .slice(0, 10)
    .join('-')
}

export default App
