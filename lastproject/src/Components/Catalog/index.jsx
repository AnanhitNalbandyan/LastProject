    import st from './style.module.scss'
    import { useGetAllCategoriesQuery } from '../../redux/apiSlice'
    import { baseUrl } from '../../redux/apiSlice'
    import { Category } from '../../Pages/Category'
    import { NavLink } from 'react-router-dom'


    export const Catalog = () => {
            
    const { data, isLoading, error } = useGetAllCategoriesQuery();

    return (
        <div className={st.container}>
        <div className={st.wrapper}>
            <h2>Catalog</h2>
                <NavLink className={st.category}to='/catalog'>All categories</NavLink>   
        </div>
    <div>
    {error ? <h1>{error}</h1> : null}
                {isLoading ? (
                    <h1>LOADING</h1>
                ) : (
                    <>

                        <div className={st.categoriesContainer}>

                            {data && data.map(
                                (el) => el.id <= 4 && (
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
</div>
    )
    }