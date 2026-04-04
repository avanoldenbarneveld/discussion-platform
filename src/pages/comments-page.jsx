import './comments-page.css'
import { Link, useParams } from 'react-router-dom'
import { comments } from '../data/comments.js'
import { posts } from '../data/posts.js'

function CommentsPage() {
  const { id } = useParams()
  const post = posts.find((item) => String(item.id) === id)
  const postComments = comments.filter((item) => item.postId === post?.id)

  if (!post) {
    return (
      <main className="app">
        <p className="app-intro">Esta publicación no existe.</p>
        <p className="app-intro">
          <Link to="/">Volver a la portada</Link>
        </p>
      </main>
    )
  }

  return (
    <main className="app">
      <p className="app-intro">
        <Link to="/">← Volver a la portada</Link>
      </p>

      <article className="post-page">
        <h1 className="post-page-title">
          <a href={post.url} target="_blank" rel="noreferrer">
            {post.title}
          </a>
        </h1>

        <p className="post-meta">
          <a href={post.url} target="_blank" rel="noreferrer">
            {post.source}
          </a>{' '}
          · {post.author} · {post.karma} karma · {post.timeAgo} · {post.commentCount}{' '}
          comentarios
        </p>

        <p className="post-context">{post.context}</p>
      </article>

      <section className="comments-placeholder">
        <h2>Comentarios</h2>
        {postComments.length === 0 ? (
          <p>Este hilo todavía no tiene comentarios de ejemplo.</p>
        ) : (
          <div className="comments-list">
            {postComments.map((comment) => (
              <article
                key={comment.id}
                className={
                  comment.parentId ? 'comment-item comment-item--reply' : 'comment-item'
                }
              >
                <p className="comment-meta">
                  {comment.author} · {comment.timeAgo}
                </p>
                <p className="comment-body">{comment.body}</p>
              </article>
            ))}
          </div>
        )}
      </section>
    </main>
  )
}

export default CommentsPage
