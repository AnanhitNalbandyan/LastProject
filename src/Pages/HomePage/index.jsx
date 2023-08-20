import { SaleSeason } from "../../Components/SaleSeason"
import { Catalog } from "../../Components/Catalog"
import { Discount } from '../../Components/Discount'
import { SaleOffer } from "../../Components/SaleOffer"
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