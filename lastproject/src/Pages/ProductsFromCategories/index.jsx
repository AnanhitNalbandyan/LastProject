import st from './style.module.scss'
import {useGetOneCategoryQuery} from '../../redux/apiSlice'
import { useParams } from 'react-router'
import { NavLink } from 'react-router-dom'
import {Product} from '../../Components/Product'
import { useDispatch } from 'react-redux'
import { addProductToBasket, countTotalPrice } from '../../redux/basketSlice'


export const ProductsFromCategories = () => {
    const { id } = useParams()
    

    const { data, isLoading, error } = useGetOneCategoryQuery(id)
    
    const eachData = data && data.data

    const dispatch = useDispatch()

    const addToBasketHandler = (event, el) => {
    event.preventDefault()
    const newProduct = { ...el, quantity: 1 };
    dispatch(addProductToBasket(newProduct));
    dispatch(countTotalPrice());
}

    return (
        <>
                {error ? <h1>{error}</h1> : null}
                {isLoading ? (
                    <h1>LOADING</h1>
                ) : (
                    <>
                        <div className={st.wrapper}>
                            
                            <div className={st.categoriesWrapper}>
                                {eachData.map((el) => (
                                    <NavLink key={el.id} to={`/products/${el.id}`}>
                                        <Product
                                            key={el.id}
                                            title={el.title}
                                            price={el.price}
                                            image={el.image}
                                            addToBasketHandler={event => addToBasketHandler(event, el)}  
                                        />
                                    </NavLink>
                                ))}

                            </div>

                        </div>
                    </>
                )}       
        </>
    )
}

