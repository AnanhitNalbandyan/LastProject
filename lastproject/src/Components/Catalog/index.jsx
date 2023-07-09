import st from './style.module.scss'
import { NavLink } from 'react-router-dom'
import { useGetProductsCategoriesQuery } from '../redux/apiSlice'
import { useEffect } from 'react'


    export const Catalog = () => {
        
        const { data: cardData = [], error, isLoading } = useGetProductsCategoriesQuery('your-category-name');

    useEffect(() => {
    
        if (error) {
    
        }
    }, [cardData, error])

    if (isLoading) {
        return <div>Loading...</div>
    }
console.log(useGetProductsCategoriesQuery)
    return (
    <div className={st.container}>
        <p>Catalog</p>
            <NavLink to="/your-other-page-path" className={st.category}>
            All categories
            </NavLink>
        {cardData && cardData.map(card => (
            <div key={card.id} className={st.card}>
                <img src= {`http://127.0.0.1:3333/${card.image}`}  alt="" />
                <p>{card.title}</p> 
            </div>
        
        ))}
    </div>
    )
}