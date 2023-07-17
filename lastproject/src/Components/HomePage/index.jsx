import { SaleSeason } from "../SaleSeason"
import { Catalog } from "../Catalog"
import { Discount } from "../Discount"
import { SaleOffer } from "../SaleOffer"


export const HomePage = () => {
    
    return (
        <div>
            <SaleSeason />
            <Catalog />
            <Discount />
            <SaleOffer />
        </div>
    )
}