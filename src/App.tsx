import { GameProvider } from './context/GameContext'
import { useGame } from './context/GameContext'
import Layout from './components/Layout/Layout'
import WelcomeScreen from './screens/WelcomeScreen/WelcomeScreen'
import GameScreen from './screens/GameScreen/GameScreen'

function AppContent() {
  const { state } = useGame()

  return (
    <Layout>
      {state.screen === 'welcome' ? <WelcomeScreen /> : <GameScreen />}
    </Layout>
  )
}

function App() {
  return (
    <GameProvider>
      <AppContent />
    </GameProvider>
  )
}

export default App
