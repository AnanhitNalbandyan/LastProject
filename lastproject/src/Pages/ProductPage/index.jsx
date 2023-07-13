    import { useParams } from 'react-router-dom'
    import st from './style.module.scss'
    import {ProductCard} from '../../Components/ProductCard'
    import { useGetOneProductByCategoryQuery }  from '../../redux/apiSlice'
        

        export const ProductPage = () => {
            
        const { id } = useParams()
        const { data,  isLoading } = useGetOneProductByCategoryQuery(id)
        console.log(data,  isLoading)
        
    return (
        <div className={st.wrapper}>
            <h2>All products</h2>
            <div className={st.container}>
                <form action="">
                    <input type="number" placeholder='from' />
                    <input type="number"  placeholder='to'/>
                </form>
                <div className={st.discWrapper}>
                <p>Discount</p>
                    <form action="">
                        <input type="number" />
                    </form>
                </div>

            </div>
                { isLoading ? <h1>LOADING...</h1> : 
            (
                <>
                <ProductCard/>
                
                </>
            )
        }


        </div>
    )
            
        
    }
