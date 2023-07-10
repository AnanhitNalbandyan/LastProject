    import st from './style.module.scss'
    import { useGetAllCategoriesQuery } from '../../redux/apiSlice'
    import { baseUrl } from '../../redux/apiSlice'
    import { Category } from '../../Pages/Category'


    export const Catalog = () => {
            
    const { data } = useGetAllCategoriesQuery();

    return (
        <div className={st.wrapper}>
        <h2>Catalog</h2>
        <button>All cataloges</button>
        <div className={st.categoriesWrapper}>
            {data &&
            data.map(
                (el) => el.id <= 4 && (
                    <Category
                    key={el.id}
                    title={el.title}
                    image={baseUrl + el.image}
                    />
                )
            )}
        </div>
        </div>
    )
    }