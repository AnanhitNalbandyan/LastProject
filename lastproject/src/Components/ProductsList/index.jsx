    import { useGetAllPropductsQuery } from "../../redux/apiSlice"
    import st from './style.module.scss'
    import { NavLink} from 'react-router-dom'
    import { Product } from "../Product"
    import { Filtration } from "../Filtration"
    import { useDispatch } from "react-redux"
    import { addProductToBasket, countTotalPrice } from "../../redux/basketSlice"
    import { useState } from "react"

    export const ProductsList = () => {
    const { data, isLoading } = useGetAllPropductsQuery();

    const [ filteredProducts, setFiltredProducts] = useState()
    
        
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
    <div className={st.products}>
    {isLoading ? (
        <h1>Loading...</h1>
        ) : (
        <>
            <Filtration products={data} setFiltredProducts={setFiltredProductsHandler} />                
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