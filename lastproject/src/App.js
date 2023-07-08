import { Header } from './Layout/Header'
import { Outlet } from 'react-router'
import './App.css'
import { Footer } from './Layout/Footer'
import { Catalog } from './Components/Catalog'
import {SaleSeason} from './Components/SaleSeason'
import { Discount } from './Components/Discount'
import {Sale} from './Components/Sale'

function App() {


  return (
    <div className="App">
      <Header />
      <SaleSeason/>
      <Catalog />
      <Discount />
      <Sale/>
      <Outlet />
      <Footer />
    </div>
  )
}

export default App
