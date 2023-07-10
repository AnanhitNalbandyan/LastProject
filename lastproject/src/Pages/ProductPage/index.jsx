        import { useParams } from 'react-router-dom'
        import st from './style.module.scss'
        import { useGetOneProductByCategoryQuery }  from '../../redux/apiSlice'
        

        export const ProductPage = () => {
            
        const { id } = useParams()
        const { data,  isLoading } = useGetOneProductByCategoryQuery(id)
        console.log(data,  isLoading)
        
    return (
        <div className={st.wrapper}>
                { isLoading ? <h1>LOADING...</h1> : 
    (<><p className={st.title}>{data.description}</p>
    <div className={st.prodauctContainer}>

            <div className={st.infoContainer}>
                <p className={st.price}>{data.price}</p>
                <span className={st.oldPrice}>{data.discont_price}</span>
                <span className={st.procent}></span>
                <button className={st.btnToCard}>To card</button>
                <p className={st.describe}>{data.description}</p>
            </div>

            </div></>)
        }


        </div>
    )
            
        
    }
