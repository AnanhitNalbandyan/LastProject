export const ProductInBasket = ({ image, title, price }) => {
    return (
        <div>
        <img src={image} />
        <p>{title}</p>
        <p> {price}на колво</p>
        <button>+</button>
        <button>-</button>
        </div>
    )
}
