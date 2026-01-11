import { useState } from 'react'
import { useGame } from '../../context/GameContext'
import CategoryFilter from '../../components/CategoryFilter/CategoryFilter'
import HelpModal from '../../components/HelpModal/HelpModal'
import styles from './WelcomeScreen.module.css'

export default function WelcomeScreen() {
  const { state, dispatch } = useGame()
  const [showHelp, setShowHelp] = useState(false)

  const handleStart = () => {
    dispatch({ type: 'START_GAME' })
  }

  const handleReset = () => {
    dispatch({ type: 'RESET_GAME' })
  }

  const hasProgress = state.score > 0 || state.masteredCards.size > 0

  return (
    <div className={styles.container}>
      <div className={styles.hero}>
        <h2 className={styles.title}>Master Industry Terminology</h2>
        <p className={styles.subtitle}>
          Learn essential terms for insurance, advertising, compliance, and the GOAL platform
          through interactive flash cards.
        </p>
      </div>

      <div className={styles.content}>
        <CategoryFilter />

        {hasProgress && (
          <div className={styles.progressSummary}>
            <div className={styles.progressInfo}>
              <span className={styles.progressLabel}>Your Progress:</span>
              <span className={styles.progressValue}>
                {state.score} points | {state.masteredCards.size} terms mastered | Best streak: {state.bestStreak}
              </span>
            </div>
            <button className={styles.resetButton} onClick={handleReset}>
              Reset Progress
            </button>
          </div>
        )}

        <div className={styles.actions}>
          <button
            className={styles.startButton}
            onClick={handleStart}
            disabled={state.selectedCategories.length === 0}
          >
            {hasProgress ? 'Continue Learning' : 'Start Learning'}
          </button>
          <button className={styles.helpButton} onClick={() => setShowHelp(true)}>
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
              <circle cx="12" cy="12" r="10" />
              <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
              <line x1="12" y1="17" x2="12.01" y2="17" />
            </svg>
            How to Play
          </button>
        </div>
      </div>

      <HelpModal isOpen={showHelp} onClose={() => setShowHelp(false)} />
    </div>
  )
}
