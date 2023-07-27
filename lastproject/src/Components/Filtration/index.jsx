import { useEffect, useState } from 'react'
import st from './style.module.scss'

    export const Filtration = ({ products, setFiltredProducts }) => {
    
    const [fromPrice, setFromPrice] = useState()
    const [toPrice, setToPrice] = useState()
        
    const [discountedOnly, setDiscountedOnly] = useState(false)
        
    const [sortOrder, setSortOrder] = useState()

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

        setFiltredProducts(sortedProducts) //  без фильров возвращает целиком
    }, [products, fromPrice, toPrice, discountedOnly, sortOrder, setFiltredProducts])

    return (
    <div className={st.container}>
        <div className={st.price}>
            <label>Price</label>
                <input type="number"
                    value={fromPrice}
                    placeholder='from'
                    onChange={(el) => setFromPrice(el.target.value)} />
                
                <input type="number"
                    value={toPrice}
                    placeholder='to'
                    onChange={(e) => setToPrice(e.target.value)} />
        </div>
        
            {<div className={st.discountCheckbox}>
                <label>
                    Discounted items
            <input
                type="checkbox"
                checked={discountedOnly}
                onChange={(el) => setDiscountedOnly(el.target.checked)}
            />
            </label>
        </div> }
        <div className={st.sorted}>
            <label className={st.sortText}>
            Sorted
            <select value={sortOrder} onChange={(e) => setSortOrder(e.target.value)}>
                <option className={st.option} value="asc">Ascending</option>
                <option className={st.option} value="desc">Descending</option>
            </select>
            </label>
        </div>
    </div>
    )
}
