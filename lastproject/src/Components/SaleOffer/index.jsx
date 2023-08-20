import { ProductDemonstration } from '../ProductDemonstration'
import st from './style.module.scss'
import { NavLink } from 'react-router-dom'


export const SaleOffer = () => {


    return (
        <>
    <div className={st.container}>
            <NavLink to="/sales">
            <h2 className={st.title}>Sale</h2>
            </NavLink>

            <ProductDemonstration />       
    
    
    </div>
        </>

    )
}