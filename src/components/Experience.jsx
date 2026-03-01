import useReveal from '../hooks/useReveal'
import { experience } from '../data'
import styles from './Experience.module.css'

export default function Experience() {
  const ref = useReveal()
  return (
    <section className={styles.section} id="experience">
      <p className={styles.sectionLabel}>Experience</p>
      <h2 className={styles.sectionTitle}>Where I've<br />worked &amp; learned.</h2>

      <div className={`${styles.timeline} reveal`} ref={ref}>
        {experience.map((job, i) => (
          <div className={styles.item} key={i}>
            <p className={styles.company}>{job.company}</p>
            <p className={styles.meta}>{job.meta}</p>
            <p className={styles.role}>{job.role}</p>
            <ul className={styles.bullets}>
              {job.bullets.map((b, j) => (
                <li key={j}>{b}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
