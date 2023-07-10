import { SaleSeason } from "../SaleSeason"
import { Catalog } from "../Catalog"
import { Discount } from "../Discount"
import { Sale } from "../Sale"


export const MainPage = () => {
    
    return (
        <div>
            <SaleSeason />
            <Catalog />
            <Discount />
            <Sale />
        </div>
    )
}