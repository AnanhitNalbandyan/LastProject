    import { NavLink} from 'react-router-dom'
    import { useCallback, useState } from "react"
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

    const [filteredProducts, setFilteredProducts] = useState()
    const [isAddingToBasket, setIsAddingToBasket] = useState(false)
        
    const eachData = data && data 
        
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
        
    const productsWithDiscount =
            eachData ? eachData.filter(el => el.discont_price) : []
    
    const setFiltredProductsHandler = useCallback(productsToFilter => {
    setFilteredProducts(productsToFilter)
}, [])
        return (
        <div className={st.container}>
        {isLoading ? (
            <h1>Loading...</h1>
                ) :
                (
        
            <>
                <ToastContainer autoClose={3000} />
                <FiltrationForSale products={productsWithDiscount}
                            setFiltredProducts={setFiltredProductsHandler}   
                />                
                <div className={st.products}>
                    {filteredProducts && filteredProducts.map((el) => (
                    <NavLink key={el.id} to={`/products/${el.id}`}>
                        <Product
                        {...el}
                        addToBasketHandler={event => addToBasketHandler(event, el)}
                        isAddingToBasket={isAddingToBasket}
                        />
                    </NavLink>
                ))}
                </div>
        </>
        )}
        </div>
    )
}