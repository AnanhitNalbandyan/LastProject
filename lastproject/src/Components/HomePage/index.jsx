import { SaleSeason } from "../SaleSeason"
import { Catalog } from "../Catalog"
import { Discount } from '../Discount'
import { SaleOffer } from "../SaleOffer"
import st from './style.module.scss'

export const HomePage = () => {
    
    return (
        <div className={st.container}>
            <SaleSeason />
            <Catalog />
            <Discount />
            <SaleOffer />
        </div>
    )
}