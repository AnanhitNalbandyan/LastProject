    import st from './style.module.scss'
    import {AiOutlinePlus, AiOutlineMinus} from 'react-icons/ai'
    import { RxCross2 } from 'react-icons/rx'
    import { baseUrl  } from '../../redux/apiSlice'



    export const ProductInBasket = ({
    image,
    title,
    price,
    discont_price,
    quantity,
    addProductToBasketHandler,
    descreaseProductHandler,
    deleteProductHandler
    }) => {
        
        return (
        
        <div className={st.productContainer}>
            <div className={st.wrapperImageTitleQuantity}>
                <img className={st.image} src={baseUrl+image} alt={title} />
                <div className={st.titleQuantity}>
                <p className={st.title}>{title}</p>
                    <div className={st.quantityBlock}>
                    
                        <div className={st.minus} onClick={descreaseProductHandler}><span><AiOutlineMinus /></span></div>
                        <p className={st.quantity}>{quantity}</p>
                        <div className={st.plus} onClick={addProductToBasketHandler}><span><AiOutlinePlus /></span></div>
                    
                    </div>   
                    
                </div>
            </div>
                <div className={st.priceBlock}>
        {discont_price ? (
                        <>
                            <p className={st.price}>
                                {discont_price} <a className={st.dollar} href="dollar">$</a>
                            </p>
                            <p className={st.discont_price}>
                                {price} $    
                            </p> 
                        </>  
                    ) : (     
                        <div>
                            <span className={st.price}> {price} </span>
                            <span className={st.dollar}>$</span>
                        </div>    
                            
        )}                
            </div>
        <button className={st.button} onClick={deleteProductHandler}><span><RxCross2/></span></button>
        </div>
    
    )
    }
