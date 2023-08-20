import st from './style.module.scss'
import { ProductInBasket } from '../ProductInBasket'
import basketEmpty from '../../Images/basket.png'
import { useDispatch, useSelector } from 'react-redux'
import {
    addProductToBasket,
    cleanBasket,
    countTotalProducts,
    descreaseProduct,
    deleteProduct,
    countTotalPrice} from '../../redux/basketSlice'
import { ControlerOrder } from '../ControlerOrder'


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
    dispatch(descreaseProduct(product))
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
                <div className={st.productInBasket}>
                    {returnedValue.length === 0 ? (
                        <div className={st.empty}>
                        <h3>Your basket is empty</h3>
                            <img src={basketEmpty} alt = 'shopping basket' className={st.basket}/>
                                
                            
                        </div>
                    ) : (
                        returnedValue.map((product) => (
                                <ProductInBasket
                                    key={product.id}
                                    {...product}
                                    deleteProductHandler={() => deleteProductHandler(product)}
                                    addProductToBasketHandler={() => addProductToBasketHandler(product)}
                                    descreaseProductHandler={() => descreaseProductHandler(product)}
                                />
                        ))
                    )}
                </div>
                {returnedValue.length !== 0 && (
                <div className={st.orderBox}>
                        <div className={st.title}>
                            <h2>Order details</h2>
                            <div className={st.totalPrice}>
                                <h5 className={st.total}>Total: </h5>
                                    <div>
                                        <span className={st.price}>{totalPrice.toFixed(2)}</span>
                                        <span className={st.dollar}>$</span>
                                    </div>
                            </div>
                            
                        </div>
                    <ControlerOrder />
                </div> 
                )}    
            </div>
            <div className={st.buttonWrapper}>
                <button className={st.button}
                        onClick={() => cleanBasketHandler()}>
                    Clean basket
                </button>
            </div>
        </>
    )
}