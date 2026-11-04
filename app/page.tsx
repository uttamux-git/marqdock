'use client'

import { useState } from 'react'
import { Compass, Grid2X2, Heart, Home, Search, Settings, Waves } from 'lucide-react'

const items = [
  { label: 'Home', icon: Home, color: '#9ce7d2' },
  { label: 'Explore', icon: Compass, color: '#9dd5ff' },
  { label: 'Collections', icon: Grid2X2, color: '#d0b7ff' },
  { label: 'Favorites', icon: Heart, color: '#ffadc5' },
  { label: 'Search', icon: Search, color: '#f6dc9a' },
  { label: 'Settings', icon: Settings, color: '#b9c4d6' },
]

export default function Page() {
  const [active, setActive] = useState(0)

  return (
    <main className="fish-page">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <header className="topbar">
        <div className="brand"><Waves size={18} strokeWidth={2.5} /><span>tide</span></div>
        <span className="topbar-note">an ocean of possibilities</span>
      </header>

      <section className="hero" aria-labelledby="page-title">
        <p className="eyebrow">INTERACTION STUDY / 01</p>
        <h1 id="page-title">Make a splash.</h1>
        <p className="intro">A playful way to navigate the deep. Hover over the dock and watch it come alive.</p>
      </section>

      <nav className="dock-wrap" aria-label="Main navigation">
        <div className="dock" onMouseLeave={() => setActive(0)}>
          {items.map((item, index) => {
            const Icon = item.icon
            const distance = Math.abs(index - active)
            const scale = active === index ? 1.25 : distance === 1 ? 1.1 : 1
            return (
              <button
                key={item.label}
                className={`dock-item ${active === index ? 'is-active' : ''}`}
                style={{ '--item-color': item.color, '--item-scale': scale } as React.CSSProperties}
                onMouseEnter={() => setActive(index)}
                onFocus={() => setActive(index)}
                aria-label={item.label}
                aria-current={active === index ? 'page' : undefined}
              >
                <span className="icon-bubble"><Icon size={22} strokeWidth={1.8} /></span>
                <span className="item-label">{item.label}</span>
              </button>
            )
          })}
        </div>
        <p className="dock-hint">Hover to explore <span>↗</span></p>
      </nav>

      <footer className="footer"><span>Scroll gently</span><span className="footer-line" /><span>2024—∞</span></footer>
    </main>
  )
}
