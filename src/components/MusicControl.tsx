import { useEffect, useRef, useState } from 'react'
import styles from './MusicControl.module.css'

interface MusicControlProps { src: string; label: string }
export default function MusicControl({ src, label }: MusicControlProps) {
  const audio = useRef<HTMLAudioElement>(null)
  const [playing, setPlaying] = useState(false)
  const [unavailable, setUnavailable] = useState(false)
  const [needsGesture, setNeedsGesture] = useState(false)
  useEffect(() => {
    const player = audio.current
    if (!src || !player) return
    const play = () => {
      player.playbackRate = 0.95
      player.volume = 0.25
      player.preservesPitch = true
      return player.play()
    }
    const onInvitationOpen = () => {
      void play().then(() => {
        setPlaying(true)
        setNeedsGesture(false)
        setUnavailable(false)
      }).catch(() => setNeedsGesture(true))
    }
    window.addEventListener('invitation:open', onInvitationOpen)
    void play().then(() => {
      setPlaying(true)
      setNeedsGesture(false)
    }).catch(() => {
      // Los navegadores pueden impedir el autoplay con sonido; el botón permite iniciarlo.
      setNeedsGesture(true)
    })
    return () => window.removeEventListener('invitation:open', onInvitationOpen)
  }, [src])
  const toggle = async () => {
    if (!src || !audio.current) { setUnavailable(true); return }
    if (playing) { audio.current.pause(); setPlaying(false); return }
    try {
      audio.current.playbackRate = 0.95
      audio.current.volume = 0.25
      audio.current.preservesPitch = true
      await audio.current.play()
      setPlaying(true)
      setUnavailable(false)
      setNeedsGesture(false)
    } catch { setUnavailable(true) }
  }
  return <div className={styles.wrap}>
    {src && <audio ref={audio} src={src} loop preload="auto" onEnded={() => setPlaying(false)} onPause={() => setPlaying(false)} onPlay={() => setPlaying(true)} />}
    <button className={styles.button} onClick={toggle} type="button" aria-pressed={playing} title={src ? label : 'Configura una pista en src/data/invitation.ts'}>
      <span aria-hidden="true">{playing ? 'Ⅱ' : '♫'}</span><span>{playing ? 'Pausar música' : needsGesture ? 'Activar música' : 'Escuchar música'}</span>
    </button>
    {needsGesture && !unavailable && <span className={styles.hint} role="status">Pulsa «Abrir invitación» o este botón para iniciar la música.</span>}
  </div>
}
