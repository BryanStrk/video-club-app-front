    import { useState, useEffect } from 'react'
    import { NavLink, Link } from 'react-router-dom'

    const navLinks = [
    { to: '/',          label: 'Inicio',      icon: '⬡' },
    { to: '/movies',    label: 'Catálogo',    icon: '▶' },
    { to: '/add-movie', label: 'Añadir',      icon: '+' },
    { to: '/location',  label: 'Ubicación',   icon: '◈' },
    ]

    export function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20)
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
            scrolled
            ? 'bg-dark-900/95 backdrop-blur-md border-b border-neon-cyan/30'
            : 'bg-transparent'
        }`}
        style={{ boxShadow: scrolled ? '0 0 20px rgba(0,245,255,0.1)' : 'none' }}
        >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
            <div className="relative">
                <span
                className="font-retro font-black text-xl tracking-widest"
                style={{
                    color: '#00f5ff',
                    textShadow: '0 0 10px #00f5ff, 0 0 20px #00f5ff',
                }}
                >
                RETRO
                </span>
                <span
                className="font-retro font-black text-xl tracking-widest ml-1"
                style={{
                    color: '#ff006e',
                    textShadow: '0 0 10px #ff006e, 0 0 20px #ff006e',
                }}
                >
                CINEMA
                </span>
                {/* Glitch layer */}
                <span
                className="absolute inset-0 font-retro font-black text-xl tracking-widest opacity-0 group-hover:opacity-60 pointer-events-none"
                style={{
                    color: '#00f5ff',
                    textShadow: '2px 0 #ff006e',
                    animation: 'glitch 0.8s infinite',
                }}
                >
                RETRO<span style={{ color: '#ff006e' }}>CINEMA</span>
                </span>
            </div>

            {/* VHS badge */}
            <span
                className="hidden sm:block font-body text-xs px-2 py-0.5 border border-neon-yellow/60 text-neon-yellow/80 tracking-widest"
                style={{ fontSize: '0.6rem' }}
            >
                VHS
            </span>
            </Link>

            {/* Desktop nav */}
            <ul className="hidden md:flex items-center gap-1">
            {navLinks.map(({ to, label, icon }) => (
                <li key={to}>
                <NavLink
                    to={to}
                    end={to === '/'}
                    className={({ isActive }) =>
                    `font-retro text-xs tracking-widest uppercase px-4 py-2 border transition-all duration-300 flex items-center gap-2 ${
                        isActive
                        ? 'border-neon-cyan/60 text-neon-cyan bg-neon-cyan/10'
                        : 'border-transparent text-gray-400 hover:text-neon-cyan hover:border-neon-cyan/30'
                    }`
                    }
                    style={({ isActive }) =>
                    isActive
                        ? { textShadow: '0 0 8px #00f5ff', boxShadow: '0 0 10px rgba(0,245,255,0.15)' }
                        : {}
                    }
                >
                    <span className="opacity-60">{icon}</span>
                    {label}
                </NavLink>
                </li>
            ))}
            </ul>

            {/* Mobile hamburger */}
            <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            >
            <span
                className={`block w-6 h-0.5 transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}
                style={{ background: '#00f5ff', boxShadow: '0 0 5px #00f5ff' }}
            />
            <span
                className={`block w-6 h-0.5 transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`}
                style={{ background: '#00f5ff', boxShadow: '0 0 5px #00f5ff' }}
            />
            <span
                className={`block w-6 h-0.5 transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}
                style={{ background: '#00f5ff', boxShadow: '0 0 5px #00f5ff' }}
            />
            </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
            <div
            className="md:hidden border-t border-neon-cyan/20 bg-dark-900/98 backdrop-blur-md"
            style={{ boxShadow: '0 10px 30px rgba(0,245,255,0.1)' }}
            >
            {navLinks.map(({ to, label, icon }) => (
                <NavLink
                key={to}
                to={to}
                end={to === '/'}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                    `flex items-center gap-3 font-retro text-xs tracking-widest uppercase px-6 py-4 border-b border-neon-cyan/10 transition-all duration-200 ${
                    isActive ? 'text-neon-cyan bg-neon-cyan/5' : 'text-gray-400'
                    }`
                }
                >
                <span>{icon}</span>
                {label}
                </NavLink>
            ))}
            </div>
        )}
        </nav>
    )
    }
