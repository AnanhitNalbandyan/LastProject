import st from './style.module.scss'
import { NavLink } from 'react-router-dom'
import waterfall from '../../Images/waterfall.png'


export const SaleSeason = () => {
    

    return (
        <div className={st.container}>
            
            <div className={st.wrapper}>
                <h1 className={st.sale}> Sale </h1>
                <h2 className={st.season}> New season</h2>
                <button className={st.btnSale} >
                    <NavLink to="/sales">
                            Sale
                    </NavLink>
                </button>
            <img className={st.waterfall} src={waterfall} alt="" />
            </div>
            
        </div>
    )
}