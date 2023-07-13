import { useGetAllPropductsQuery } from '../../redux/apiSlice'
import { Product } from '../../Pages/Product'
import {baseUrl} from '../../redux/apiSlice'
import st from './style.module.scss'

export const Sale = () => {
    const { data, isLoading, error } = useGetAllPropductsQuery();

    return (
        <div className={st.container}>
            <h2>Sale</h2>
            <div>
    {error ? <h1>{error}</h1> : null}
                {isLoading ? (
                    <h1>LOADING</h1>
                ) : (
                    <>

                        <div className={st.productsContainer}>

                            {data && data.map(
                                (el) => el.id <= 4 && (
                                    <Product
                                        key={el.id}
                                        title={el.title}
                                        image={baseUrl + el.image}
                                    />
                                )
                            )}
    
                        </div>
                    </>
                )}
    </div>
        </div>
    )
}