import { Header } from './Layout/Header'
import { Outlet } from 'react-router'
import { Footer } from './Layout/Footer'
import './App.scss'


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
