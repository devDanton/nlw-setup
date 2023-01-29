import { Header } from './components/Header'
import { HabitDay } from './components/HabitDay'
import { SumaryTable } from './components/SumaryTable'

import './styles/global.css'


export function App() {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="w-full max-w-5xl px-6 flex flex-col gap-16">
        <Header />
        <SumaryTable />
      </div>
    </div>
  )
}
//components: Reaproveirar / isolar
//propriedades: Uma informação enviada pra modificar um componente visual ou comportamentalmente.
