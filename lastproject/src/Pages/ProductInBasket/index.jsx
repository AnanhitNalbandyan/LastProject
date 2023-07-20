    import st from './style.module.scss'

    
    export const ProductInBasket = ({
    image,
    title,
    price,
    dicont_price,
    quantity,
    addProductToBasketHandler,
    descreaseProductHandler,
    deleteProductHandler
    }) => {
    return (
        <div className={st.productContainer}>
        <img className={st.image} src={image} alt={title} />
        <p className={st.title}>{title}</p>
        <p className={st.quantity}>{quantity}</p>
        <button onClick={addProductToBasketHandler}>+</button>
        <button onClick={descreaseProductHandler}>-</button>
        <div>
            <p className={st.price}> {price}</p>
            <p className={st.dicont_price}>{dicont_price}</p>    
        </div>
        
        <button onClick={deleteProductHandler}>X</button>
        </div>
    )
    }
