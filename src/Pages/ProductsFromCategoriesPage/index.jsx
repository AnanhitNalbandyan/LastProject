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


export const ProductsFromCategoriesPage = () => {
    const { id} = useParams()
    

    const { data, isLoading, error } = useGetOneCategoryQuery(id)

    const [filteredProducts, setFiltredProducts] = useState()
    const [isAddingToBasket, setIsAddingToBasket] = useState(false)

    const eachData = data && data.data


    const dispatch = useDispatch()

    const addToBasketHandler = async (event, el) => {
        if (isAddingToBasket) {
            return
        }

        setIsAddingToBasket(true) 
        try {
            event.preventDefault()

            toast.success(`Product ${el.title} Added to Basket!`, {
                position: toast.POSITION.TOP_RIGHT,
                autoClose: 3000,
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

            setTimeout(() => {
                setIsAddingToBasket(false)
            }, 1000)
        } catch (error) {
            console.error("Error adding product to basket:", error);
            setIsAddingToBasket(false)
        }
    }
    const setFiltredProductsHandler = useCallback((productsToFilter) => {
    setFiltredProducts(productsToFilter)
}, [])
    
    
    return (
    <div className={st.byCategoryContainer}>
        {error ? <h1>{error}</h1> : null}
        {isLoading ? (
            <h1>LOADING</h1>
        ) : (
            <>
                <h3 className={st.categoryTitle}>{data ? data.category.title : 'What do you want'}</h3>
                    <ToastContainer autoClose={5000} />   
                <Filtration products={eachData} setFiltredProducts={setFiltredProductsHandler} />
                <div className={st.categoriesWrapper}>
                    {filteredProducts &&
                        filteredProducts.map((el) => (
                            <div key={el.id} className={st.wrapper}>
                                <NavLink key={el.id} to={`/products/${el.id}`}>
                                    <Product {...el}
                                        addToBasketHandler={event => addToBasketHandler(event, el)}
                                        isAddingToBasket={isAddingToBasket}
                                    />
                                </NavLink>
                            </div>
                        ))}
                </div>
            </>
        )}
    </div>
    )
}

