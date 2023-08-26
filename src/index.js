import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux'
import { store, persistor } from './redux/store'
import { PersistGate } from 'redux-persist/integration/react'
import './index.css'
import App from './App'
import { ErrorPage } from './Pages/ErrorPage'
import {HomePage} from './Pages/HomePage'
import { AllProductsPage } from './Pages/AllProductsPage'
import { CategoriesListPage } from './Pages/CategoriesListPage'
import { SingleProductPage } from './Pages/SingleProductPage';
import { AllSalesProductsPage } from './Pages/AllSalesProductsPage';
import { ProductsFromCategoriesPage } from './Pages/ProductsFromCategoriesPage';
import { BasketPage } from './Pages/BasketPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    errorElement: <ErrorPage/>,
    children: [
    {
        path: '/',
        element: <HomePage/>,
      },
      {
        path: '/mainPage',
        element: <HomePage/>,
      },
      {
        path: '/allProducts',
        element: <AllProductsPage />,
      },
        {
          path: '/allSales',
          element: <AllSalesProductsPage />,
      },
      {
          path: '/basket',
        element:<BasketPage/>,
      },
      {
        path: '/sales',
        element: <AllSalesProductsPage/>,
      },
      {
          path: '/catalog',
        element:<CategoriesListPage/>,
      },
      
      {
          path: '/products/:id',
        element:<SingleProductPage/>,
      },
    {
        path: '/categories/:id/',
        element: <ProductsFromCategoriesPage/>,
      },
      
      ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}> 
      <PersistGate loading={null} persistor={persistor}>
          <RouterProvider router= {router}>
            <App />
          </RouterProvider>
      </PersistGate>
  </Provider>
);


