import st from './style.module.scss'
import {useGetOneCategoryQuery, baseUrl} from '../../redux/apiSlice'
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
                            <h2>{eachData.title}</h2>
                            <div className={st.categoriesWrapper}>
                                {eachData.map((el, id) => (
                                    <NavLink key={id} to={`/categories/${el.id}`}>
                                        <Product
                                            key={el.id}
                                            title={el.title}
                                            price={el.price}
                                            image={baseUrl + el.image}
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

