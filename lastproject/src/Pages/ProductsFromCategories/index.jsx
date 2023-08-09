import { useCallback,useState } from "react"
import { useParams } from 'react-router'
import { NavLink } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import { useDispatch } from 'react-redux'

import { useGetOneCategoryQuery } from '../../redux/apiSlice'
import { addProductToBasket, countTotalPrice } from '../../redux/basketSlice'

import {Product} from '../../Components/Product'
import { Filtration } from '../../Components/Filtration'

import 'react-toastify/dist/ReactToastify.css'
import st from './style.module.scss'


export const ProductsFromCategories = () => {
    const { id} = useParams()
    

    const { data, isLoading, error } = useGetOneCategoryQuery(id)
   // console.log(data && data.category);
    const [filteredProducts, setFiltredProducts] = useState()
    
    const eachData = data && data.data

   // const categoryName = data && data.categories && data.categories.title

    const dispatch = useDispatch()

    const addToBasketHandler = (event, el) => {
        event.preventDefault()
        
        toast.info(`Product ${el.title} Added to Card!`, {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
    })


        const newProduct = { ...el, quantity: 1 }
        dispatch(addProductToBasket(newProduct))
        dispatch(countTotalPrice())
}

    const setFiltredProductsHandler = useCallback((productsToFilter) => {
    setFiltredProducts(productsToFilter)
}, [])
    
    
    return (
        <>
                {error ? <h1>{error}</h1> : null}
                {isLoading ? (
                    <h1>LOADING</h1>
            ) : (
                    <div className={st.byCategoryContainer}>

                        <h3>{ data ? data.category.title : 'What do you want'}</h3>  
                        
                            <ToastContainer autoClose={5000} />
                            <div className={st.filtration}>
                            <Filtration products={eachData} setFiltredProducts={setFiltredProductsHandler} />
                            
                            </div>

                                <div className={st.categoriesWrapper}>

                                    {filteredProducts && filteredProducts.map((el) => (
                                    <div className={st.wrapper}>
                                        <NavLink key={el.id} to={`/products/${el.id}`}>
                                            <Product
                                            {...el}
                                                addToBasketHandler={event => addToBasketHandler(event, el)}  
                                            />
                                            </NavLink>
                                    </div>
                                    ))}

                                </div>
                        </div>
                    
                )}       
        </>
    )
}

