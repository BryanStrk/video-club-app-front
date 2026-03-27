    import { useState, useEffect, useCallback } from 'react'
    import { MovieCard } from '../components/MovieCard.jsx'
    import { EditMovieModal } from '../components/EditMovieModal.jsx'
    import { getAllMovies, deleteMovie, updateMovie } from '../services/movieService.js'

    export function Movies() {
    const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [search, setSearch] = useState('')
    const [genreFilter, setGenreFilter] = useState('Todos')
    const [editingMovie, setEditingMovie] = useState(null)
    const [toast, setToast] = useState(null)

    const showToast = (message, type = 'success') => {
        setToast({ message, type })
        setTimeout(() => setToast(null), 3000)
    }

    const fetchMovies = useCallback(async () => {
        try {
        setLoading(true)
        setError(null)
        const data = await getAllMovies()
        setMovies(Array.isArray(data) ? data : [])
        } catch (err) {
        console.error(err)
        setError('Error al cargar el catálogo desde el backend')
        } finally {
        setLoading(false)
        }
    }, [])

    useEffect(() => {
        fetchMovies()
    }, [fetchMovies])

    const handleDelete = async (id) => {
        try {
        await deleteMovie(id)
        setMovies((prev) => prev.filter((m) => m.id !== id))
        showToast('Película eliminada del catálogo')
        } catch (err) {
        console.error(err)
        showToast('Error al eliminar la película', 'error')
        }
    }

    const handleSaveEdit = async (id, data) => {
        try {
        const updated = await updateMovie(id, data)
        setMovies((prev) => prev.map((m) => (m.id === id ? updated : m)))
        setEditingMovie(null)
        showToast('Película actualizada correctamente')
        } catch (err) {
        console.error(err)
        showToast('Error al actualizar la película', 'error')
        }
    }

    const dynamicGenres = [
    'Todos',
    ...new Set(
        (Array.isArray(movies) ? movies : []).flatMap((movie) =>
        (movie.genre || '').split('/').map((g) => g.trim()).filter(Boolean)
        )
    ),
    ]

    const filtered = movies.filter((m) => {
    const matchSearch =
        (m.title && m.title.toLowerCase().includes(search.toLowerCase())) ||
        (m.director && m.director.toLowerCase().includes(search.toLowerCase()))

    const matchGenre =
    genreFilter === 'Todos' ||
    (m.genre && m.genre.toLowerCase().includes(genreFilter.toLowerCase()))

    return matchSearch && matchGenre
    })

    return (
        <div className="min-h-screen cyber-grid pt-24 pb-16">
        {toast && (
            <div
            className={`fixed top-6 right-6 z-50 px-6 py-3 border font-retro text-xs tracking-widest uppercase animate-slide-in-up ${
                toast.type === 'error'
                ? 'border-red-500/60 text-red-400 bg-dark-800'
                : 'border-neon-cyan/60 text-neon-cyan bg-dark-800'
            }`}
            style={{
                boxShadow:
                toast.type === 'error'
                    ? '0 0 15px rgba(255,51,51,0.3)'
                    : '0 0 15px rgba(0,245,255,0.3)',
            }}
            >
            {toast.type === 'error' ? '✕' : '✓'} {toast.message}
            </div>
        )}

        <div className="max-w-7xl mx-auto px-6">
            <div className="mb-12">
            <p
                className="font-retro text-xs tracking-[0.4em] uppercase mb-3"
                style={{ color: '#ff006e', textShadow: '0 0 8px #ff006e' }}
            >
                BASE DE DATOS
            </p>

            <h1 className="section-title neon-text-cyan mb-2">
                Catálogo de Películas
            </h1>

            <div className="flex items-center gap-3 mt-2">
                <div
                className="h-px flex-1 max-w-xs"
                style={{ background: 'linear-gradient(90deg, #00f5ff, transparent)' }}
                />
                <span className="font-body text-xs text-gray-500">
                {filtered.length} TÍTULO{filtered.length !== 1 ? 'S' : ''} ENCONTRADO{filtered.length !== 1 ? 'S' : ''}
                </span>
            </div>
            </div>

            <div className="mb-8 space-y-4">
            <div className="relative max-w-md">
                <span
                className="absolute left-4 top-1/2 -translate-y-1/2 font-retro text-xs"
                style={{ color: '#00f5ff' }}
                >
                ◉
                </span>

                <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Buscar por título o director..."
                className="retro-input pl-10"
                />
            </div>

            <div className="flex flex-wrap gap-2">
                {dynamicGenres.map((g) => (
                <button
                    key={g}
                    onClick={() => setGenreFilter(g)}
                    className="font-retro text-xs tracking-widest uppercase px-4 py-2 border transition-all duration-200"
                    style={
                    genreFilter === g
                        ? {
                            color: '#050508',
                            background: '#00f5ff',
                            borderColor: '#00f5ff',
                            boxShadow: '0 0 10px rgba(0,245,255,0.5)',
                        }
                        : {
                            color: 'rgba(0,245,255,0.5)',
                            borderColor: 'rgba(0,245,255,0.2)',
                            background: 'transparent',
                        }
                    }
                >
                    {g}
                </button>
                ))}
            </div>

            {(search || genreFilter !== 'Todos') && (
                <button
                onClick={() => {
                    setSearch('')
                    setGenreFilter('Todos')
                }}
                className="btn-neon-pink text-xs px-4 py-2"
                >
                Limpiar filtros
                </button>
            )}
            </div>

            {loading && (
            <div className="flex flex-col items-center justify-center py-32 gap-4">
                <div className="neon-spinner" />
                <p className="font-retro text-xs text-neon-cyan/50 tracking-widest animate-pulse">
                CARGANDO CATÁLOGO...
                </p>
            </div>
            )}

            {error && !loading && (
            <div
                className="border p-8 text-center max-w-lg mx-auto"
                style={{ borderColor: 'rgba(255,51,51,0.4)', background: 'rgba(255,51,51,0.05)' }}
            >
                <div className="text-4xl mb-4" style={{ color: '#ff3333' }}>⚠</div>
                <p className="font-retro text-xs text-red-400 tracking-widest mb-4">{error}</p>
                <button onClick={fetchMovies} className="btn-neon-cyan">
                ↺ Reintentar
                </button>
            </div>
            )}

            {!loading && !error && filtered.length === 0 && (
            <div className="text-center py-24">
                <div
                className="font-retro text-5xl mb-4"
                style={{ color: 'rgba(0,245,255,0.2)' }}
                >
                ▭
                </div>
                <p className="font-retro text-xs text-gray-600 tracking-widest">
                NO SE ENCONTRARON RESULTADOS
                </p>
            </div>
            )}

            {!loading && !error && filtered.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filtered.map((movie) => (
                <MovieCard
                    key={movie.id}
                    movie={movie}
                    onEdit={setEditingMovie}
                    onDelete={handleDelete}
                />
                ))}
            </div>
            )}
        </div>

        {editingMovie && (
            <EditMovieModal
            movie={editingMovie}
            onClose={() => setEditingMovie(null)}
            onSave={handleSaveEdit}
            />
        )}
        </div>
    )
    }