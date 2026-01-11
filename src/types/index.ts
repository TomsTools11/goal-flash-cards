export type Category =
  | 'Legal & Regulatory'
  | 'Advertising & Lead Generation'
  | 'Metrics & KPIs'
  | 'Insurance Industry'
  | 'GOAL Strategy & Technology'

export interface Term {
  id: number
  term: string
  definition: string
  category: Category
}

export type Screen = 'welcome' | 'game'

export interface GameState {
  screen: Screen
  score: number
  streak: number
  bestStreak: number
  currentIndex: number
  flippedCards: Set<number>
  masteredCards: Set<number>
  selectedCategories: Category[]
  filteredTerms: Term[]
  showScoreAnimation: boolean
}

export type GameAction =
  | { type: 'START_GAME' }
  | { type: 'RESET_GAME' }
  | { type: 'FLIP_CARD'; termId: number }
  | { type: 'MARK_MASTERED'; termId: number }
  | { type: 'MARK_LEARNING'; termId: number }
  | { type: 'NEXT_CARD' }
  | { type: 'PREV_CARD' }
  | { type: 'TOGGLE_CATEGORY'; category: Category }
  | { type: 'SELECT_ALL_CATEGORIES' }
  | { type: 'HIDE_SCORE_ANIMATION' }
  | { type: 'GO_TO_WELCOME' }

export const CATEGORY_COLORS: Record<Category, string> = {
  'Legal & Regulatory': '#0066CC',
  'Advertising & Lead Generation': '#00AA44',
  'Metrics & KPIs': '#FF8800',
  'Insurance Industry': '#CC0033',
  'GOAL Strategy & Technology': '#6633FF',
}

export const ALL_CATEGORIES: Category[] = [
  'Legal & Regulatory',
  'Advertising & Lead Generation',
  'Metrics & KPIs',
  'Insurance Industry',
  'GOAL Strategy & Technology',
]
