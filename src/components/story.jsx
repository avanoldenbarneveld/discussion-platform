import { Link } from 'react-router-dom'

function Story({ post, commentsPath }) {
  return (
    <article className="post-item">
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
        <Link to={commentsPath}>{post.commentCount} comentarios</Link>
      </p>
    </article>
  )
}

export default Story
