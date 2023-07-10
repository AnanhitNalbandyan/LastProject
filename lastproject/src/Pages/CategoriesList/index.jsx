
    import { useGetAllCategoriesQuery } from '../../redux/apiSlice'
import { baseUrl } from '../../redux/apiSlice'
    import { Category } from '../Category'
    import st from './style.module.scss'

    

    export const Categories = () => {
    const { data } = useGetAllCategoriesQuery();
    console.log(data);

    return (
        <div className={st.wrapper}>
        <h2>Categories</h2>
        <div className={st.categoriesWrapper}>
        {data && data.map((el) => (
            <Category key={el.id} title={el.title} image={baseUrl + el.image}/>
        ))}
        </div>

        </div>
    )
    }
