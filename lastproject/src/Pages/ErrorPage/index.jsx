import { useRouteError } from "react-router-dom"
import st from './style.module.scss'



export const ErrorPage = () => {
    
    const error = useRouteError()
    console.error(error)

    return (
        <div id='error-page' className={st.container}>

            <img src='../Images/error.png' alt="" />
    
        </div>
    )
}