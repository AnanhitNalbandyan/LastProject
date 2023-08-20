
import { NavLink } from "react-router-dom"
import {AiOutlineRight} from 'react-icons/ai'
import st from './style.module.scss'
import { BasketList } from "../../Components/BasketList"

export const BasketPage = () => {
    

    return (
    
            <div className={st.wrapper}>
            <h2>Shopping cart</h2>
            <NavLink className={st.store} to='/'> 
                Back to the store <span> <AiOutlineRight/></span>
            </NavLink> 
            <BasketList/>
            </div>
            
    
    )
}