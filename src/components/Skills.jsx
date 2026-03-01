import useReveal from '../hooks/useReveal'
import { skills } from '../data'
import styles from './Skills.module.css'

export default function Skills() {
  const ref = useReveal()
  return (
    <section className={styles.section} id="skills">
      <p className={styles.sectionLabel}>Skills &amp; Tools</p>
      <h2 className={styles.sectionTitle}>What I bring<br />to the table.</h2>

      <div className={`${styles.grid} reveal`} ref={ref}>
        {skills.map((group, i) => (
          <div className={styles.group} key={i}>
            <p className={styles.groupLabel}>{group.label}</p>
            <div className={styles.chips}>
              {group.chips.map((chip, j) => (
                <span className={styles.chip} key={j}>{chip}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
