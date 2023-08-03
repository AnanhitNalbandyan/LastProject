import st from './style.module.scss'  
import { ProductsList } from "../../Components/ProductsList"

export const AllProducts = () => {
        
    return (
        <>
            <h2 className={st.title}>All Pruducts</h2>

            <ProductsList/>
        
        </>
    )

}