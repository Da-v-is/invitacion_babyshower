import styles from './Character.module.css'

interface CharacterProps { src: string; title: string; className?: string; loading?: 'eager' | 'lazy' }
export default function Character({ src, title, className = '', loading = 'lazy' }: CharacterProps) {
  return <iframe className={`${styles.frame} ${className}`} src={src} title={title} loading={loading}
    sandbox="allow-scripts" aria-label={title} />
}
