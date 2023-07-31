    import st from './style.module.scss'


import { NavLink } from 'react-router-dom'
import { CatalogDemonstartion } from '../CatalogDemonstration'


    export const Catalog = () => {
            

        return (
        <>
        
        <div className={st.container}>
        <div className={st.wrapper}>
            <h2>Catalog</h2>
                <NavLink className={st.category}to='/catalog'>All categories</NavLink>   
    </div>
                    
        <div className={st.categories}>
        <CatalogDemonstartion/>
        </div>
    </div>
                </>
    )
    }