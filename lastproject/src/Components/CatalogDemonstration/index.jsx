import st from './style.module.scss'
import { useGetAllCategoriesQuery, baseUrl } from '../../redux/apiSlice'
import { Category } from '../Category'


export const CatalogDemonstartion = () => {
    
    const { data, isLoading, error } = useGetAllCategoriesQuery();


    return (
        <>
        <div>
    {error ? <h1>{error}</h1> : null}
                {isLoading ? (
                    <h1>LOADING</h1>
                ) : (
                    <>

                        <div className={st.categoriesContainer}>

                                {data && data
                                    .map(
                                (el) => el.id <= 3 && (
                                    <Category
                                        key={el.id}
                                        title={el.title}
                                        image={baseUrl + el.image}
                                    />
                                )
                            )}
    
                        </div>
                    </>
                )}
    </div>
        
        </>
    )
}

