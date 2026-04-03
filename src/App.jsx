import './app.css'
import { Route, Routes } from 'react-router-dom'
import { posts } from './data/posts.js'

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
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
              {post.commentCount} comentarios
            </p>
          </article>
        ))}
      </section>
    </main>
  )
}

export default App
