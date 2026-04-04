import './app.css'
import { Route, Routes } from 'react-router-dom'
import CommentsPage from './pages/comments-page.jsx'
import HomePage from './pages/home-page.jsx'

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/comments/:publicId/:slug" element={<CommentsPage />} />
    </Routes>
  )
}

export default App
