import { useState } from 'react'
import Header from './components/Header'
import DashboardItem from './components/DashboardItem'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Header />
     <DashboardItem />
    </>
  )
}

export default App
