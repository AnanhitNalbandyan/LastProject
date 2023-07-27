import st from './style.module.scss'
import {useGetOneCategoryQuery} from '../../redux/apiSlice'
import { useParams } from 'react-router'
import { NavLink } from 'react-router-dom'
import {Product} from '../../Components/Product'
import { useDispatch } from 'react-redux'
import { addProductToBasket, countTotalPrice } from '../../redux/basketSlice'
import {TitleGlobal} from '../../Components/TitleGlobal'
import { useState } from "react"
import { Filtration } from '../../Components/Filtration'

export const ProductsFromCategories = () => {
    const { id } = useParams()
    

    const { data, isLoading, error } = useGetOneCategoryQuery(id)
    
    const [filteredProducts, setFiltredProducts] = useState()
    
    const eachData = data && data.data

    const categoryName = data && data.category

    const dispatch = useDispatch()

    const addToBasketHandler = (event, el) => {
    event.preventDefault()
    const newProduct = { ...el, quantity: 1 };
    dispatch(addProductToBasket(newProduct));
    dispatch(countTotalPrice());
}

    const setFiltredProductsHandler = (productsToFilter) => {
    setFiltredProducts(productsToFilter)
}
    
    return (
        <>
                {error ? <h1>{error}</h1> : null}
                {isLoading ? (
                    <h1>LOADING</h1>
                ) : (
                    <div className={st.container}>
                        
                        <Filtration products={eachData} setFiltredProducts={setFiltredProductsHandler} />
                        <div className={st.wrapper}>
                        
                            <TitleGlobal title={categoryName.title}/>

                            <div className={st.categoriesWrapper}>

                                {filteredProducts && filteredProducts.map((el) => (
                                    <NavLink key={el.id} to={`/products/${el.id}`}>
                                        <Product
                                        {...el}
                                            addToBasketHandler={event => addToBasketHandler(event, el)}  
                                        />
                                    </NavLink>
                                ))}

                            </div>

                        </div>
                    </div>
                )}       
        </>
    )
}

