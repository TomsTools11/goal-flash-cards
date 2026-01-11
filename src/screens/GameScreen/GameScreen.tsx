import { useEffect, useCallback, useState } from 'react'
import { useGame } from '../../context/GameContext'
import FlashCard from '../../components/FlashCard/FlashCard'
import ScorePanel from '../../components/ScorePanel/ScorePanel'
import ActionButtons from '../../components/ActionButtons/ActionButtons'
import HelpModal from '../../components/HelpModal/HelpModal'
import styles from './GameScreen.module.css'

export default function GameScreen() {
  const { state, dispatch } = useGame()
  const [showHelp, setShowHelp] = useState(false)

  const { currentIndex, filteredTerms, flippedCards, masteredCards } = state

  const currentTerm = filteredTerms[currentIndex]
  const isFlipped = currentTerm ? flippedCards.has(currentTerm.id) : false
  const isMastered = currentTerm ? masteredCards.has(currentTerm.id) : false

  const handleFlip = useCallback(() => {
    if (currentTerm) {
      dispatch({ type: 'FLIP_CARD', termId: currentTerm.id })
    }
  }, [currentTerm, dispatch])

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    switch (e.key) {
      case 'ArrowLeft':
        dispatch({ type: 'PREV_CARD' })
        break
      case 'ArrowRight':
        dispatch({ type: 'NEXT_CARD' })
        break
      case '?':
        setShowHelp(prev => !prev)
        break
    }
  }, [dispatch])

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [handleKeyDown])

  const handleBack = () => {
    dispatch({ type: 'GO_TO_WELCOME' })
  }

  if (!currentTerm) {
    return (
      <div className={styles.container}>
        <div className={styles.complete}>
          <h2>Great job!</h2>
          <p>You've gone through all the cards in the selected categories.</p>
          <p>
            Final Score: <strong>{state.score}</strong> |
            Best Streak: <strong>{state.bestStreak}</strong>
          </p>
          <button className={styles.backButton} onClick={handleBack}>
            Back to Categories
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className={styles.container}>
      <div className={styles.topBar}>
        <button className={styles.backLink} onClick={handleBack}>
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
            <polyline points="15 18 9 12 15 6" />
          </svg>
          Back
        </button>
        <button
          className={styles.helpLink}
          onClick={() => setShowHelp(true)}
          aria-label="Help"
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
            <circle cx="12" cy="12" r="10" />
            <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
            <line x1="12" y1="17" x2="12.01" y2="17" />
          </svg>
        </button>
      </div>

      <div className={styles.scoreSection}>
        <ScorePanel />
      </div>

      <div className={styles.cardSection}>
        <FlashCard
          term={currentTerm}
          isFlipped={isFlipped}
          onFlip={handleFlip}
        />
      </div>

      <div className={styles.actionsSection}>
        <ActionButtons termId={currentTerm.id} isMastered={isMastered} />
      </div>

      <HelpModal isOpen={showHelp} onClose={() => setShowHelp(false)} />
    </div>
  )
}
