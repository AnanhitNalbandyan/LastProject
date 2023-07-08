import st from './style.module.scss'

export const ProductCard = ({ title, image, description }) => {
        
    return (
        <div className={st.cardContainer}>
        <div>{title}</div>
        <img src={image} alt={title} />
        <button>Добавить в корзину</button>
        </div>
    )
}
