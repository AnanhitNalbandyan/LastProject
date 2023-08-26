import { useEffect, useState } from 'react'
import st from './style.module.scss'


    export const Filtration = ({ products, setFiltredProducts }) => {
    

    const [fromPrice, setFromPrice] = useState('')
    const [toPrice, setToPrice] = useState('')
    
    const [fromPriceEntered, setFromPriceEntered] = useState(false)
    const [toPriceEntered, setToPriceEntered] = useState(false)
        
    const [discountedOnly, setDiscountedOnly] = useState(false)
        
    const [sortOrder, setSortOrder] = useState()
        
    const [sortOrderChoose, setSortOrderChoose] = useState(false)

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
        if (sortOrder === 'asc') {
            return a.price - b.price
        } else if (sortOrder === 'desc') {
            return b.price - a.price
        }
        return 0
        })

        setFiltredProducts(sortedProducts) 
    }, [ fromPrice,  toPrice, discountedOnly, sortOrder])

    return (
    <div className={st.container}>
        <div className={st.price}>
            <label>Price</label>
                <input
                    className={`${st.inputForom} ${fromPriceEntered ? st.isActive : ""}`}
                    type="number"
                    value={fromPrice}
                    placeholder='from'
                    onChange={(el) => {
                    setFromPrice(el.target.value)
                    setFromPriceEntered(true)
                    }}
                />
                

                <input
                    className={`${st.inputForom} ${toPriceEntered ? st.isActive : ""}`}
                    type="number"
                    value={toPrice}
                    placeholder='to'
                    onChange={(el) => {
                    setToPrice(el.target.value)
                    setToPriceEntered(true)
                    }}
                />
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
                    <select 
                        className={`${st.option} ${setSortOrderChoose ? st.isActiveSort : ""}`}
                        value={sortOrder}
                        onChange={(e) => {
                            setSortOrder(e.target.value)
                            setSortOrderChoose(true)
                        }}
                            >
                    <option  value="">by default</option> 
                    <option  value="asc">Ascending</option>
                    <option  value="desc">Descending</option>
            </select>
            </label>
        </div>
    </div>
    )
}
