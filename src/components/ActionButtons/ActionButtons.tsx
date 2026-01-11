import { useGame } from '../../context/GameContext'
import styles from './ActionButtons.module.css'

interface ActionButtonsProps {
  termId: number
  isMastered: boolean
}

export default function ActionButtons({ termId, isMastered }: ActionButtonsProps) {
  const { state, dispatch } = useGame()
  const { currentIndex, filteredTerms } = state

  const isFirst = currentIndex === 0
  const isLast = currentIndex === filteredTerms.length - 1

  const handlePrev = () => {
    dispatch({ type: 'PREV_CARD' })
  }

  const handleNext = () => {
    dispatch({ type: 'NEXT_CARD' })
  }

  const handleGotIt = () => {
    if (!isMastered) {
      dispatch({ type: 'MARK_MASTERED', termId })
    }
    if (!isLast) {
      dispatch({ type: 'NEXT_CARD' })
    }
  }

  const handleLearnMore = () => {
    if (isMastered) {
      dispatch({ type: 'MARK_LEARNING', termId })
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.navigation}>
        <button
          className={styles.navButton}
          onClick={handlePrev}
          disabled={isFirst}
          aria-label="Previous card"
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
            <polyline points="15 18 9 12 15 6" />
          </svg>
          Previous
        </button>

        <button
          className={styles.navButton}
          onClick={handleNext}
          disabled={isLast}
          aria-label="Next card"
        >
          Next
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
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>
      </div>

      <div className={styles.actions}>
        <button
          className={`${styles.actionButton} ${styles.learnMore}`}
          onClick={handleLearnMore}
          disabled={!isMastered}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
            <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
          </svg>
          Need to Review
        </button>

        <button
          className={`${styles.actionButton} ${styles.gotIt} ${isMastered ? styles.mastered : ''}`}
          onClick={handleGotIt}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="20 6 9 17 4 12" />
          </svg>
          {isMastered ? 'Mastered!' : 'Got It!'}
        </button>
      </div>
    </div>
  )
}
