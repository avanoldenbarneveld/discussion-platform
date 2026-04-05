import HomeHeader from '../components/home-header.jsx'
import Story from '../components/story.jsx'
import { posts } from '../data/posts.js'
import { getPostSlug } from '../lib/postSlug.js'

function HomePage() {
  return (
    <main className="app">
      <div className="home-layout">
        <section className="home-feed">
          <HomeHeader />

          <section className="post-list">
            {posts.map((post) => (
              <Story key={post.id} post={post} commentsPath={getCommentsPath(post)} />
            ))}
          </section>
        </section>

        <aside className="home-sidebar" aria-label="Sidebar futura" />
      </div>
    </main>
  )
}

function getCommentsPath(post) {
  return `/comments/${post.publicId}/${getPostSlug(post.title)}`
}

export default HomePage
