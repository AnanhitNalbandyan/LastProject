    import { NavLink } from 'react-router-dom'
    import st from './style.module.scss'
    import { useGetAllCategoriesQuery } from '../../Components/redux/apiSlice'

    export const CategoriesListPage = () => {
    const { data } = useGetAllCategoriesQuery()
    return (
        <>
        <h1>Categories</h1>
        <div className={st.container}>
            {data &&
            data.map((el, index) => (
                <NavLink key={index} to={`/categories/${el}`}>
                <div className={st.categoryContainer}>{el}</div>
                </NavLink>
            ))}
        </div>
        </>
    )
    }
