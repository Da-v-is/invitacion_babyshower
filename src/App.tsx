import { useCallback, useState } from 'react'
import { invitation } from './data/invitation'
import Countdown from './components/Countdown'
import CharacterScenes from './components/CharacterScenes'
import EventDetails from './components/EventDetails'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Location from './components/Location'
import MusicControl from './components/MusicControl'
import OpeningButterflies from './components/OpeningButterflies'
import RSVP from './components/RSVP'
import Welcome from './components/Welcome'
import WingedInterlude from './components/WingedInterlude'

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [opening, setOpening] = useState(false)
  const finishOpening = useCallback(() => setOpening(false), [])
  const openInvitation = () => {
    if (opening) return
    // Esta interacción del usuario también autoriza el inicio de audio en navegadores
    // que bloquean autoplay con sonido al cargar la página.
    window.dispatchEvent(new Event('invitation:open'))
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      document.querySelector('#bienvenida')?.scrollIntoView({ behavior: 'auto' })
      return
    }
    setOpening(true)
  }
  return <div className="invitation">
    <nav className="nav" aria-label="Navegación principal">
      <a className="brand" href="#inicio" aria-label="Ir al inicio">V<span>♡</span></a>
      <button className="menu-toggle" type="button" aria-expanded={menuOpen} aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? 'Cerrar' : 'Menú'} <span aria-hidden="true">{menuOpen ? '×' : '☰'}</span></button>
      <div className={`nav-links${menuOpen ? ' is-open' : ''}`}>
        {[["Bienvenida", "bienvenida"], ["Detalles", "detalles"], ["Ubicación", "ubicacion"], ["Asistencia", "confirmar"]].map(([label, id]) => <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)}>{label}</a>)}
      </div>
    </nav>
    <div className="corner-art" aria-hidden="true"><img className="corner-art-top" src="/images/mariposa.png" alt="" /><img className="corner-art-bottom" src="/images/abeja.png" alt="" /></div>
    <Hero babyName={invitation.babyName} babyPhoto={invitation.babyPhoto} hosts={invitation.hostNames} onOpen={openInvitation} isOpening={opening} />
    <main>
      <Welcome message={invitation.introMessage} />
      <WingedInterlude />
      <EventDetails />
      <CharacterScenes />
      <Countdown date={invitation.eventDate} />
      <section className="honey-note" aria-label="Un detalle dulce"><img src="/images/miel.png" alt="Tarro de miel con abejitas" loading="lazy" /><span>Un día lleno de amor<br />y dulces momentos</span><img src="/images/abeja.png" alt="Abejita" loading="lazy" /></section>
      <Location />
      <RSVP />
    </main>
    <Footer message={invitation.closingMessage} />
    <MusicControl src={invitation.musicUrl} label={invitation.musicLabel} />
    {opening && <OpeningButterflies onComplete={finishOpening} />}
  </div>
}



