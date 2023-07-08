    import { useParams } from 'react-router-dom'
    import classes from './singleProductPage.module.css'
    import {addProductToBasket} from '../components/redux/basketSlice'
    import { useGetSingleProductQuery } from '../components/redux/apiSlice'
    import { useDispatch } from 'react-redux'

    export const SingleProductPage = () => {
    const { id } = useParams()
    const { data, isLoading } = useGetSingleProductQuery(id)
    const dispatch = useDispatch()

    const addProductBasketHandler = (product) => {
        dispatch(addProductToBasket(product))
    }



    return (
        <div>
        {isLoading ? (
            <h1>LOADING</h1>
        ) : (
            <div>
            <div className={classes.container}>
                <img src={data.image} />
                <div>
                <h1>{data.title}</h1>
                <p>{data.description}</p>
                <p>Price: {data.price}</p>
                <button onClick={()=>addProductBasketHandler(data)}>Добавить в корзину</button>
                </div>
            </div>
            </div>
        )}
        </div>
    )
    }
