import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import ToDoList from './components/ToDoList'
import QuoteGenerate from "./components/QuoteGenerate"


function App() {
  return (
    <div>
    <ToDoList />
    <QuoteGenerate />
    </div>
  )
}

export default App
