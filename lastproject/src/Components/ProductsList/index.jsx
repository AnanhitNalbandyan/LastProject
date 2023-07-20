    import { useGetAllPropductsQuery, baseUrl } from "../../redux/apiSlice"
    import st from './style.module.scss'
    import { NavLink} from 'react-router-dom'
    import { Product } from "../Product"
import { useDispatch } from "react-redux"

    export const ProductsList = () => {
    const { data, isLoading } = useGetAllPropductsQuery();

    const eachData =data && data 
    const dispatch = useDispatch()

    //console.log(data)
        return (
        <div className={st.products}>
        {isLoading ? (
            <h1>Loading...</h1>
        ) : (eachData.map((el) => (
            <NavLink key={el.id} to={`/products/${el.id}`}>
                <Product
                key={el.id}
                image={baseUrl + el.image}
                price={el.price}
                title={el.title}
                addToBasketHandler={event =>el.addToBasketHandler(event, el, dispatch)}        
                />
            </NavLink>
            ))
        )}
        </div>
    )
}