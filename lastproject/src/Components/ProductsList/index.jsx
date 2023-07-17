    import { useGetAllPropductsQuery, baseUrl } from "../../redux/apiSlice"
    import st from './style.module.scss'
    import { NavLink} from 'react-router-dom'
    import { Product } from "../Product"

    export const ProductsList = () => {
    const { data, isLoading } = useGetAllPropductsQuery();

    //console.log(data)
        return (
        <div className={st.products}>
        {isLoading ? (
            <h1>Loading...</h1>
        ) : (
            data &&
            data.map((el) => (
            <NavLink key={el.id} to={`/products/${el.id}`}>
                <Product
                key={el.id}
                image={baseUrl + el.image}
                price={el.price}
                title={el.title}
                />
            </NavLink>
            ))
        )}
        </div>
    )
}