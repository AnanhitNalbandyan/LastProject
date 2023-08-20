import st from './style.module.scss'
import litleman from '../../Images/litleman.png'
import { ControlerDiscount } from '../ControlerDiscount'


export const Discount = () => {


    return (
        <div className={st.container}>

            <img className={st.litleMan} src={litleman} alt="" />
            <div className={st.wrapper}>
                    <div className={st.text}>
                    
                    <p>5% off <br /> <span>on the first order</span> </p>  
                    
                </div>
                
                <ControlerDiscount/>
            </div>
            
        </div>
        
    )
}