import { Header } from './Layout/Header'
import { Outlet } from 'react-router'
import './App.css'
import { Footer } from './Layout/Footer'
import { Catalog } from './Components/Catalog'
import {SaleSeason} from './Components/SaleSeason'
import { Discount } from './Components/Discount'
import { Sale } from './Components/Sale'
import { Provider } from 'react-redux'
import {store} from './redux/store'

function App() {


  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <SaleSeason />
        <Catalog />
        <Discount />
        <Sale />
        <Outlet />
        <Footer />
      </div>
    </Provider>
  )
}

export default App
