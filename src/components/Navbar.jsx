import { useState, useEffect } from 'react'
import styles from './Navbar.module.css'

const links = [
  { href: '#work', label: 'Work' },
  { href: '#experience', label: 'Experience' },
  { href: '#skills', label: 'Skills' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [active, setActive] = useState('')

  useEffect(() => {
    const handler = () => {
      const sections = document.querySelectorAll('section[id]')
      let current = ''
      sections.forEach(s => {
        if (window.scrollY >= s.offsetTop - 90) current = s.id
      })
      setActive(current)
    }
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <nav className={styles.nav}>
      <a href="#home" className={styles.logo}>Boyet P. Peñales</a>
      <ul className={styles.links}>
        {links.map(l => (
          <li key={l.href}>
            <a
              href={l.href}
              className={`${styles.link} ${active === l.href.slice(1) ? styles.active : ''}`}
            >
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
