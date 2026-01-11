import { createContext, useContext, useReducer, useEffect, ReactNode } from 'react'
import { GameState, GameAction, Category, ALL_CATEGORIES } from '../types'
import { terms } from '../data/terms'

const STORAGE_KEY = 'goal-flash-cards-state'

function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled
}

function getFilteredTerms(categories: Category[]) {
  const filtered = terms.filter(term => categories.includes(term.category))
  return shuffleArray(filtered)
}

function getInitialState(): GameState {
  try {
    const saved = sessionStorage.getItem(STORAGE_KEY)
    if (saved) {
      const parsed = JSON.parse(saved)
      return {
        ...parsed,
        flippedCards: new Set(parsed.flippedCards || []),
        masteredCards: new Set(parsed.masteredCards || []),
      }
    }
  } catch {
    // Ignore parse errors
  }

  return {
    screen: 'welcome',
    score: 0,
    streak: 0,
    bestStreak: 0,
    currentIndex: 0,
    flippedCards: new Set(),
    masteredCards: new Set(),
    selectedCategories: [...ALL_CATEGORIES],
    filteredTerms: getFilteredTerms(ALL_CATEGORIES),
    showScoreAnimation: false,
  }
}

function gameReducer(state: GameState, action: GameAction): GameState {
  switch (action.type) {
    case 'START_GAME': {
      const filteredTerms = getFilteredTerms(state.selectedCategories)
      return {
        ...state,
        screen: 'game',
        currentIndex: 0,
        filteredTerms,
        flippedCards: new Set(),
      }
    }

    case 'RESET_GAME':
      return {
        ...getInitialState(),
        selectedCategories: state.selectedCategories,
      }

    case 'GO_TO_WELCOME':
      return {
        ...state,
        screen: 'welcome',
      }

    case 'FLIP_CARD': {
      const newFlipped = new Set(state.flippedCards)
      if (newFlipped.has(action.termId)) {
        newFlipped.delete(action.termId)
      } else {
        newFlipped.add(action.termId)
      }
      return {
        ...state,
        flippedCards: newFlipped,
      }
    }

    case 'MARK_MASTERED': {
      const newMastered = new Set(state.masteredCards)
      newMastered.add(action.termId)
      const newStreak = state.streak + 1
      const newBestStreak = Math.max(state.bestStreak, newStreak)
      return {
        ...state,
        masteredCards: newMastered,
        score: state.score + 1,
        streak: newStreak,
        bestStreak: newBestStreak,
        showScoreAnimation: true,
      }
    }

    case 'MARK_LEARNING': {
      const newMastered = new Set(state.masteredCards)
      newMastered.delete(action.termId)
      return {
        ...state,
        masteredCards: newMastered,
        streak: 0,
      }
    }

    case 'NEXT_CARD': {
      const nextIndex = state.currentIndex + 1
      if (nextIndex >= state.filteredTerms.length) {
        return state
      }
      return {
        ...state,
        currentIndex: nextIndex,
      }
    }

    case 'PREV_CARD': {
      const prevIndex = state.currentIndex - 1
      if (prevIndex < 0) {
        return state
      }
      return {
        ...state,
        currentIndex: prevIndex,
      }
    }

    case 'TOGGLE_CATEGORY': {
      const newCategories = state.selectedCategories.includes(action.category)
        ? state.selectedCategories.filter(c => c !== action.category)
        : [...state.selectedCategories, action.category]

      if (newCategories.length === 0) {
        return state
      }

      return {
        ...state,
        selectedCategories: newCategories,
      }
    }

    case 'SELECT_ALL_CATEGORIES':
      return {
        ...state,
        selectedCategories: [...ALL_CATEGORIES],
      }

    case 'HIDE_SCORE_ANIMATION':
      return {
        ...state,
        showScoreAnimation: false,
      }

    default:
      return state
  }
}

interface GameContextType {
  state: GameState
  dispatch: React.Dispatch<GameAction>
}

const GameContext = createContext<GameContextType | null>(null)

export function GameProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(gameReducer, null, getInitialState)

  useEffect(() => {
    const toSave = {
      ...state,
      flippedCards: Array.from(state.flippedCards),
      masteredCards: Array.from(state.masteredCards),
    }
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(toSave))
  }, [state])

  return (
    <GameContext.Provider value={{ state, dispatch }}>
      {children}
    </GameContext.Provider>
  )
}

export function useGame() {
  const context = useContext(GameContext)
  if (!context) {
    throw new Error('useGame must be used within a GameProvider')
  }
  return context
}
