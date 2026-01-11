import { useEffect } from 'react'
import { useGame } from '../../context/GameContext'
import styles from './ScorePanel.module.css'

export default function ScorePanel() {
  const { state, dispatch } = useGame()
  const { score, streak, bestStreak, currentIndex, filteredTerms, showScoreAnimation, masteredCards } = state

  const progress = filteredTerms.length > 0 ? ((currentIndex + 1) / filteredTerms.length) * 100 : 0
  const masteredCount = Array.from(masteredCards).filter(id =>
    filteredTerms.some(t => t.id === id)
  ).length

  useEffect(() => {
    if (showScoreAnimation) {
      const timer = setTimeout(() => {
        dispatch({ type: 'HIDE_SCORE_ANIMATION' })
      }, 800)
      return () => clearTimeout(timer)
    }
  }, [showScoreAnimation, dispatch])

  return (
    <div className={styles.panel} role="status" aria-live="polite">
      <div className={styles.stats}>
        <div className={styles.stat}>
          <span className={styles.statValue}>
            {score}
            {showScoreAnimation && (
              <span className={styles.scoreAnimation} aria-hidden="true">+1</span>
            )}
          </span>
          <span className={styles.statLabel}>Score</span>
        </div>

        <div className={styles.stat}>
          <span className={`${styles.statValue} ${streak >= 3 ? styles.streakGlow : ''}`}>
            {streak}
          </span>
          <span className={styles.statLabel}>Streak</span>
        </div>

        <div className={styles.stat}>
          <span className={styles.statValue}>{bestStreak}</span>
          <span className={styles.statLabel}>Best</span>
        </div>

        <div className={styles.stat}>
          <span className={styles.statValue}>{masteredCount}/{filteredTerms.length}</span>
          <span className={styles.statLabel}>Mastered</span>
        </div>
      </div>

      <div className={styles.progressContainer}>
        <div className={styles.progressLabel}>
          Card {currentIndex + 1} of {filteredTerms.length}
        </div>
        <div
          className={styles.progressBar}
          role="progressbar"
          aria-valuenow={currentIndex + 1}
          aria-valuemin={1}
          aria-valuemax={filteredTerms.length}
        >
          <div
            className={styles.progressFill}
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  )
}
