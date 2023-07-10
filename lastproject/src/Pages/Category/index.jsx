
import st from './style.module.scss'

export const Category = ({ image, title }) => {
    return(
        <div className={st.wrapper}>
            <div className={st.imageContainer}>
            <img src={image} alt="" />
            </div>
            <p>{title}</p>
        </div>
    )
}
