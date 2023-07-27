    import { useGetAllPropductsQuery } from "../../redux/apiSlice"
    import st from './style.module.scss'
    import { NavLink} from 'react-router-dom'
    import { Product } from "../Product"
    import { useDispatch } from "react-redux"
    import { useState } from "react"
    import { Filtration } from "../Filtration"

    import { addProductToBasket, countTotalPrice } from "../../redux/basketSlice"

    export const SaleProductsList = () => {
    const { data, isLoading } = useGetAllPropductsQuery();

    const [filteredProducts, setFiltredProducts] = useState()
    
    const eachData = data && data 
        
    const dispatch = useDispatch()

    const addToBasketHandler = (event, el) => {
    event.preventDefault()
    
    const newProduct = { ...el, quantity: 1 };
    dispatch(addProductToBasket(newProduct));
    dispatch(countTotalPrice());
}
        
    const productsWithDiscount =
            eachData ? eachData.filter(el => el.discont_price) : []
    
    const setFiltredProductsHandler = (productsToFilter) => {
    setFiltredProducts(productsToFilter)
}   
        return (
        <div className={st.products}>
        {isLoading ? (
            <h1>Loading...</h1>
                ) :
                (
        
            <>
            <Filtration products={productsWithDiscount} setFiltredProducts={setFiltredProductsHandler} />                
            {filteredProducts && filteredProducts.map((el) => (
            <NavLink key={el.id} to={`/products/${el.id}`}>
                <Product
                {...el}
                addToBasketHandler={event => addToBasketHandler(event, el)}
                />
            </NavLink>
            ))}
        </>
        )}
        </div>
    )
}