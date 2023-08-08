    import { NavLink} from 'react-router-dom'
    import { useState } from "react"
    
    import { useGetAllPropductsQuery } from "../../redux/apiSlice"
    import { addProductToBasket, countTotalPrice } from "../../redux/basketSlice"
    
    import { ToastContainer, toast } from 'react-toastify'
    import { useDispatch } from "react-redux"
    
    import { Product } from "../Product"
    import { Filtration } from "../Filtration"
    
    import st from './style.module.scss'
    import 'react-toastify/dist/ReactToastify.css'
    
    export const ProductsList = () => {
    const { data, isLoading } = useGetAllPropductsQuery();

    const [ filteredProducts, setFiltredProducts] = useState()
    
        
    const dispatch = useDispatch()

    const addToBasketHandler = (event, el) => {
        event.preventDefault()

        toast.success(`Product ${el.title} Added to Basket!`, {
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

    const setFiltredProductsHandler = (productsToFilter) => {
    setFiltredProducts(productsToFilter)
}
    
    return (
    <div className={st.products}>
    {isLoading ? (
        <h1>Loading...</h1>
        ) : (
        <>
            <ToastContainer autoClose={5000} />
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