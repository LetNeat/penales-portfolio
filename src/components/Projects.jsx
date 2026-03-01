import { useState } from 'react'
import useReveal from '../hooks/useReveal'
import { projects } from '../data'
import styles from './Projects.module.css'

const filters = [
  { key: 'all', label: 'All' },
  { key: 'web', label: 'Web / Full-Stack' },
  { key: 'auto', label: 'Automation QA' },
  { key: 'manual', label: 'Manual QA' },
]

const tagClass = { web: styles.tagWeb, auto: styles.tagAuto, manual: styles.tagManual }

function ProjectCard({ project }) {
  return (
    <div className={styles.card}>
      <div className={styles.cardContent}>
        <p className={styles.num}>{project.num}</p>
        <h3 className={styles.title}>{project.title}</h3>
        <p className={styles.desc}>{project.desc}</p>
        <div className={styles.tags}>
          {project.tags.map((t, i) => (
            <span key={i} className={`${styles.tag} ${tagClass[t.type]}`}>{t.label}</span>
          ))}
        </div>
      </div>
      <span className={styles.arrow}>→</span>
    </div>
  )
}

export default function Projects() {
  const [active, setActive] = useState('all')
  const filterRef = useReveal()

  const visible = active === 'all' ? projects : projects.filter(p => p.type === active)

  return (
    <section className={styles.section} id="work">
      <p className={styles.sectionLabel}>Selected Work</p>
      <h2 className={styles.sectionTitle}>Web, Automation<br />&amp; Manual QA Projects</h2>

      <div className={`${styles.filterRow} reveal`} ref={filterRef}>
        {filters.map(f => (
          <button
            key={f.key}
            className={`${styles.filterBtn} ${active === f.key ? styles.filterActive : ''}`}
            onClick={() => setActive(f.key)}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className={styles.grid}>
        {visible.map(p => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>
    </section>
  )
}
