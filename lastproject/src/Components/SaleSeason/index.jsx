import st from './style.module.scss'
import bush from './Images/bush.png'

export const SaleSeason = () => {
    

    return (
        <div className={st.container}>
            
            <img className={st.bush} src={bush} alt="" />

            <div className={st.wrapper}>
                <h1> Sale </h1>
                <h2> New seasone</h2>
                <button className={st.btnSale}>Sale</button>
            </div>
            
        </div>
    )
}