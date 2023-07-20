import st from './style.module.scss'
import { ProductInBasket } from '../ProductInBasket'

import { useDispatch, useSelector } from 'react-redux'
import {addProductToBasket,
    cleanBasket,
    countTotalProducts,
    decreaseProduct,
    deleteProduct,
    countTotalPrice} from '../../redux/basketSlice'


export const BasketList = () => {
    const totalPrice = useSelector((state) => state.basket.totalPrice)
    const returnedValue = useSelector((state) => state.basket.products) 

    const dispatch = useDispatch()

        
    const cleanBasketHandler = () => {
        dispatch(cleanBasket())
        dispatch(countTotalPrice())
        dispatch(countTotalProducts())
    }

    const deleteProductHandler = (product) => {
        dispatch(deleteProduct(product))
        dispatch(countTotalPrice())
        dispatch(countTotalProducts())
    }

    const descreaseProductHandler = (product) => {
        dispatch(decreaseProduct(product))
        dispatch(countTotalPrice())
        dispatch(countTotalProducts())
    }

    const addProductToBasketHandler = (product) => {
        dispatch(addProductToBasket(product))
        dispatch(countTotalPrice())
        dispatch(countTotalProducts())
    }


    return (
        <>
        <div className={st.container}>
        <div>
            {returnedValue.map((product) => (
            <ProductInBasket
                key={product.id}
                {...product}
                deleteProductHandler={() => deleteProductHandler(product)}
                addProductToBasketHandler={() => addProductToBasketHandler(product)}
                descreaseProductHandler={()=>descreaseProductHandler(product)}
            />
            ))}
        </div>
                <div className={st.orderBox}>
                    <div className={st.margin}>
                    <h2>Order details</h2>
                    <div className={st.totalPrice}>
                        <h5>Total price: </h5>
                        <p className={st.price}>{totalPrice}$</p>
                    </div>
            
                        <button className={st.buttonOrder}>Order</button>
                    </div>
                </div>    
        
    
            </div>
            <button className={st.button} onClick={() => cleanBasketHandler()}>Clean</button>
    </>
    )
}