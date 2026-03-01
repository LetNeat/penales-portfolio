import useReveal from '../hooks/useReveal'
import styles from './Stats.module.css'

const stats = [
  { number: '50+', label: 'Bugs Logged' },
  { number: '100+', label: 'Store Deployments' },
  { number: '20%', label: 'Quality Improvement' },
  { number: '3', label: 'Project Tracks' },
]

export default function Stats() {
  const ref = useReveal()
  return (
    <div className={`${styles.bar} reveal`} ref={ref}>
      {stats.map((s, i) => (
        <div className={styles.stat} key={i}>
          <div className={styles.number}>{s.number}</div>
          <div className={styles.label}>{s.label}</div>
        </div>
      ))}
    </div>
  )
}
