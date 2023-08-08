    import { NavLink} from 'react-router-dom'
    import { useState } from "react"
    import { useDispatch } from "react-redux"
    import { ToastContainer, toast } from 'react-toastify'
    
    import { Product } from "../Product"
    
    import { useGetAllPropductsQuery } from "../../redux/apiSlice"
    import { addProductToBasket, countTotalPrice } from "../../redux/basketSlice"
    import { FiltrationForSale } from "../FiltrationForSale"
    
    import st from './style.module.scss'
    import 'react-toastify/dist/ReactToastify.css'
    
    
    export const SaleProductsList = () => {
    const { data, isLoading } = useGetAllPropductsQuery();

    const [filteredProducts, setFiltredProducts] = useState()
    
    const eachData = data && data 
        
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
                <ToastContainer autoClose={5000} />
                <FiltrationForSale products={productsWithDiscount} setFiltredProducts={setFiltredProductsHandler} />                
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