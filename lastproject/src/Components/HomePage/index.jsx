import { SaleSeason } from "../SaleSeason"
import { Catalog } from "../Catalog"
import { Discount1 } from '../Dicount1'
import { SaleOffer } from "../SaleOffer"


export const HomePage = () => {
    
    return (
        <div>
            <SaleSeason />
            <Catalog />
            <Discount1 />
            <SaleOffer />
        </div>
    )
}