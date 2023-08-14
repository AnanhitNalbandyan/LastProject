import { baseUrl } from '../../redux/apiSlice'
import st from './style.module.scss'

export const Product = (
    { discont_price,
        image,
        price,
        title,
        addToBasketHandler,
        isAddingToBasket,
    }) => {


    return (
        <div className={st.wrapper}>
            <img className={st.image} src={baseUrl + image} alt={title} />
            <button className={st.addToCard}
                onClick={addToBasketHandler}
                disabled={isAddingToBasket}
            >
                {isAddingToBasket ? 'Product is adding' : 'Add to Cart'}
            </button>
            <div className={st.titlePrice}>
                <div className={st.priceContainer}>
                <p className={st.price}>{`${price}$`}</p> 
                
                <span className={st.discont_price}>{discont_price ? `${discont_price}$` : ""}</span>
                <span className={st.percent}> {discont_price ?
                                        `${Math.round(100 - discont_price / (price / 100)
                        )}%` : ""}
                </span>
            </div>
                <p className={st.title}>{title}</p>
            </div>
        </div>
    )
    }