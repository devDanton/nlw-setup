import { Habit } from './components/habit'
import './styles/global.css'

function App() {
  return (
    <div>
      <Habit completed={3} />
      <Habit completed={10} />
      <Habit completed={20} />
      <Habit completed={30} />

    </div>
  )
}

export default App

//components: Reaproveirar / isolar
//propriedades: Uma informação enviada pra modificar um componente visual ou comportamentalmente.
