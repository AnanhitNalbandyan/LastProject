import st from './style.module.scss'


export const TitleGlobal = ({title}) => {
    
    return (
        <>
            <h3 className={st.title}>{ title}</h3>
        </>
    )
}