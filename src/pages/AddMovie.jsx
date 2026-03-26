    import { useState } from 'react'
    import { useNavigate, Link } from 'react-router-dom'
    import { createMovie } from '../services/movieService.js'

    const INITIAL_FORM = {
    title: '',
    genre: '',
    anio: '',
    synopsis: '',
    imageUrl: '',
    director: '',
    rating: '',
    }

    const FIELDS = [
    {
        name: 'title',
        label: 'Título',
        type: 'text',
        placeholder: 'Nombre de la película',
        required: true,
        col: 2,
    },
    {
        name: 'director',
        label: 'Director',
        type: 'text',
        placeholder: 'Nombre del director',
        required: false,
        col: 1,
    },
    {
        name: 'genre',
        label: 'Género',
        type: 'text',
        placeholder: 'Ej: Ciencia Ficción / Acción',
        required: true,
        col: 1,
    },
    {
        name: 'anio',
        label: 'Año de estreno',
        type: 'number',
        placeholder: '1999',
        required: true,
        col: 1,
    },
    {
        name: 'rating',
        label: 'Valoración (0-5)',
        type: 'number',
        placeholder: '4.5',
        required: false,
        col: 1,
    },
    {
        name: 'imageUrl',
        label: 'URL del Poster',
        type: 'text',
        placeholder: '/images/default-movie.jpg',
        required: false,
        col: 2,
    },
    ]

    export function AddMovie() {
    const [formData, setFormData] = useState(INITIAL_FORM)
    const [loading, setLoading] = useState(false)
    const [success, setSuccess] = useState(false)
    const [error, setError] = useState(null)
    const navigate = useNavigate()

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)
        setError(null)

        try {
        await createMovie({
            ...formData,
            imageUrl: formData.imageUrl.trim() !== '' ? formData.imageUrl : '/images/default-movie.jpg',
            anio: parseInt(formData.anio, 10),
            rating: formData.rating !== '' ? parseFloat(formData.rating) : undefined,
        })

        setSuccess(true)
        setFormData(INITIAL_FORM)

        setTimeout(() => {
            navigate('/movies')
        }, 1800)
        } catch (err) {
        console.error(err)
        setError('Error al guardar en el backend.')
        } finally {
        setLoading(false)
        }
    }

    return (
        <div className="min-h-screen cyber-grid pt-24 pb-16">
        <div className="max-w-2xl mx-auto px-6">
            <div className="flex items-center gap-2 mb-8">
            <Link
                to="/movies"
                className="font-retro text-xs text-gray-600 hover:text-neon-cyan transition-colors tracking-widest uppercase"
            >
                ← Catálogo
            </Link>

            <span className="text-gray-700">/</span>

            <span className="font-retro text-xs text-neon-cyan/60 tracking-widest uppercase">
                Nueva Película
            </span>
            </div>

            <div className="mb-10">
            <p
                className="font-retro text-xs tracking-[0.4em] uppercase mb-3"
                style={{ color: '#ff006e', textShadow: '0 0 8px #ff006e' }}
            >
                INSERTAR REGISTRO
            </p>

            <h1 className="section-title neon-text-cyan">Añadir Película</h1>
            </div>

            {success && (
            <div
                className="border p-6 text-center mb-8 animate-slide-in-up"
                style={{
                borderColor: '#39ff14',
                background: 'rgba(57,255,20,0.05)',
                boxShadow: '0 0 20px rgba(57,255,20,0.2)',
                }}
            >
                <div
                className="text-3xl mb-2"
                style={{ color: '#39ff14', textShadow: '0 0 10px #39ff14' }}
                >
                ✓
                </div>

                <p
                className="font-retro text-xs tracking-widest"
                style={{ color: '#39ff14' }}
                >
                PELÍCULA AÑADIDA AL CATÁLOGO
                </p>

                <p className="font-body text-xs text-gray-500 mt-1">
                Redirigiendo al catálogo...
                </p>
            </div>
            )}

            {error && (
            <div
                className="border p-4 mb-8"
                style={{
                borderColor: 'rgba(255,51,51,0.5)',
                background: 'rgba(255,51,51,0.05)',
                }}
            >
                <p className="font-retro text-xs text-red-400 tracking-widest">
                ⚠ {error}
                </p>
            </div>
            )}

            <div
            className="border relative overflow-hidden"
            style={{
                borderColor: 'rgba(0,245,255,0.25)',
                background: 'rgba(0,245,255,0.02)',
                boxShadow: '0 0 30px rgba(0,245,255,0.08)',
            }}
            >
            <div
                className="absolute top-0 left-0 w-5 h-5 border-t-2 border-l-2"
                style={{ borderColor: '#00f5ff' }}
            />
            <div
                className="absolute top-0 right-0 w-5 h-5 border-t-2 border-r-2"
                style={{ borderColor: '#00f5ff' }}
            />
            <div
                className="absolute bottom-0 left-0 w-5 h-5 border-b-2 border-l-2"
                style={{ borderColor: '#ff006e' }}
            />
            <div
                className="absolute bottom-0 right-0 w-5 h-5 border-b-2 border-r-2"
                style={{ borderColor: '#ff006e' }}
            />

            <div
                className="px-8 py-4 border-b"
                style={{
                borderColor: 'rgba(0,245,255,0.15)',
                background: 'rgba(0,245,255,0.04)',
                }}
            >
                <div className="flex items-center gap-2">
                <span className="font-retro text-xs" style={{ color: '#00f5ff' }}>
                    ◉
                </span>

                <span className="font-retro text-xs tracking-widest uppercase text-gray-400">
                    NUEVO REGISTRO — VIDEOCLUB.DB
                </span>
                </div>
            </div>

            <form onSubmit={handleSubmit} className="p-8 space-y-5">
                <div className="grid grid-cols-2 gap-5">
                {FIELDS.map(({ name, label, type, placeholder, required, col }) => (
                    <div
                    key={name}
                    className={col === 2 ? 'col-span-2' : 'col-span-1'}
                    >
                    <label
                        className="block font-retro text-xs tracking-widest uppercase mb-2"
                        style={{ color: 'rgba(0,245,255,0.7)' }}
                    >
                        {label}
                        {required && <span className="text-neon-pink ml-1">*</span>}
                    </label>

                    <input
                        type={type}
                        name={name}
                        value={formData[name]}
                        onChange={handleChange}
                        required={required}
                        min={name === 'anio' ? 1888 : name === 'rating' ? 0 : undefined}
                        max={name === 'anio' ? 2099 : name === 'rating' ? 5 : undefined}
                        step={name === 'rating' ? 0.1 : undefined}
                        className="retro-input"
                        placeholder={placeholder}
                    />
                    </div>
                ))}

                <div className="col-span-2">
                    <label
                    className="block font-retro text-xs tracking-widest uppercase mb-2"
                    style={{ color: 'rgba(0,245,255,0.7)' }}
                    >
                    Sinopsis
                    <span className="text-neon-pink ml-1">*</span>
                    </label>

                    <textarea
                    name="synopsis"
                    value={formData.synopsis}
                    onChange={handleChange}
                    rows={4}
                    className="retro-input resize-none"
                    placeholder="Descripción breve de la trama..."
                    required
                    />
                </div>
                </div>

                <div
                className="h-px"
                style={{
                    background:
                    'linear-gradient(90deg, transparent, rgba(0,245,255,0.2), transparent)',
                }}
                />

                <div className="flex gap-4 pt-2">
                <Link
                    to="/movies"
                    className="flex-1 font-retro text-xs tracking-widest uppercase py-3 border border-gray-700 text-gray-500 hover:border-gray-500 hover:text-gray-300 transition-all duration-200 text-center"
                >
                    Cancelar
                </Link>

                <button
                    type="submit"
                    disabled={loading || success}
                    className="flex-1 btn-neon-cyan disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    {loading
                    ? '[ GUARDANDO... ]'
                    : success
                    ? '[ ✓ GUARDADO ]'
                    : '[ + AÑADIR AL CATÁLOGO ]'}
                </button>
                </div>

                <p className="font-body text-xs text-gray-700 text-center">
                Los campos marcados con <span className="text-neon-pink">*</span> son obligatorios
                </p>
            </form>
            </div>
        </div>
        </div>
    )
    }