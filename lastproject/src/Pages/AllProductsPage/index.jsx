import st from './style.module.scss'  
import { ProductsList } from "../../Components/ProductsList"

export const AllProductsPage = () => {
        
    return (
        
            <div className={st.container}>
                <h2 className={st.title}>All Products</h2>
                    <ProductsList/>
            </div>
        
    )

}