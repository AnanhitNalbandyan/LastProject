    import { useEffect, useState } from 'react'

    export const Filtration = ({ products, setFiltredProducts }) => {
    const [fromPrice, setFromPrice] = useState()
    const [toPrice, setToPrice] = useState()
    //   const [discountedOnly, setDiscountedOnly] = useState(false)
    const [sortOrder, setSortOrder] = useState()

    useEffect(() => {
        // data отфильтрованная
        const filteredProducts = products.filter((product) => {
        // const actualPrice = product.discont_price || product.price
        return (
            (!fromPrice || product.price > Number(fromPrice)) &&
            (!toPrice || product.price < Number(toPrice))
            //&& проверка !discountedOnly product.discont_price
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
    }, [products, fromPrice, toPrice, sortOrder])

    return (
        <div>
        <div>
            <label>Price from:</label>
            <input type="number" value={fromPrice} onChange={(e) => setFromPrice(e.target.value)} />
        </div>
        <div>
            <label>Price to:</label>
            <input type="number" value={toPrice} onChange={(e) => setToPrice(e.target.value)} />
        </div>
        {/* <div>
            <label>
            <input
                type="checkbox"
                checked={discountedOnly}
                onChange={(e) => setDiscountedOnly(e.target.checked)}
            />
            Discounted items only
            </label>
        </div> */}
        <div>
            <label>
            Sort by price:
            <select value={sortOrder} onChange={(e) => setSortOrder(e.target.value)}>
                <option value="asc">Ascending</option>
                <option value="desc">Descending</option>
            </select>
            </label>
        </div>
        </div>
    )
    }
