import { useGetAllPropductsQuery, baseUrl } from '../../redux/apiSlice'
import { Product } from '../Product'
import { NavLink } from 'react-router-dom'
import st from './style.module.scss'

export const ProductDemonstration = () => {
    const { data, isLoading, error } = useGetAllPropductsQuery()
    const eachData = data && data


    
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
                                            key={el.id}
                                            image={baseUrl + el.image}
                                            price={el.price}
                                            title={el.title}
                                            addToBasketHandler={event =>el.addToBasketHandler(event, el)}
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