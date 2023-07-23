    import { useGetAllPropductsQuery } from "../../redux/apiSlice"
    import st from './style.module.scss'
    import { NavLink} from 'react-router-dom'
    import { Product } from "../Product"
import { useDispatch } from "react-redux"
import { addProductToBasket, countTotalPrice } from "../../redux/basketSlice"

    export const ProductsList = () => {
    const { data, isLoading } = useGetAllPropductsQuery();

    const eachData = data && data 
        
    const dispatch = useDispatch()

    const addToBasketHandler = (event, el) => {
    event.preventDefault()
    const newProduct = { ...el, quantity: 1 };
    dispatch(addProductToBasket(newProduct));
    dispatch(countTotalPrice());
}
        return (
        <div className={st.products}>
        {isLoading ? (
            <h1>Loading...</h1>
        ) : (eachData.map((el) => (
            <NavLink key={el.id} to={`/products/${el.id}`}>
                <Product
                {... el}
                addToBasketHandler={event =>addToBasketHandler(event, el)}        
                />
            </NavLink>
            ))
        )}
        </div>
    )
}