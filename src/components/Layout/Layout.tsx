import { ReactNode } from 'react'
import styles from './Layout.module.css'

interface LayoutProps {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className={styles.layout}>
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <img
            src="/logo-dark.png"
            alt="GOAL Logo"
            className={styles.logo}
          />
          <h1 className={styles.title}>Flash Cards</h1>
        </div>
      </header>
      <main className={styles.main}>{children}</main>
      <footer className={styles.footer}>
        <p>GOAL Platform Employee Onboarding</p>
      </footer>
    </div>
  )
}
