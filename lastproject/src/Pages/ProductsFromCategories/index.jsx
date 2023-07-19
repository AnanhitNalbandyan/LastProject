import st from './style.module.scss'
import {useGetOneCategoryQuery, baseUrl} from '../../redux/apiSlice'
import { useParams } from 'react-router'
import { NavLink } from 'react-router-dom'
import {Product} from '../../Components/Product'



export const ProductsFromCategories = () => {
    const {id} = useParams()
    const { data, isLoading, error } = useGetOneCategoryQuery(id)
    const eachData = data && data.data && data.data[0]


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
                                {eachData.map((el, index) => (
                                    <NavLink key={index} to={`/categories/${el.id}`}>
                                        <Product
                                            key={el.id}
                                            title={el.title}
                                            image={baseUrl + el.image}
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

