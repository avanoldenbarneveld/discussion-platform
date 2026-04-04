import './comments-page.css'
import { Link, useParams } from 'react-router-dom'
import { comments } from '../data/comments.js'
import { posts } from '../data/posts.js'

function CommentsPage() {
  const { id } = useParams()
  const post = posts.find((item) => String(item.id) === id)
  const postComments = comments.filter((item) => item.postId === post?.id)
  const commentsByParent = groupCommentsByParent(postComments)

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
          <CommentThread commentsByParent={commentsByParent} parentId={null} depth={0} />
        )}
      </section>
    </main>
  )
}

function CommentThread({ commentsByParent, parentId, depth }) {
  const items = commentsByParent.get(parentId) ?? []

  if (items.length === 0) {
    return null
  }

  return (
    <div className="comments-list">
      {items.map((comment) => (
        <article key={comment.id} className="comment-item">
          <p className="comment-meta">
            {comment.author} · {comment.timeAgo}
          </p>
          <p className="comment-body">{comment.body}</p>

          <div
            className={
              depth >= 0
                ? 'comment-children comment-children--nested'
                : 'comment-children'
            }
          >
            <CommentThread
              commentsByParent={commentsByParent}
              parentId={comment.id}
              depth={depth + 1}
            />
          </div>
        </article>
      ))}
    </div>
  )
}

function groupCommentsByParent(items) {
  const grouped = new Map()

  for (const comment of items) {
    const parentKey = comment.parentId ?? null
    const siblings = grouped.get(parentKey) ?? []
    siblings.push(comment)
    grouped.set(parentKey, siblings)
  }

  return grouped
}

export default CommentsPage
