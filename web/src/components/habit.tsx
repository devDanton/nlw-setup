type HabitProps = {
  completed: number
}

export function Habit(props: HabitProps) {
  return (
    <p className="bg-gray-800 w-10 h-10 text-white rounded text-center">{props.completed}</p>
  )
}