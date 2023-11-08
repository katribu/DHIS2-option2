import { useState, useEffect } from 'react'
import Header from './components/Header'
import DashboardItem from './components/DashboardItem'

function App() {

  const [filter, setFilter] = useState("")

  return (
    <div className="bg-zinc-950 text-slate-50 font-sans">
     <Header onFilter={setFilter}/>
     <DashboardItem filter={filter} />
    </div>
  )
}

export default App
