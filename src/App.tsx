import { useEffect } from 'react'
import './App.css'
import AppRoutes from './routes/AppRoutes'
import { ThemeProvider } from './theme/ThemeProvider'
import { generateToken } from './notifications/firebase'

function App() {

  useEffect(()=>{
    generateToken();
  },[])
  return (
    <ThemeProvider>
      <AppRoutes />
    </ThemeProvider>
  )
}

export default App
