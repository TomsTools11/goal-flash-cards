import { useEffect, useRef } from 'react'
import styles from './HelpModal.module.css'

interface HelpModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function HelpModal({ isOpen, onClose }: HelpModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null)
  const closeButtonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return

    if (isOpen) {
      dialog.showModal()
      closeButtonRef.current?.focus()
    } else {
      dialog.close()
    }
  }, [isOpen])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose()
      }
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <dialog
      ref={dialogRef}
      className={styles.dialog}
      aria-labelledby="help-title"
      onClick={(e) => {
        if (e.target === dialogRef.current) {
          onClose()
        }
      }}
    >
      <div className={styles.content}>
        <header className={styles.header}>
          <h2 id="help-title" className={styles.title}>How to Play</h2>
          <button
            ref={closeButtonRef}
            className={styles.closeButton}
            onClick={onClose}
            aria-label="Close help"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </header>

        <div className={styles.body}>
          <section className={styles.section}>
            <h3>Controls</h3>
            <ul className={styles.list}>
              <li><strong>Click or Space:</strong> Flip the card to reveal the definition</li>
              <li><strong>Arrow Keys or Buttons:</strong> Navigate between cards</li>
              <li><strong>Got It:</strong> Mark a term as mastered and earn a point</li>
              <li><strong>Need to Review:</strong> Keep studying this term</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h3>Scoring</h3>
            <ul className={styles.list}>
              <li>Earn <strong>1 point</strong> for each term you master</li>
              <li>Build a <strong>streak</strong> by mastering terms consecutively</li>
              <li>Your progress is saved during your session</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h3>Categories</h3>
            <p>Filter terms by category from the Welcome screen. You can focus on specific topics or study all categories at once.</p>
          </section>
        </div>

        <footer className={styles.footer}>
          <button className={styles.primaryButton} onClick={onClose}>
            Got it, let's play!
          </button>
        </footer>
      </div>
    </dialog>
  )
}
