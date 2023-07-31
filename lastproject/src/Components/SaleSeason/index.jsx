import st from './style.module.scss'
import { NavLink } from 'react-router-dom'
import bush from '../../Images/bush.png'

export const SaleSeason = () => {
    

    return (
        <div className={st.container}>
            
            <div className={st.wrapper}>
                <h1> Sale </h1>
                <h2 className={st.season}> New seasone</h2>
                <button className={st.btnSale} >
                    <NavLink to="/sales">
                            Sale
                    </NavLink>
                </button>
            <img className={st.bush} src={bush} alt="" />
            
            </div>
            
        </div>
    )
}