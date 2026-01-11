import { useGame } from '../../context/GameContext'
import { Category, CATEGORY_COLORS, ALL_CATEGORIES } from '../../types'
import { terms } from '../../data/terms'
import styles from './CategoryFilter.module.css'

export default function CategoryFilter() {
  const { state, dispatch } = useGame()
  const { selectedCategories } = state

  const getCategoryCount = (category: Category) =>
    terms.filter(t => t.category === category).length

  const handleToggle = (category: Category) => {
    dispatch({ type: 'TOGGLE_CATEGORY', category })
  }

  const handleSelectAll = () => {
    dispatch({ type: 'SELECT_ALL_CATEGORIES' })
  }

  const allSelected = selectedCategories.length === ALL_CATEGORIES.length

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h3 className={styles.title}>Categories</h3>
        <button
          className={styles.selectAll}
          onClick={handleSelectAll}
          disabled={allSelected}
        >
          Select All
        </button>
      </div>

      <div className={styles.categories} role="group" aria-label="Category filters">
        {ALL_CATEGORIES.map(category => {
          const isSelected = selectedCategories.includes(category)
          const count = getCategoryCount(category)
          const color = CATEGORY_COLORS[category]

          return (
            <button
              key={category}
              className={`${styles.categoryButton} ${isSelected ? styles.selected : ''}`}
              onClick={() => handleToggle(category)}
              style={{
                '--category-color': color,
                borderColor: isSelected ? color : 'transparent',
              } as React.CSSProperties}
              aria-pressed={isSelected}
            >
              <span
                className={styles.colorDot}
                style={{ backgroundColor: color }}
                aria-hidden="true"
              />
              <span className={styles.categoryName}>{category}</span>
              <span className={styles.count}>{count}</span>
            </button>
          )
        })}
      </div>

      <p className={styles.summary}>
        {selectedCategories.length} of {ALL_CATEGORIES.length} categories selected
        ({terms.filter(t => selectedCategories.includes(t.category)).length} terms)
      </p>
    </div>
  )
}
