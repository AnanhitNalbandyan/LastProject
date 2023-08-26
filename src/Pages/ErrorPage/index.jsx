import { useRouteError } from "react-router-dom"
import st from './style.module.scss'
import errorPage from '../../Images/error.svg'


export const ErrorPage = () => {
    
    const error = useRouteError()
    console.error(error)

    return (
        <div id='error-page'>

            <img src={errorPage} className={st.errorImg} alt="Error 404" />
    
        </div>
    )
}