import { useEffect, useCallback} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
    selectFromPrice,
    selectToPrice,
    selectDiscountedOnly,
    selectSorting,
} from '../../redux/filterSlice'


import st from './style.module.scss'


export const Filtration = (
    { products, setFilteredProducts, saledProduct = false, }
) => {
    

    const dispatch = useDispatch()

    const fromPrice = useSelector (state=>state.allReducer.filter.fromPrice)
    const toPrice = useSelector (state=>state.allReducer.filter.toPrice)
        
    const discountedOnly = useSelector(state=> state.allReducer.filter.setDiscountedOnly)
        
    const sortOrder = useSelector(state => state.allReducer.filter.sortingValue)




    useEffect(() => {
        const filteredProducts = products.filter((product) => {
        const actualPrice = product.discont_price || product.price
        return (
            (!fromPrice || actualPrice > Number(fromPrice)) &&
            (!toPrice || actualPrice < Number(toPrice)) &&
            (!discountedOnly || !!product.discont_price)
            
        )
        })

    

        const sortedProducts = filteredProducts.sort((a, b) => {
        // проверку на наличие скидочной цены
        if (sortOrder === 'asc') {
            return a.price - b.price
        } else if (sortOrder === 'desc') {
            return b.price - a.price
        }
        return 0
        })

        setFilteredProducts(sortedProducts) //  без фильров возвращает целиком
    }, [products, fromPrice, toPrice, discountedOnly, sortOrder, setFilteredProducts])

    return (
    <div className={st.container}>
        <div className={st.price}>
            <label>Price</label>
                <input type="number"
                    value={fromPrice}
                    placeholder='from'
                    onChange={(el) => dispatch(
                        selectFromPrice(el.target.value))}
                />
                
                <input type="number"
                    value={toPrice}
                    placeholder='to'
                    onChange={(el) => dispatch(
                        selectToPrice(el.target.value))}
                />
        </div>
        
            { 
                <div className={st.discountCheckbox}>
                <label>
                    Discounted items
            <input
                type="checkbox"
                checked={discountedOnly}
                onChange={(el) =>dispatch(
                selectDiscountedOnly(el.target.checked))}
            />
            </label>
                </div>
            }
        <div className={st.sorted}>
            <label className={st.sortText}>
            Sorted
                    <select value={sortOrder}
                        onChange={(e) => dispatch(
                            selectSorting(e.target.value))}>
                    <option className={st.option} value="">by default</option> 
                    <option className={st.option} value="asc">Ascending</option>
                    <option className={st.option} value="desc">Descending</option>
            </select>
            </label>
        </div>
    </div>
    )
}
