    import { NavLink, useParams } from 'react-router-dom'
    import { ProductCard } from './Layout/ProductCard'
    import st from './style.module.css'
    import { useGetProductsCategoriesQuery } from '../components/redux/apiSlice'
    

    export const ProductsListPage = () => {
    const { id } = useParams()
    const { data, error, isLoading } = useGetProductsCategoriesQuery(id)
    console.log(data, error, isLoading)
    return (
        <div>
        {error ? <h1>{error}</h1> : null}
        {isLoading ? (
            <h1>LOADING</h1>
        ) : (
            <div className={st.productsContainer}>
            {data &&
                data.map((el) => (
                <NavLink key={el.id} to={`/products/${el.id}`}>
                    <ProductCard {...el} />
                </NavLink>
                ))}
            </div>
        )}
        </div>
    )
    }
