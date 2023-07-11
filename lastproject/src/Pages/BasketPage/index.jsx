
import { useDispatch, useSelector } from "react-redux"
import { ProductInBasket } from "../../Components/ProductInBasket"
import { deleteProductFromBasket, cleanBasket } from "../../redux/basketSlice"

    export const BasketPage = () => {
    const data = useSelector((state) => state.basket.products)
    //console.log(data)
        
        const dispatch = useDispatch()
const handleDeleteProduct = (id) => {
 dispatch(deleteProductFromBasket(id));
 }

const handleClearBasket = () => {
 dispatch(cleanBasket())
 }
    return (
        <div>
        <div>
            {data.map((product) => (
                <ProductInBasket key={product.id} {...product}
                    onDelete={() => handleDeleteProduct(product.id)} />
            ))}
        </div>
        <h2> Итого</h2> <button onClick={()=>handleClearBasket}>Очистить корзину</button>
        </div>
    )
    }