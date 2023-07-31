import React from 'react'
import { baseUrl, useGetOneProductByCategoryQuery} from '../../redux/apiSlice'
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addProductToBasket,  countTotalPrice } from '../../redux/basketSlice'
import st from './style.module.scss'


export const SingleProductPage = () => {

    const { id } = useParams();
    
    const { data, isLoading } = useGetOneProductByCategoryQuery(id);
    
    const eachData = data && data[0]

    const dispatch = useDispatch()
        
    const addProductToBasketHandler = (event, el) => {
        event.preventDefault()
    
    const newProduct = { ...el, quantity: 1 }
        dispatch(addProductToBasket(newProduct))
        dispatch( countTotalPrice())
    }

    return (
            <>
        {isLoading ? (
            <h1>LOADING...</h1>
        ) : (
            <div className={st.container}>
            <h2>{eachData.title}</h2>
            <div className={st.wrapper}>
                <img className={st.image} src={baseUrl + eachData.image} alt={eachData.title} />
                <div className={st.descriptionPrice}>
                    <div className={st.pricePart}>
                        <div className={st.numberSymbl}>
                            <p className={st.price}>{eachData.discont_price ? eachData.discont_price : eachData.price}</p> 
                            <p className={st.dollar}>$</p>
                        </div>           
                    
                    <span className={st.discount}>{eachData.discont_price ? `${eachData.discont_price}$` : ""}</span>
                    <span className={st.percent}> {eachData.discont_price ?
                                `${Math.round(100 - eachData.discont_price / (eachData.price / 100)
                    )}%`: ""}</span>
                </div>
                    <button className={st.button}
                        onClick={(event) => addProductToBasketHandler(event, eachData)}>To cart</button>
                <div className={st.descriptionPart}>
                        <p className={st.titleDes}>Description</p>           
                        <p className={st.description}>{ eachData.description}</p>
                    <div>
                                        
                    </div>                
                </div>
            </div>
                
        </div>
        </div>
    )}
    </>
)
} 
