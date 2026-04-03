import './app.css'
import { posts } from './data/posts.js'

function App() {
  return (
    <main className="app">
      <h1>La Portada</h1>
      <p className="app-intro">
        Una comunidad de noticias y debate para la comunidad tecnológica española.
      </p>

      <section className="post-list">

        {posts.map((post) => (
          <article key={post.id} className="post-item">
            <h3 className="post-title">{post.title}</h3>
            <p className="post-meta">
              {post.source} · {post.author} · {post.karma} karma · {post.timeAgo} ·{' '}
              {post.commentCount} comentarios
            </p>
          </article>
        ))}
      </section>
    </main>
  )
}

export default App
