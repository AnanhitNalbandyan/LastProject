    import { NavLink } from 'react-router-dom';
    import { useGetAllCategoriesQuery } from '../../redux/apiSlice';
    import st from './style.module.scss';

    export const CategoriesListPage = () => {
    const { data, isLoading, error } = useGetAllCategoriesQuery();

    return (
        <>
        <h1>Categories</h1>
        <div className={st.container}>
            {error ? <h1>{error}</h1> : null}
            {isLoading ? (
            <h1>LOADING</h1>
            ) : (
            data &&
            data.map((el, index) => (
                <NavLink key={index} to={`/categories/${el}`}>
                <div className={st.categoryContainer}>{el}</div>
                </NavLink>
            ))
            )}
        </div>
        </>
    )
    }