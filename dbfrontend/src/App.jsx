import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import AuthForm from './component/AuthForm.jsx'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  
    <AuthForm />
    
    </>
  )
}

export default App
