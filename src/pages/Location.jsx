    const SCHEDULE = [
    { day: 'Lunes — Jueves',  hours: '16:00 — 23:00', status: 'normal' },
    { day: 'Viernes',         hours: '16:00 — 01:00', status: 'extended' },
    { day: 'Sábado',          hours: '12:00 — 02:00', status: 'extended' },
    { day: 'Domingo',         hours: '12:00 — 22:00', status: 'normal' },
    ]

    const CONTACT = [
    { icon: '◈', label: 'DIRECCIÓN', value: 'Calle Blade Runner 2049\nBarrio Cyberpunk, 28001 Madrid' },
    { icon: '◉', label: 'TELÉFONO',  value: '+34 666 777 888' },
    { icon: '✉', label: 'EMAIL',     value: 'info@retrocinema.es' },
    { icon: '⬡', label: 'METRO',     value: 'Línea 2 — Estación Futuro' },
    ]

    function NeonMap() {
    return (
        <div
        className="relative w-full overflow-hidden border"
        style={{
            aspectRatio: '16/9',
            borderColor: 'rgba(0,245,255,0.3)',
            background: '#050510',
            boxShadow: '0 0 30px rgba(0,245,255,0.1)',
        }}
        >
        {/* Grid base */}
        <svg
            className="absolute inset-0 w-full h-full"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 800 450"
        >
            {/* Background */}
            <rect width="800" height="450" fill="#050510" />

            {/* Grid lines */}
            {Array.from({ length: 17 }, (_, i) => (
            <line key={`h${i}`} x1="0" y1={i * 28} x2="800" y2={i * 28}
                stroke="rgba(0,245,255,0.06)" strokeWidth="1" />
            ))}
            {Array.from({ length: 27 }, (_, i) => (
            <line key={`v${i}`} x1={i * 30} y1="0" x2={i * 30} y2="450"
                stroke="rgba(0,245,255,0.06)" strokeWidth="1" />
            ))}

            {/* Major roads */}
            <line x1="0" y1="225" x2="800" y2="225" stroke="rgba(0,245,255,0.25)" strokeWidth="2.5" />
            <line x1="400" y1="0" x2="400" y2="450" stroke="rgba(0,245,255,0.25)" strokeWidth="2.5" />
            <line x1="0" y1="150" x2="800" y2="150" stroke="rgba(0,245,255,0.15)" strokeWidth="1.5" />
            <line x1="0" y1="300" x2="800" y2="300" stroke="rgba(0,245,255,0.15)" strokeWidth="1.5" />
            <line x1="200" y1="0" x2="200" y2="450" stroke="rgba(0,245,255,0.15)" strokeWidth="1.5" />
            <line x1="600" y1="0" x2="600" y2="450" stroke="rgba(0,245,255,0.15)" strokeWidth="1.5" />

            {/* Diagonal road */}
            <line x1="100" y1="0" x2="700" y2="450" stroke="rgba(255,0,110,0.12)" strokeWidth="1.5" />
            <line x1="700" y1="0" x2="100" y2="450" stroke="rgba(255,0,110,0.08)" strokeWidth="1" />

            {/* Buildings (rectangles) */}
            {[
            [50, 60, 80, 50], [160, 80, 60, 40], [280, 50, 90, 60],
            [500, 70, 70, 55], [620, 50, 80, 45], [720, 80, 60, 50],
            [80, 310, 70, 60], [200, 330, 50, 45], [350, 290, 80, 55],
            [550, 320, 65, 50], [680, 300, 75, 60],
            [30, 170, 60, 40], [450, 160, 55, 35], [660, 175, 50, 30],
            ].map(([x, y, w, h], i) => (
            <rect key={i} x={x} y={y} width={w} height={h}
                fill={i % 3 === 0 ? 'rgba(0,245,255,0.04)' : i % 3 === 1 ? 'rgba(255,0,110,0.03)' : 'rgba(139,0,255,0.03)'}
                stroke={i % 3 === 0 ? 'rgba(0,245,255,0.2)' : i % 3 === 1 ? 'rgba(255,0,110,0.15)' : 'rgba(139,0,255,0.15)'}
                strokeWidth="1" />
            ))}

            {/* Glow at intersections */}
            <circle cx="400" cy="225" r="40" fill="rgba(0,245,255,0.04)" />
            <circle cx="400" cy="225" r="20" fill="rgba(0,245,255,0.06)" />

            {/* Location PIN — RetroCinema */}
            <g transform="translate(400, 225)">
            {/* Pulse rings */}
            <circle cx="0" cy="0" r="45" fill="none" stroke="rgba(0,245,255,0.15)" strokeWidth="1">
                <animate attributeName="r" values="20;50;20" dur="3s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.4;0;0.4" dur="3s" repeatCount="indefinite" />
            </circle>
            <circle cx="0" cy="0" r="30" fill="none" stroke="rgba(0,245,255,0.2)" strokeWidth="1">
                <animate attributeName="r" values="15;35;15" dur="3s" begin="0.5s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.5;0;0.5" dur="3s" begin="0.5s" repeatCount="indefinite" />
            </circle>

            {/* Pin body */}
            <path d="M 0,-18 C -10,-18 -16,-10 -16,0 C -16,10 0,25 0,25 C 0,25 16,10 16,0 C 16,-10 10,-18 0,-18 Z"
                fill="rgba(0,245,255,0.9)"
                style={{ filter: 'drop-shadow(0 0 8px #00f5ff)' }} />
            <circle cx="0" cy="-2" r="5" fill="#050510" />
            </g>

            {/* Street labels */}
            {[
            [410, 218, 'C/ BLADE RUNNER'],
            [410, 232, '28001 MADRID'],
            ].map(([x, y, text], i) => (
            <text key={i} x={x} y={y} fill="rgba(0,245,255,0.5)" fontSize="7"
                fontFamily="monospace" letterSpacing="1">
                {text}
            </text>
            ))}

            {/* Corner HUD elements */}
            <text x="10" y="20" fill="rgba(0,245,255,0.4)" fontSize="8" fontFamily="monospace">
            LAT: 40.4168°N
            </text>
            <text x="10" y="32" fill="rgba(0,245,255,0.4)" fontSize="8" fontFamily="monospace">
            LON: 3.7038°O
            </text>
            <text x="650" y="440" fill="rgba(0,245,255,0.3)" fontSize="8" fontFamily="monospace">
            RETRO_CINEMA_MAP v2.0
            </text>

            {/* Corner brackets */}
            <g stroke="rgba(0,245,255,0.4)" strokeWidth="1.5" fill="none">
            <path d="M 5,5 L 5,25 M 5,5 L 25,5" />
            <path d="M 795,5 L 795,25 M 795,5 L 775,5" />
            <path d="M 5,445 L 5,425 M 5,445 L 25,445" />
            <path d="M 795,445 L 795,425 M 795,445 L 775,445" />
            </g>
        </svg>

        {/* Overlay scan effect */}
        <div
            className="absolute inset-0 pointer-events-none"
            style={{
            background: 'repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(0,0,0,0.05) 3px, rgba(0,0,0,0.05) 4px)',
            }}
        />
        </div>
    )
    }

    export function Location() {
    return (
        <div className="min-h-screen cyber-grid pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-6">
            {/* Header */}
            <div className="mb-12">
            <p
                className="font-retro text-xs tracking-[0.4em] uppercase mb-3"
                style={{ color: '#ff006e', textShadow: '0 0 8px #ff006e' }}
            >
                SISTEMA DE LOCALIZACIÓN
            </p>
            <h1 className="section-title neon-text-cyan">Encuéntranos</h1>
            <div className="h-px w-48 mt-4"
                style={{ background: 'linear-gradient(90deg, #00f5ff, transparent)' }} />
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
            {/* Map - 2 cols */}
            <div className="lg:col-span-2">
                <div
                className="border mb-2"
                style={{
                    borderColor: 'rgba(0,245,255,0.2)',
                    boxShadow: '0 0 20px rgba(0,245,255,0.06)',
                }}
                >
                <div
                    className="px-4 py-2 border-b flex items-center gap-2"
                    style={{
                    borderColor: 'rgba(0,245,255,0.15)',
                    background: 'rgba(0,245,255,0.04)',
                    }}
                >
                    <span className="font-retro text-xs" style={{ color: '#00f5ff' }}>◉</span>
                    <span className="font-retro text-xs tracking-widest uppercase text-gray-500">
                    MAPA INTERACTIVO — MODO CYBERPUNK
                    </span>
                    <span
                    className="ml-auto font-retro text-xs px-2 py-0.5 border"
                    style={{ color: '#39ff14', borderColor: '#39ff14', fontSize: '0.6rem' }}
                    >
                    LIVE
                    </span>
                </div>
                <NeonMap />
                </div>
                <p className="font-body text-xs text-gray-700 text-center tracking-widest">
                MAPA GENERADO POR RETRO_CINEMA_SYS — NO USAR EN MISIONES CRÍTICAS
                </p>
            </div>

            {/* Info sidebar */}
            <div className="space-y-4">
                {/* Contact info */}
                {CONTACT.map(({ icon, label, value }) => (
                <div
                    key={label}
                    className="border p-4 group hover:-translate-y-1 transition-transform duration-200"
                    style={{
                    borderColor: 'rgba(0,245,255,0.2)',
                    background: 'rgba(0,245,255,0.02)',
                    }}
                >
                    <div className="flex items-start gap-3">
                    <span
                        className="font-retro text-lg mt-0.5 shrink-0"
                        style={{ color: '#00f5ff', textShadow: '0 0 8px #00f5ff' }}
                    >
                        {icon}
                    </span>
                    <div>
                        <p className="font-retro text-xs text-gray-600 tracking-widest uppercase mb-1">{label}</p>
                        <p className="font-body text-sm text-gray-300 whitespace-pre-line">{value}</p>
                    </div>
                    </div>
                </div>
                ))}
            </div>
            </div>

            {/* Schedule */}
            <div className="mt-12">
            <h2
                className="font-retro font-bold text-lg tracking-widest uppercase mb-6"
                style={{ color: '#ff006e', textShadow: '0 0 8px #ff006e' }}
            >
                ◆ Horario de Apertura
            </h2>

            <div
                className="border overflow-hidden"
                style={{ borderColor: 'rgba(0,245,255,0.2)' }}
            >
                {/* Table header */}
                <div
                className="grid grid-cols-3 px-6 py-3 border-b"
                style={{
                    borderColor: 'rgba(0,245,255,0.15)',
                    background: 'rgba(0,245,255,0.06)',
                }}
                >
                {['DÍA', 'HORARIO', 'ESTADO'].map((h) => (
                    <span key={h} className="font-retro text-xs tracking-widest text-gray-500">{h}</span>
                ))}
                </div>

                {SCHEDULE.map(({ day, hours, status }) => (
                <div
                    key={day}
                    className="grid grid-cols-3 px-6 py-4 border-b last:border-0 hover:bg-neon-cyan/5 transition-colors duration-200"
                    style={{ borderColor: 'rgba(0,245,255,0.08)' }}
                >
                    <span className="font-body text-sm text-gray-300">{day}</span>
                    <span className="font-retro text-sm" style={{ color: '#00f5ff' }}>{hours}</span>
                    <span>
                    {status === 'extended' ? (
                        <span
                        className="font-retro text-xs px-2 py-0.5 border"
                        style={{
                            color: '#ffea00',
                            borderColor: 'rgba(255,234,0,0.5)',
                            background: 'rgba(255,234,0,0.08)',
                            textShadow: '0 0 6px #ffea00',
                            fontSize: '0.65rem',
                        }}
                        >
                        HORARIO EXTENDIDO
                        </span>
                    ) : (
                        <span
                        className="font-retro text-xs px-2 py-0.5 border"
                        style={{
                            color: '#39ff14',
                            borderColor: 'rgba(57,255,20,0.4)',
                            background: 'rgba(57,255,20,0.06)',
                            fontSize: '0.65rem',
                        }}
                        >
                        ABIERTO
                        </span>
                    )}
                    </span>
                </div>
                ))}
            </div>
            </div>

            {/* Extra info */}
            <div className="mt-8 grid md:grid-cols-2 gap-4">
            {[
                {
                icon: '▶',
                title: 'Parking Disponible',
                desc: 'Aparcamiento gratuito para clientes en la Calle Gibson, a 2 minutos a pie.',
                color: '#00f5ff',
                },
                {
                icon: '⬡',
                title: 'Acceso en Transporte',
                desc: 'Metro Línea 2, autobús 47 y 156. Carril bici habilitado frente al local.',
                color: '#bf00ff',
                },
            ].map(({ icon, title, desc, color }) => (
                <div
                key={title}
                className="flex gap-4 p-5 border"
                style={{
                    borderColor: `rgba(${color === '#00f5ff' ? '0,245,255' : '191,0,255'},0.2)`,
                    background: `rgba(${color === '#00f5ff' ? '0,245,255' : '191,0,255'},0.03)`,
                }}
                >
                <span className="text-2xl shrink-0 mt-0.5" style={{ color, textShadow: `0 0 8px ${color}` }}>
                    {icon}
                </span>
                <div>
                    <h3 className="font-retro text-xs tracking-widest uppercase mb-1" style={{ color }}>{title}</h3>
                    <p className="font-body text-sm text-gray-500 leading-relaxed">{desc}</p>
                </div>
                </div>
            ))}
            </div>
        </div>
        </div>
    )
    }
