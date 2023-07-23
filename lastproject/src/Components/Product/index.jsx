import { baseUrl } from '../../redux/apiSlice'
import st from './style.module.scss'

export const Product = (
    { discont_price,
        image,
        price,
        title,
        addToBasketHandler,
    }) => {

        
    return (
        <div className={st.wrapper}>
            <img className={st.image} src={baseUrl + image} alt={title} />
            <button className={st.addToCard}
                onClick={ addToBasketHandler}> Add to card </button>
        <div className={st.priceContainer}>
        <p className={st.price}>{`${price}$`}</p> 
        <span className={st.discont_price}>{discont_price ? `${discont_price}$` : ""}</span>
        <span className={st.percent}>-10%</span>
        </div>
        <p className={st.title}>{title}</p>
        </div>
    )
    }