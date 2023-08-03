import { SaleSeason } from "../SaleSeason"
import { Catalog } from "../Catalog"
import { Discount1 } from '../Dicount1'
import { SaleOffer } from "../SaleOffer"
import st from './style.module.scss'

export const HomePage = () => {
    
    return (
        <div className={st.container}>
            <SaleSeason />
            <Catalog />
            <Discount1 />
            <SaleOffer />
        </div>
    )
}