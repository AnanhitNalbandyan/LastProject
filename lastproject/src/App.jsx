import { Header } from './Layout/Header'
import { Outlet } from 'react-router'
import './App.css'
import { Footer } from './Layout/Footer'

function App() {


  return (
  
      <div className="App">
        <Header />
        <Outlet />
        <Footer />
      </div>
  
  )
}

export default App
