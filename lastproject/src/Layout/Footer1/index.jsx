import st from './style.module.scss'
import footerPic from '../../Images/footerPic.png'

export const Footer1 = () => {
    
    return (
        <div className={st.container}>
            <img className={st.footerPic} src={footerPic} alt="" />
        </div>
    )
}