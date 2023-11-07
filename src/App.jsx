import { useState, useEffect } from 'react'
import Header from './components/Header'
import DashboardItem from './components/DashboardItem'

function App() {

  const [filter, setFilter] = useState("")

  return (
    <>
     <Header onFilter={setFilter}/>
     <DashboardItem filter={filter} />
    </>
  )
}

export default App
