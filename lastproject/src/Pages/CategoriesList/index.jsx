
    import { useGetAllCategoriesQuery } from '../../redux/apiSlice'
    import { baseUrl } from '../../redux/apiSlice'
    import { Category } from '../../Components/Category'
    import { NavLink } from 'react-router-dom'
    import st from './style.module.scss'

    

    export const CategoriesList = () => {
    const { data, isLoading } = useGetAllCategoriesQuery()
    //console.log(data);
        const eachData = data && data
        return (
            <>
                {isLoading ? (
                    <h1>LOADING...</h1>
                ) : (
                    <>
                        <div className={st.wrapper}>
                            <h2>Categories</h2>
                            <div className={st.categoriesWrapper}>
                                {eachData.map((el, id) => (
                                    <NavLink key={el.id} to={`/categories/${el.id}`}>
                                        <Category
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