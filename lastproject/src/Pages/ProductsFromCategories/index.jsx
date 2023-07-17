import st from './style.module.scss'
import {useGetOneCategoryQuery, baseUrl} from '../../redux/apiSlice'
import { useParams } from 'react-router'
import { NavLink } from 'react-router-dom'
import {Product} from '../../Components/Product'



export const ProductsFromCategories = () => {
    const {id} = useParams()
    const { data, isLoading } = useGetOneCategoryQuery(id)
    const eachData = data && data.data[0]


    return (
        <>
                {isLoading ? (
                    <h1>LOADING...</h1>
                ) : (
                    <>
                        <div className={st.wrapper}>
                            <h2>{eachData.title}</h2>
                            <div className={st.categoriesWrapper}>
                                {eachData.map((el) => (
                                    <NavLink key={el.id} to={`/categories/${el.id}`}>
                                        <Product
                                            key={el.id}
                                            {...el}
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

