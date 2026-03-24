import { Routes, Route, Link } from 'react-router-dom'
import { Navbar } from './components/Navbar.jsx'
import { Home } from './pages/Home.jsx'
import { Movies } from './pages/Movies.jsx'
import { AddMovie } from './pages/AddMovie.jsx'
import { Location } from './pages/Location.jsx'

export default function App() {
  return (
    <div className="min-h-screen cyber-grid">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/add-movie" element={<AddMovie />} />
          <Route path="/location" element={<Location />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  )
}

function NotFound() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 text-center">
      <div>
        <p className="neon-text-pink mb-4">ERROR DE SISTEMA</p>
        <h1 className="section-title neon-text-cyan mb-6">404</h1>
        <Link to="/" className="btn-neon-cyan">
          Volver al inicio
        </Link>
      </div>
    </section>
  )
}