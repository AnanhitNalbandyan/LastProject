import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux'
import {store} from './redux/store'
import './index.css'
import App from './App'
import { ErrorPage } from './Pages/ErrorPage'
import { HomePage } from './Components/HomePage'
import { AllProducts } from './Pages/AllProducts'
import { CategoriesList } from './Pages/CategoriesList'
import { SingleProductPage } from './Pages/SingleProductPage';
import { AllSalesProducts } from './Pages/AllSaleProductList';
import { ProductsFromCategories } from './Pages/ProductsFromCategories';
import { BasketPage } from './Pages/BasketPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage/>,
    children: [
    {
        path: '/',
        element:<HomePage/>
      },
      {
        path: '/main page',
        element:<HomePage/>
      },
      {
          path: '/all products',
        element:<AllProducts/>
      },
        {
          path: '/all sales',
        element:<AllSalesProducts/>
      },
      {
          path: '/basket',
        element:<BasketPage/>
      },
      {
        path: '/sales',
        element: <AllSalesProducts/>
      },
      {
          path: '/catalog',
        element:<CategoriesList/>
      },
      
      {
          path: '/products/:id',
        element:<SingleProductPage/>
      },
    {
        path: '/category/:id',
        element: <ProductsFromCategories/>,
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


