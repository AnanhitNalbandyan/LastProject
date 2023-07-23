import st from './style.module.scss'
import { useGetAllCategoriesQuery } from '../../redux/apiSlice'
import { Category } from '../Category'
import { NavLink } from 'react-router-dom'


export const CatalogDemonstartion = () => {
    
    const { data, isLoading, error } = useGetAllCategoriesQuery();

    const eachData = data && data

    return (
        <>
        <div>
    {error ? <h1>{error}</h1> : null}
                {isLoading ? (
                    <h1>LOADING</h1>
                ) : (
                    <>
                        <div className={st.categoriesContainer}>

                                {eachData.map(
                                (el) => el.id <= 4 && (
                                    <NavLink key={el.id} to={`/categories/${el.id}`}>
                                        <Category
                                            key={el.id}
                                        {...el}
                                        />
                                    </NavLink>
                                )
                            )}
    
                        </div>
                    </>
                )}
    </div>
        
        </>
    )
}

