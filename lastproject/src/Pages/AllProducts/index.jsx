    import { useGetAllPropductsQuery } from "../../redux/apiSlice"
    import { baseUrl } from "../../redux/apiSlice"
    import st from '../AllProducts/style.module.scss'
    import { NavLink, useParams } from 'react-router-dom'
    import { Product } from "../Product"

    export const AllProducts = () => {
    const { data, isLoading } = useGetAllPropductsQuery();
    const { id } = useParams()
    // console.log(data)

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
                discont_price={el.discont_price}
                title={el.title}
                />
            </NavLink>
            ))
        )}
        </div>
    )
}