import { useGetAllPropductsQuery } from '../../redux/apiSlice'
import { Product } from '../Product'
import { NavLink } from 'react-router-dom'
import st from './style.module.scss'
import { useDispatch } from 'react-redux'
import { addProductToBasket, countTotalPrice } from '../../redux/basketSlice'


export const ProductDemonstration = () => {
    const { data, isLoading, error } = useGetAllPropductsQuery()
    const eachData = data && data

    const dispatch = useDispatch()

const addToBasketHandler = (event, el) => {
    event.preventDefault()
    const newProduct = { ...el, quantity: 1 };
    dispatch(addProductToBasket(newProduct));
    dispatch(countTotalPrice());
}



    return (
        <div>
    {error ? <h1>{error}</h1> : null}
                {isLoading ? (
                    <h1>LOADING</h1>
                ) : (
                    <>

                        <div className={st.productsContainer}>

                                {eachData.map(
                                (el) => el.id <= 4 && (
                                    <NavLink to={`/products/${el.id}`} key={el.id}>
                                        <Product
                                        {... el}
                                            addToBasketHandler={event => addToBasketHandler(event, el)}
                                            /> 
                                    </NavLink>
                                    
                                )
                            )}
    
                        </div>
                    </>
                )}
        </div>
    )
}