import { HashRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'

function App() {
  return (
    <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<>xd</>} />
          <Route path="/home" element={<>prueba</>} />
        </Routes>
    </HashRouter>
  )
}

export default App
