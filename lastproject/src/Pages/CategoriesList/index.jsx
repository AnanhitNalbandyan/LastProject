
    import { useGetAllCategoriesQuery } from '../../redux/apiSlice'
    import { baseUrl } from '../../redux/apiSlice'
    import { Category } from '../Category'
    import { NavLink } from 'react-router-dom'
    import st from './style.module.scss'

    

    export const CategoriesList = () => {
    const { data } = useGetAllCategoriesQuery();
    console.log(data);

    return (
        <div className={st.wrapper}>
        <h2>Categories</h2>
        <div className={st.categoriesWrapper}>
                {data && data.map((el) => (
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
    )
}