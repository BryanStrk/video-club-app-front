    import { useState, useEffect } from 'react'

    export function EditMovieModal({ movie, onClose, onSave }) {
    const [formData, setFormData] = useState({
        titulo: '',
        genero: '',
        anio: '',
        sinopsis: '',
        imagen_url: '',
        director: '',
        valoracion: '',
    })
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        if (movie) {
        setFormData({
            titulo: movie.titulo || '',
            genero: movie.genero || '',
            anio: movie.anio || '',
            sinopsis: movie.sinopsis || '',
            imagen_url: movie.imagen_url || '',
            director: movie.director || '',
            valoracion: movie.valoracion || '',
        })
        }
    }, [movie])

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)

        try {
        const payload = {
            ...formData,
            anio: parseInt(formData.anio, 10),
            valoracion: formData.valoracion ? parseFloat(formData.valoracion) : undefined,
        }

        await onSave(movie.id, payload)
        } finally {
        setLoading(false)
        }
    }

    return (
        <div
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        style={{ background: 'rgba(5,5,8,0.92)', backdropFilter: 'blur(8px)' }}
        onClick={(e) => e.target === e.currentTarget && onClose()}
        >
        <div
            className="w-full max-w-lg border bg-dark-800 relative overflow-hidden animate-slide-in-up"
            style={{
            borderColor: 'rgba(0,245,255,0.4)',
            boxShadow: '0 0 30px rgba(0,245,255,0.2), 0 0 60px rgba(0,245,255,0.05)',
            }}
        >
            <div
            className="px-6 py-4 border-b flex items-center justify-between"
            style={{ borderColor: 'rgba(0,245,255,0.2)', background: 'rgba(0,245,255,0.05)' }}
            >
            <h2
                className="font-retro font-bold tracking-widest uppercase text-sm"
                style={{ color: '#00f5ff', textShadow: '0 0 8px #00f5ff' }}
            >
                ✎ Editar Película
            </h2>
            <button
                onClick={onClose}
                className="text-gray-500 hover:text-neon-cyan transition-colors text-xl leading-none"
            >
                ✕
            </button>
            </div>

            <form onSubmit={handleSubmit} className="p-6 space-y-4 max-h-[70vh] overflow-y-auto">
            <div className="grid grid-cols-2 gap-4">
                <div className="col-span-2">
                <label className="block font-retro text-xs text-neon-cyan/70 tracking-widest uppercase mb-1">
                    Título
                </label>
                <input
                    type="text"
                    name="titulo"
                    value={formData.titulo}
                    onChange={handleChange}
                    required
                    className="retro-input"
                    placeholder="Nombre de la película"
                />
                </div>

                <div>
                <label className="block font-retro text-xs text-neon-cyan/70 tracking-widest uppercase mb-1">
                    Año
                </label>
                <input
                    type="number"
                    name="anio"
                    value={formData.anio}
                    onChange={handleChange}
                    required
                    min="1888"
                    max="2099"
                    className="retro-input"
                    placeholder="1999"
                />
                </div>

                <div>
                <label className="block font-retro text-xs text-neon-cyan/70 tracking-widest uppercase mb-1">
                    Valoración
                </label>
                <input
                    type="number"
                    name="valoracion"
                    value={formData.valoracion}
                    onChange={handleChange}
                    min="0"
                    max="5"
                    step="0.1"
                    className="retro-input"
                    placeholder="4.5"
                />
                </div>

                <div className="col-span-2">
                <label className="block font-retro text-xs text-neon-cyan/70 tracking-widest uppercase mb-1">
                    Género
                </label>
                <input
                    type="text"
                    name="genero"
                    value={formData.genero}
                    onChange={handleChange}
                    className="retro-input"
                    placeholder="Ciencia Ficción / Acción"
                />
                </div>

                <div className="col-span-2">
                <label className="block font-retro text-xs text-neon-cyan/70 tracking-widest uppercase mb-1">
                    Director
                </label>
                <input
                    type="text"
                    name="director"
                    value={formData.director}
                    onChange={handleChange}
                    className="retro-input"
                    placeholder="Nombre del director"
                />
                </div>

                <div className="col-span-2">
                <label className="block font-retro text-xs text-neon-cyan/70 tracking-widest uppercase mb-1">
                    URL Imagen (Poster)
                </label>
                <input
                    type="url"
                    name="imagen_url"
                    value={formData.imagen_url}
                    onChange={handleChange}
                    className="retro-input"
                    placeholder="https://..."
                />
                </div>

                <div className="col-span-2">
                <label className="block font-retro text-xs text-neon-cyan/70 tracking-widest uppercase mb-1">
                    Sinopsis
                </label>
                <textarea
                    name="sinopsis"
                    value={formData.sinopsis}
                    onChange={handleChange}
                    rows={4}
                    className="retro-input resize-none"
                    placeholder="Descripción de la película..."
                />
                </div>
            </div>

            <div className="flex gap-3 pt-2">
                <button
                type="button"
                onClick={onClose}
                className="flex-1 font-retro text-xs tracking-widest uppercase py-3 border border-gray-600 text-gray-500 hover:border-gray-400 hover:text-gray-300 transition-all duration-200"
                >
                Cancelar
                </button>
                <button
                type="submit"
                disabled={loading}
                className="flex-1 btn-neon-cyan disabled:opacity-50 disabled:cursor-not-allowed"
                >
                {loading ? '[ Guardando... ]' : '[ Guardar Cambios ]'}
                </button>
            </div>
            </form>

            <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2" style={{ borderColor: '#00f5ff' }} />
            <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2" style={{ borderColor: '#00f5ff' }} />
            <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2" style={{ borderColor: '#ff006e' }} />
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2" style={{ borderColor: '#ff006e' }} />
        </div>
        </div>
    )
    }