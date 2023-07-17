
import st from './style.module.scss'

export const Category = ({ image, title }) => {
    return(
        <div className={st.container}>
            <img className={st.image}
                src={image}
                alt={title} />
            <p className={st.titleImg}>{title}</p>
        </div>
    )
}
