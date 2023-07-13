import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux'
import {store} from './redux/store'
import './index.css'
import App from './App'
import { ErrorPage } from './Pages/ErrorPage'
import { MainPage } from './Components/MainPage'
import {ProductPage} from './Pages/ProductPage'
import { AllProducts } from './Pages/AllProducts'
import {CategoriesList} from './Pages/CategoriesList'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage/>,
    children: [
    {
        path: '/',
        element:<div><MainPage/></div>
      },
      {
        path: '/main page',
        element:<div><MainPage/></div>
      },
      {
          path: '/all products',
        element:<div><AllProducts/></div>
      },
        {
          path: '/all sales',
        element:<div><AllProducts/></div>
      },
      
      {
          path: '/catalog',
        element:<div><CategoriesList/></div>
      },
      
      {
          path: '/products/:id',
        element:<div><ProductPage/></div>
      },
    
      ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}> 
    
        <RouterProvider router= {router}>
          <App />
      </RouterProvider>
  </Provider>
);


