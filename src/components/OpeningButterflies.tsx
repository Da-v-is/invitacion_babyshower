import { useEffect, useState } from 'react'
import FlappingButterfly from './FlappingButterfly'
import styles from './OpeningButterflies.module.css'

interface OpeningButterfliesProps { onComplete: () => void }
export default function OpeningButterflies({ onComplete }: OpeningButterfliesProps) {
  const [ready, setReady] = useState(false)
  useEffect(() => {
    let cancelled = false
    let frame = 0
    let completed = false
    const root = document.documentElement
    const previousScrollBehavior = root.style.scrollBehavior
    const sources = [
      '/animations/personajes/mariposa-ala-izq.png',
      '/animations/personajes/mariposa-ala-der.png',
      '/animations/personajes/mariposa-cuerpo.png',
    ]
    const load = (src: string) => new Promise<void>((resolve) => {
      const image = new Image()
      image.onload = () => resolve()
      image.onerror = () => resolve()
      image.src = src
      if (image.complete) resolve()
    })
    void Promise.all(sources.map(load)).then(() => {
      if (cancelled) return
      setReady(true)
      const welcome = document.querySelector<HTMLElement>('#bienvenida')
      if (!welcome) { onComplete(); return }
      const startY = window.scrollY
      const navHeight = document.querySelector<HTMLElement>('.nav')?.getBoundingClientRect().height ?? 0
      const targetY = Math.max(startY, startY + welcome.getBoundingClientRect().top - navHeight - 12)
      const startTime = performance.now()
      root.style.scrollBehavior = 'auto'

      const moveWithButterflies = (now: number) => {
        if (cancelled) return
        const progress = Math.min(1, (now - startTime) / 3000)
        const eased = (1 - Math.cos(Math.PI * progress)) / 2
        window.scrollTo(0, startY + (targetY - startY) * eased)
        if (progress < 1) {
          frame = window.requestAnimationFrame(moveWithButterflies)
          return
        }
        completed = true
        root.style.scrollBehavior = previousScrollBehavior
        onComplete()
      }
      frame = window.requestAnimationFrame(moveWithButterflies)
    })
    return () => {
      cancelled = true
      window.cancelAnimationFrame(frame)
      if (!completed) root.style.scrollBehavior = previousScrollBehavior
    }
  }, [onComplete])

  if (!ready) return null
  return <div className={styles.overlay} aria-hidden="true">
    <div className={`${styles.flight} ${styles.one}`}><FlappingButterfly phase={0} /></div>
    <div className={`${styles.flight} ${styles.two}`}><FlappingButterfly phase={-0.18} /></div>
    <div className={`${styles.flight} ${styles.three}`}><FlappingButterfly phase={-0.35} /></div>
    <div className={`${styles.flight} ${styles.four}`}><FlappingButterfly phase={-0.08} /></div>
    <div className={`${styles.flight} ${styles.five}`}><FlappingButterfly phase={-0.27} /></div>
  </div>
}
