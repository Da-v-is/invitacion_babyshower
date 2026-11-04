import { useEffect, useState } from 'react'
import styles from './Countdown.module.css'

interface CountdownProps { date: string }
type TimeLeft = { days: number; hours: number; minutes: number; seconds: number }

function getTimeLeft(date: string): TimeLeft {
  const delta = Math.max(0, new Date(date).getTime() - Date.now())
  return {
    days: Math.floor(delta / 86_400_000),
    hours: Math.floor((delta / 3_600_000) % 24),
    minutes: Math.floor((delta / 60_000) % 60),
    seconds: Math.floor((delta / 1_000) % 60),
  }
}

export default function Countdown({ date }: CountdownProps) {
  const [time, setTime] = useState(() => getTimeLeft(date))
  useEffect(() => {
    const timer = window.setInterval(() => setTime(getTimeLeft(date)), 1000)
    return () => window.clearInterval(timer)
  }, [date])
  const values = [['Días', time.days], ['Horas', time.hours], ['Minutos', time.minutes], ['Segundos', time.seconds]] as const
  return <section className={styles.section} aria-label="Cuenta regresiva">
    <p className="eyebrow">La espera más dulce</p>
    <h2 className="section-title">Cada vez falta menos</h2>
    <div className={styles.counter}>{values.map(([label, value]) =>
      <div className={styles.unit} key={label}><span className={styles.number}>{String(value).padStart(2, '0')}</span><span className={styles.label}>{label}</span></div>
    )}</div>
  </section>
}
