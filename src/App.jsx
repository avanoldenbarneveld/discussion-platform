import { posts } from './data/posts.js'

function App() {
  return (
    <main>
      <h1>La Portada</h1>
      <p>Una comunidad de noticias y debate para la comunidad tecnológica española.</p>
      <p>
        Un producto pensado para concentrar buenas publicaciones, conversación
        con criterio y crecimiento por invitación.
      </p>

      <section>
        <h2>Publicaciones de ejemplo</h2>

        {posts.map((post) => (
          <article key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.context}</p>
            <p>
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
