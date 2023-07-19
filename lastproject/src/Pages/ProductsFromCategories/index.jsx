import st from './style.module.scss'
import {useGetOneCategoryQuery, baseUrl} from '../../redux/apiSlice'
import { useParams } from 'react-router'
import { NavLink } from 'react-router-dom'
import {Product} from '../../Components/Product'



export const ProductsFromCategories = () => {
    const {id} = useParams()
    const { data, isLoading } = useGetOneCategoryQuery(id)
    const eachData = data && data.data && data.data[0]


    return (
        <>
                {isLoading ? (
                    <h1>LOADING...</h1>
                ) : (
                    <>
                        <div className={st.wrapper}>
                            <h2>{eachData[0].title}</h2>
                            <div className={st.categoriesWrapper}>
                                {eachData.map((el, index) => (
                                    <NavLink key={index} to={`/categories/${el}`}>
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

