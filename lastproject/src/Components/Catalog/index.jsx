import st from './style.module.scss'
import { NavLink } from 'react-router-dom'
import { useGetProductsCategoriesQuery } from '../redux/apiSlice'
import { useEffect } from 'react'


    export const Catalog = () => {
        
        const { data: cardData = [], error, isLoading } = useGetProductsCategoriesQuery('your-category-name');

    useEffect(() => {
        // Выполняйте какие-либо действия при успешном получении данных, обработке ошибок и т. д.
        if (error) {
        // Обработка ошибок
        }
    }, [cardData, error])

    if (isLoading) {
        return <div>Loading...</div>
    }

    return (
    <div className={st.container}>
        <p>Catalog</p>
            <NavLink to="/your-other-page-path" className={st.category}>
            All categories
            </NavLink>
        {cardData.map(card => (
            <div key={card.id} className={st.card}>
                {card.title}
            </div>
        ))}
    </div>
    )
}