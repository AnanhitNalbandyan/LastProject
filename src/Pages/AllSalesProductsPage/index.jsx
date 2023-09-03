import st from './style.module.scss'
import { SaleProductsList} from "../../Components/SaleProductsList"

    export const AllSalesProductsPage = () => {

    
        return (
            <div className={st.container}>
                <h2 className={st.title}>
                    Products with sale
                </h2>
                <SaleProductsList/>
            </div>
    )
}