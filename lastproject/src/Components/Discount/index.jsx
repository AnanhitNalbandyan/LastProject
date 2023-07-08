import st from './style.module.scss'
import litleman from './Images/litleman.png'



export const Discount = () => {
    
    

    return (
        <div className={st.container}>

            <img className={st.litleman} src={litleman} alt="" />
        
            <div clssName={st.textInput}>

                    <div className={st.text}>
                        <p>5% off <br /> <span>on the first order</span> </p>  
                    </div>
                
                    <form className={st.formInput} action="" method='get'>
                        <input className={st.input} type="text"
                        placeholder='+49'/>
                        <button className={st.button}>Get a discount</button>
                    </form>

            </div>
        
        </div>
    )
}