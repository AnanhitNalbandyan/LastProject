import st from './style.module.scss'
import {useGetOneCategoryQuery, baseUrl} from '../../redux/apiSlice'
import { useParams } from 'react-router'
import { NavLink } from 'react-router-dom'
import {Product} from '../../Components/Product'



export const ProductsFromCategories = () => {
    const {id} = useParams()
    const { data, isLoading, error } = useGetOneCategoryQuery(id)
    const eachData = data && data.data


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
                                            addProductToBasketHandler={el.addProductToBasketHandler}
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

