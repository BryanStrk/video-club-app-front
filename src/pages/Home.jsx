    import { Link } from 'react-router-dom'
    import { useState, useEffect } from 'react'

    // Texto del ticker al estilo retro
    const TICKER_ITEMS = [
    'BLADE RUNNER 2049',
    'THE MATRIX',
    'AKIRA',
    'GHOST IN THE SHELL',
    'TRON LEGACY',
    'NEUROMANCER',
    'JOHNNY MNEMONIC',
    'DARK CITY',
    'TOTAL RECALL',
    ]

    function TickerBand({ items, reverse = false }) {
    return (
        <div className="overflow-hidden py-3 border-y" style={{ borderColor: 'rgba(0,245,255,0.2)' }}>
        <div
            className={`flex gap-8 whitespace-nowrap ${reverse ? 'animate-[ticker-reverse_25s_linear_infinite]' : 'animate-[ticker_20s_linear_infinite]'}`}
            style={{
            animation: reverse
                ? 'tickerReverse 25s linear infinite'
                : 'ticker 20s linear infinite',
            }}
        >
            {[...items, ...items, ...items].map((item, i) => (
            <span key={i} className="font-retro text-xs tracking-[0.3em] text-neon-cyan/40 flex items-center gap-8">
                {item}
                <span className="text-neon-pink/40">◆</span>
            </span>
            ))}
        </div>
        </div>
    )
    }

    function GlitchTitle() {
    const [glitching, setGlitching] = useState(false)

    useEffect(() => {
        const interval = setInterval(() => {
        setGlitching(true)
        setTimeout(() => setGlitching(false), 300)
        }, 4000)
        return () => clearInterval(interval)
    }, [])

    return (
        <div className="relative inline-block">
        <h1
            className="font-retro font-black uppercase leading-none select-none"
            style={{
            fontSize: 'clamp(3rem, 10vw, 8rem)',
            letterSpacing: '-0.02em',
            color: '#00f5ff',
            textShadow: '0 0 20px #00f5ff, 0 0 40px #00f5ff, 0 0 80px rgba(0,245,255,0.5)',
            }}
        >
            RETRO
        </h1>
        <h1
            className="font-retro font-black uppercase leading-none select-none"
            style={{
            fontSize: 'clamp(3rem, 10vw, 8rem)',
            letterSpacing: '-0.02em',
            color: '#ff006e',
            textShadow: '0 0 20px #ff006e, 0 0 40px #ff006e, 0 0 80px rgba(255,0,110,0.5)',
            marginTop: '-0.1em',
            }}
        >
            CINEMA
        </h1>

        {/* Glitch layers */}
        {glitching && (
            <>
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                clipPath: 'inset(20% 0 60% 0)',
                transform: 'translate(4px, 0)',
                opacity: 0.7,
                }}
            >
                <h1 className="font-retro font-black uppercase leading-none"
                style={{
                    fontSize: 'clamp(3rem, 10vw, 8rem)',
                    color: '#ffea00',
                    textShadow: '0 0 10px #ffea00',
                }}
                >RETRO</h1>
                <h1 className="font-retro font-black uppercase leading-none"
                style={{
                    fontSize: 'clamp(3rem, 10vw, 8rem)',
                    color: '#39ff14',
                    marginTop: '-0.1em',
                }}
                >CINEMA</h1>
            </div>
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                clipPath: 'inset(60% 0 10% 0)',
                transform: 'translate(-4px, 0)',
                opacity: 0.7,
                }}
            >
                <h1 className="font-retro font-black uppercase leading-none"
                style={{
                    fontSize: 'clamp(3rem, 10vw, 8rem)',
                    color: '#bf00ff',
                    textShadow: '0 0 10px #bf00ff',
                }}
                >RETRO</h1>
                <h1 className="font-retro font-black uppercase leading-none"
                style={{
                    fontSize: 'clamp(3rem, 10vw, 8rem)',
                    color: '#bf00ff',
                    marginTop: '-0.1em',
                }}
                >CINEMA</h1>
            </div>
            </>
        )}
        </div>
    )
    }

    function StatBadge({ value, label }) {
    return (
        <div
        className="text-center px-6 py-4 border"
        style={{
            borderColor: 'rgba(0,245,255,0.2)',
            background: 'rgba(0,245,255,0.03)',
        }}
        >
        <div
            className="font-retro font-black text-3xl"
            style={{ color: '#00f5ff', textShadow: '0 0 10px #00f5ff' }}
        >
            {value}
        </div>
        <div className="font-accent text-xs text-gray-500 tracking-widest uppercase mt-1">{label}</div>
        </div>
    )
    }

    export function Home() {
    return (
        <div className="min-h-screen cyber-grid star-field">
        {/* Ticker */}
        <div className="pt-20">
            <TickerBand items={TICKER_ITEMS} />
        </div>

        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center overflow-hidden">
            {/* Background gradient orbs */}
            <div
            className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full pointer-events-none"
            style={{
                background: 'radial-gradient(circle, rgba(0,245,255,0.08) 0%, transparent 70%)',
                filter: 'blur(40px)',
            }}
            />
            <div
            className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full pointer-events-none"
            style={{
                background: 'radial-gradient(circle, rgba(255,0,110,0.06) 0%, transparent 70%)',
                filter: 'blur(40px)',
            }}
            />
            <div
            className="absolute top-1/2 right-1/3 w-64 h-64 rounded-full pointer-events-none"
            style={{
                background: 'radial-gradient(circle, rgba(139,0,255,0.06) 0%, transparent 70%)',
                filter: 'blur(30px)',
            }}
            />

            {/* Vertical decorative lines */}
            <div className="absolute left-8 top-0 bottom-0 w-px opacity-20"
            style={{ background: 'linear-gradient(to bottom, transparent, #00f5ff, transparent)' }} />
            <div className="absolute right-8 top-0 bottom-0 w-px opacity-20"
            style={{ background: 'linear-gradient(to bottom, transparent, #ff006e, transparent)' }} />

            <div className="relative max-w-7xl mx-auto px-6 py-20 w-full">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
                {/* Left: Text content */}
                <div className="space-y-8">
                {/* Pre-tag */}
                <div className="flex items-center gap-3">
                    <div className="w-8 h-px" style={{ background: '#00f5ff', boxShadow: '0 0 5px #00f5ff' }} />
                    <span
                    className="font-retro text-xs tracking-[0.4em] uppercase"
                    style={{ color: '#00f5ff', textShadow: '0 0 8px #00f5ff' }}
                    >
                    EST. 1982
                    </span>
                    <div className="w-8 h-px" style={{ background: '#00f5ff', boxShadow: '0 0 5px #00f5ff' }} />
                </div>

                <GlitchTitle />

                <div
                    className="h-1 w-32"
                    style={{
                    background: 'linear-gradient(90deg, #00f5ff, #ff006e)',
                    boxShadow: '0 0 10px rgba(0,245,255,0.5)',
                    }}
                />

                <p className="font-body text-gray-400 leading-relaxed max-w-md" style={{ fontSize: '0.95rem' }}>
                    El único videoclub del futuro que opera desde el pasado.
                    Más de <span style={{ color: '#00f5ff' }}>500 títulos</span> de ciencia ficción,
                    cyberpunk y cine de culto. Tu ventana a mundos que aún no existen.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-wrap gap-4">
                    <Link to="/movies" className="btn-neon-cyan">
                    ▶ Ver Catálogo
                    </Link>
                    <Link to="/add-movie" className="btn-neon-pink">
                    + Añadir Película
                    </Link>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-3 max-w-md">
                    <StatBadge value="500+" label="Títulos" />
                    <StatBadge value="4K" label="Calidad" />
                    <StatBadge value="24/7" label="Abierto" />
                </div>
                </div>

                {/* Right: Decorative panel */}
                <div className="hidden lg:flex justify-center items-center">
                <div className="relative">
                    {/* Main decorative box */}
                    <div
                    className="w-80 h-96 border relative overflow-hidden"
                    style={{
                        borderColor: 'rgba(0,245,255,0.3)',
                        background: 'linear-gradient(135deg, rgba(0,245,255,0.05), rgba(255,0,110,0.03))',
                        boxShadow: '0 0 30px rgba(0,245,255,0.15)',
                    }}
                    >
                    {/* Corner accents */}
                    <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2" style={{ borderColor: '#00f5ff' }} />
                    <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2" style={{ borderColor: '#00f5ff' }} />
                    <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2" style={{ borderColor: '#ff006e' }} />
                    <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2" style={{ borderColor: '#ff006e' }} />

                    {/* Content inside the panel */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 p-6">
                        {/* VHS icon */}
                        <div className="text-6xl font-retro" style={{ color: 'rgba(0,245,255,0.3)', textShadow: '0 0 20px rgba(0,245,255,0.2)' }}>
                        ▶
                        </div>
                        <div
                        className="font-retro text-center text-xs tracking-widest leading-relaxed"
                        style={{ color: 'rgba(0,245,255,0.4)' }}
                        >
                        {'> INICIANDO SISTEMA_'}<br />
                        {'> CARGANDO CATÁLOGO_'}<br />
                        {'> MODO: VIDEOTECA_'}<br />
                        <span style={{ color: '#00f5ff' }}>{'> LISTO ██████████ 100%'}</span>
                        </div>
                        {/* Progress bars decorative */}
                        {['ACCIÓN', 'CYBERPUNK', 'SCI-FI', 'THRILLER', 'ANIMACIÓN'].map((g, i) => (
                        <div key={g} className="w-full">
                            <div className="flex justify-between font-retro text-xs mb-1" style={{ color: 'rgba(0,245,255,0.4)', fontSize: '0.6rem' }}>
                            <span>{g}</span>
                            <span>{[92, 88, 95, 75, 67][i]}%</span>
                            </div>
                            <div className="h-1 w-full bg-dark-600 rounded-none overflow-hidden">
                            <div
                                className="h-full transition-all duration-1000"
                                style={{
                                width: `${[92, 88, 95, 75, 67][i]}%`,
                                background: i % 2 === 0 ? '#00f5ff' : '#ff006e',
                                boxShadow: `0 0 6px ${i % 2 === 0 ? '#00f5ff' : '#ff006e'}`,
                                }}
                            />
                            </div>
                        </div>
                        ))}
                    </div>
                    </div>

                    {/* Floating labels */}
                    <div
                    className="absolute -top-4 -right-4 font-retro text-xs px-3 py-1 border"
                    style={{
                        color: '#ffea00',
                        borderColor: '#ffea00',
                        background: '#050508',
                        boxShadow: '0 0 10px rgba(255,234,0,0.3)',
                        textShadow: '0 0 8px #ffea00',
                    }}
                    >
                    NUEVO
                    </div>
                    <div
                    className="absolute -bottom-4 -left-4 font-retro text-xs px-3 py-1 border"
                    style={{
                        color: '#ff006e',
                        borderColor: '#ff006e',
                        background: '#050508',
                        boxShadow: '0 0 10px rgba(255,0,110,0.3)',
                    }}
                    >
                    HD QUALITY
                    </div>
                </div>
                </div>
            </div>
            </div>
        </section>

        {/* Features Section */}
        <section className="max-w-7xl mx-auto px-6 py-24">
            <div className="text-center mb-16">
            <p
                className="font-retro text-xs tracking-[0.4em] uppercase mb-4"
                style={{ color: '#ff006e', textShadow: '0 0 8px #ff006e' }}
            >
                ¿POR QUÉ ELEGIRNOS?
            </p>
            <h2 className="section-title neon-text-cyan">
                El Futuro del Cine
            </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
            {[
                {
                icon: '⬡',
                title: 'Catálogo Curado',
                desc: 'Más de 500 títulos seleccionados por expertos. Desde clásicos de los 80 hasta lo más reciente del cyberpunk.',
                color: '#00f5ff',
                },
                {
                icon: '◈',
                title: 'Calidad 4K',
                desc: 'Todas nuestras copias en formato digital de alta definición. La experiencia que mereces.',
                color: '#ff006e',
                },
                {
                icon: '▷',
                title: 'Sin Filas',
                desc: 'Reserva tu película online y recógela en 10 minutos. La tecnología al servicio del cinéfilo.',
                color: '#bf00ff',
                },
            ].map(({ icon, title, desc, color }) => (
                <div
                key={title}
                className="p-8 border relative overflow-hidden group hover:-translate-y-2 transition-transform duration-300"
                style={{
                    borderColor: `rgba(${color === '#00f5ff' ? '0,245,255' : color === '#ff006e' ? '255,0,110' : '191,0,255'},0.2)`,
                    background: `rgba(${color === '#00f5ff' ? '0,245,255' : color === '#ff006e' ? '255,0,110' : '191,0,255'},0.03)`,
                }}
                >
                <div className="text-4xl mb-4" style={{ color, textShadow: `0 0 15px ${color}` }}>{icon}</div>
                <h3 className="font-retro font-bold text-sm tracking-widest uppercase mb-3" style={{ color }}>{title}</h3>
                <p className="font-body text-gray-500 text-sm leading-relaxed">{desc}</p>

                {/* Bottom accent */}
                <div
                    className="absolute bottom-0 left-0 right-0 h-0.5 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
                    style={{ background: color, boxShadow: `0 0 8px ${color}` }}
                />
                </div>
            ))}
            </div>
        </section>

        {/* Bottom ticker */}
        <TickerBand items={[...TICKER_ITEMS].reverse()} reverse />

        {/* CTA Final */}
        <section className="py-24 text-center">
            <p className="font-retro text-xs tracking-[0.4em] uppercase text-neon-pink/60 mb-4">CONÉCTATE AL SISTEMA</p>
            <h2 className="section-title text-white mb-8">¿Listo para explorar?</h2>
            <Link to="/movies" className="btn-neon-cyan text-base px-12 py-4 inline-block">
            ▶ Explorar Catálogo Completo
            </Link>
        </section>

        <style>{`
            @keyframes ticker {
            from { transform: translateX(0); }
            to { transform: translateX(-33.333%); }
            }
            @keyframes tickerReverse {
            from { transform: translateX(-33.333%); }
            to { transform: translateX(0); }
            }
        `}</style>
        </div>
    )
    }
