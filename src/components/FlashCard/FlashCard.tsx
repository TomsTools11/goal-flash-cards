import { useEffect, useRef, useState } from 'react'
import { Term, CATEGORY_COLORS } from '../../types'
import styles from './FlashCard.module.css'

interface FlashCardProps {
  term: Term
  isFlipped: boolean
  onFlip: () => void
}

export default function FlashCard({ term, isFlipped, onFlip }: FlashCardProps) {
  const [isAnimating, setIsAnimating] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)
  const debounceRef = useRef<number | null>(null)

  const handleFlip = () => {
    if (isAnimating) return

    setIsAnimating(true)
    onFlip()

    debounceRef.current = window.setTimeout(() => {
      setIsAnimating(false)
    }, 800)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === ' ' || e.key === 'Enter') {
      e.preventDefault()
      handleFlip()
    }
  }

  useEffect(() => {
    return () => {
      if (debounceRef.current) {
        clearTimeout(debounceRef.current)
      }
    }
  }, [])

  const categoryColor = CATEGORY_COLORS[term.category]

  return (
    <div
      ref={cardRef}
      className={`${styles.cardContainer} ${isFlipped ? styles.flipped : ''}`}
      onClick={handleFlip}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="button"
      aria-pressed={isFlipped}
      aria-label={`Flash card: ${term.term}. ${isFlipped ? 'Showing definition. Click to see term.' : 'Click to reveal definition.'}`}
    >
      <div className={styles.card}>
        <div className={styles.front}>
          <span
            className={styles.categoryBadge}
            style={{ backgroundColor: categoryColor }}
          >
            {term.category}
          </span>
          <h2 className={styles.term}>{term.term}</h2>
          <p className={styles.hint}>Click or press Space to reveal</p>
        </div>
        <div className={styles.back}>
          <span
            className={styles.categoryBadge}
            style={{ backgroundColor: categoryColor }}
          >
            {term.category}
          </span>
          <h3 className={styles.termSmall}>{term.term}</h3>
          <p className={styles.definition}>{term.definition}</p>
        </div>
      </div>
    </div>
  )
}
