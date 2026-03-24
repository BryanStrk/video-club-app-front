    import { Link } from 'react-router-dom'

    export function Footer() {
    const year = new Date().getFullYear()

    return (
        <footer
        className="border-t mt-auto"
        style={{ borderColor: 'rgba(0,245,255,0.12)', background: 'rgba(5,5,8,0.95)' }}
        >
        {/* Top accent line */}
        <div
            className="h-px w-full"
            style={{
            background: 'linear-gradient(90deg, transparent 0%, #ff006e 20%, #00f5ff 50%, #bf00ff 80%, transparent 100%)',
            boxShadow: '0 0 8px rgba(0,245,255,0.4)',
            }}
        />

        <div className="max-w-7xl mx-auto px-6 py-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div>
                <div className="mb-3">
                <span
                    className="font-retro font-black text-lg tracking-widest"
                    style={{ color: '#00f5ff', textShadow: '0 0 8px #00f5ff' }}
                >
                    RETRO
                </span>
                <span
                    className="font-retro font-black text-lg tracking-widest"
                    style={{ color: '#ff006e', textShadow: '0 0 8px #ff006e' }}
                >
                    CINEMA
                </span>
                </div>
                <p className="font-body text-xs text-gray-600 leading-relaxed max-w-xs">
                El videoclub del futuro. Más de 500 títulos de ciencia ficción, 
                cyberpunk y cine de culto desde 1982.
                </p>
            </div>

            {/* Nav links */}
            <div>
                <h3
                className="font-retro text-xs tracking-[0.3em] uppercase mb-4"
                style={{ color: 'rgba(0,245,255,0.5)' }}
                >
                Navegación
                </h3>
                <ul className="space-y-2">
                {[
                    { to: '/',          label: 'Inicio' },
                    { to: '/movies',    label: 'Catálogo' },
                    { to: '/add-movie', label: 'Añadir Película' },
                    { to: '/location',  label: 'Ubicación' },
                ].map(({ to, label }) => (
                    <li key={to}>
                    <Link
                        to={to}
                        className="font-body text-xs text-gray-600 hover:text-neon-cyan transition-colors duration-200 tracking-widest"
                    >
                        <span className="text-neon-cyan/30 mr-2">›</span>
                        {label}
                    </Link>
                    </li>
                ))}
                </ul>
            </div>

            {/* Tech stack */}
            <div>
                <h3
                className="font-retro text-xs tracking-[0.3em] uppercase mb-4"
                style={{ color: 'rgba(0,245,255,0.5)' }}
                >
                Stack Tecnológico
                </h3>
                <ul className="space-y-1.5">
                {[
                    { label: 'React 18 + Vite',     color: '#00f5ff' },
                    { label: 'React Router DOM v6',  color: '#00f5ff' },
                    { label: 'Tailwind CSS v3',      color: '#ff006e' },
                    { label: 'Axios',                color: '#ff006e' },
                    { label: 'JSON Server',          color: '#bf00ff' },
                ].map(({ label, color }) => (
                    <li key={label} className="flex items-center gap-2">
                    <span
                        className="w-1.5 h-1.5 rounded-full shrink-0"
                        style={{ background: color, boxShadow: `0 0 4px ${color}` }}
                    />
                    <span className="font-body text-xs text-gray-600">{label}</span>
                    </li>
                ))}
                </ul>
            </div>
            </div>

            {/* Bottom bar */}
            <div
            className="pt-6 border-t flex flex-col sm:flex-row items-center justify-between gap-3"
            style={{ borderColor: 'rgba(0,245,255,0.08)' }}
            >
            <p className="font-retro text-xs text-gray-700 tracking-widest">
                © {year} RetroCinema — Proyecto Académico DAW
            </p>
            <div className="flex items-center gap-2">
                <span
                className="w-2 h-2 rounded-full animate-pulse"
                style={{ background: '#39ff14', boxShadow: '0 0 6px #39ff14' }}
                />
                <span className="font-retro text-xs text-gray-700 tracking-widest">
                SISTEMA OPERATIVO
                </span>
            </div>
            </div>
        </div>
        </footer>
    )
    }
