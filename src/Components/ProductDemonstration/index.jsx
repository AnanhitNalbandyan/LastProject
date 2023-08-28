import { useGetAllPropductsQuery } from '../../redux/apiSlice'
import { NavLink } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addProductToBasket, countTotalPrice } from '../../redux/basketSlice'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import { Product } from '../Product'

import st from './style.module.scss'



export const ProductDemonstration = () => {
    const { data, isLoading, error } = useGetAllPropductsQuery()
    const eachData = data && data

    const dispatch = useDispatch()

    const addToBasketHandler = (event, el) => {
        event.preventDefault()

        toast.success(`Product ${el.title} Added to Card!`, {
        position: toast.POSITION.TOP_RIGHT,
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
    const discountedProducts = eachData && eachData.filter((el) => el.discont_price)


    return (
        <div>
    {error ? <h1>{error}</h1> : null}
                {isLoading ? (
                    <h1>LOADING</h1>
                ) : (
                    <>
                        <div className={st.container}>
                            <ToastContainer autoClose={5000} />
                            <div className={st.products}>
                            {discountedProducts && discountedProducts.slice(0, 4).map((el) => (
                                <NavLink to={`/products/${el.id}`} key={el.id}>
                                    <Product {...el}
                                        addToBasketHandler={(event) => addToBasketHandler(event, el)} />
                                </NavLink>
                            ))}
                            </div>
                        </div>
                    </>
                )}
        </div>
    )
}