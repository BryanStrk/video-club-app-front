import { useState } from 'react'

// Componente de estrellas de valoración
function StarRating({ value }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          className="text-sm"
          style={{
            color: star <= value ? '#ffea00' : 'rgba(255,234,0,0.2)',
            textShadow: star <= value ? '0 0 6px #ffea00' : 'none',
          }}
        >
          ★
        </span>
      ))}
    </div>
  )
}

export function MovieCard({ movie, onEdit, onDelete }) {
  const [imageError, setImageError] = useState(false)
  const [isDeleting, setIsDeleting] = useState(false)

  const handleDelete = async () => {
    if (!window.confirm(`¿Eliminar "${movie.titulo}" del catálogo?`)) return

    try {
      setIsDeleting(true)
      await onDelete(movie.id)
    } finally {
      setIsDeleting(false)
    }
  }

  const fallbackImage = `https://placehold.co/300x450/0a0a12/00f5ff?text=${encodeURIComponent(movie.titulo)}&font=monospace`

  return (
    <article className="retro-card group animate-slide-in-up h-full flex flex-col">
      {/* Poster */}
      <div className="relative overflow-hidden" style={{ aspectRatio: '2/3' }}>
        <img
          src={imageError ? fallbackImage : movie.imagen_url}
          alt={movie.titulo}
          onError={() => setImageError(true)}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />

        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-linear-to-t from-dark-900 via-dark-900/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-300" />

        {/* Año badge */}
        <div
          className="absolute top-3 right-3 font-retro text-xs px-2 py-1"
          style={{
            background: 'rgba(0,0,0,0.8)',
            color: '#00f5ff',
            border: '1px solid rgba(0,245,255,0.5)',
            textShadow: '0 0 8px #00f5ff',
          }}
        >
          {movie.anio}
        </div>

        {/* Scan line effect on hover */}
        <div
          className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            background:
              'repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(0,245,255,0.02) 3px, rgba(0,245,255,0.02) 4px)',
          }}
        />
      </div>

      {/* Info */}
      <div className="p-4 space-y-2 flex flex-col flex-1">
        <span className="genre-tag inline-block">{movie.genero}</span>

        <h3
          className="font-retro font-bold text-sm leading-tight mt-2 group-hover:text-neon-cyan transition-colors duration-300 min-h-[40px] flex items-start"
          style={{ fontSize: '0.85rem', letterSpacing: '0.05em' }}
        >
          {movie.titulo}
        </h3>

        {movie.director && (
          <p className="font-body text-xs text-gray-500">
            <span className="text-neon-pink/60">DIR.</span>{' '}
            <span className="text-gray-400">{movie.director}</span>
          </p>
        )}

        <p className="font-body text-xs text-gray-500 leading-relaxed line-clamp-3 min-h-[54px]">
          {movie.sinopsis}
        </p>

        {movie.valoracion != null && (
          <div className="flex items-center gap-2 pt-1">
            <StarRating value={Math.round(movie.valoracion)} />
            <span className="font-retro text-xs text-gray-500">{movie.valoracion}</span>
          </div>
        )}

        <div
          className="h-px mt-3"
          style={{ background: 'linear-gradient(90deg, transparent, rgba(0,245,255,0.3), transparent)' }}
        />

        <div className="flex gap-3 pt-2 mt-auto">
          <button
            onClick={() => onEdit(movie)}
            className="btn-neon-cyan flex-1 text-xs px-4 py-2"
          >
            Editar
          </button>

          <button
            onClick={handleDelete}
            disabled={isDeleting}
            className="btn-neon-red flex-1 text-xs px-4 py-2 disabled:opacity-50"
          >
            {isDeleting ? '...' : 'Borrar'}
          </button>
        </div>
      </div>
    </article>
  )
}