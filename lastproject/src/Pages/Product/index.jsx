    import st from "./style.module.scss"

    export const Product = ({ discont_price, image, price, id, title }) => {
    console.log(price);
    return (
        <div className={st.wrapper}>
            <img className={st.image} src={image} alt="" />
        <div className={st.priceContainer}>
        <p className={st.price}>{`${price}$`}</p> 
        <span className={st.discont_price}>{discont_price ? `${discont_price}$` : ""}</span>
        <span className={st.precent}>-10%</span>
        </div>
        <p className={st.title}>{title}</p>
        </div>
    )
    }
