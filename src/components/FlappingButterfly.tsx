import type { CSSProperties } from 'react'
import styles from './FlappingButterfly.module.css'

interface FlappingButterflyProps { label?: string; phase?: number; className?: string }

export default function FlappingButterfly({ label = 'Mariposa moviendo las alas', phase = 0, className = '' }: FlappingButterflyProps) {
  return <span className={`${styles.butterfly} ${className}`} role="img" aria-label={label} style={{ '--flap-phase': `${phase}s` } as CSSProperties}>
    <img className={styles.leftWing} src="/animations/personajes/mariposa-ala-izq.png" alt="" draggable="false" />
    <img className={styles.rightWing} src="/animations/personajes/mariposa-ala-der.png" alt="" draggable="false" />
    <img className={styles.body} src="/animations/personajes/mariposa-cuerpo.png" alt="" draggable="false" />
  </span>
}
