import st from './style.module.scss'
import {Link} from 'react-router-dom'
export const Catalog = () => {
    

    return (
    <div className={st.container}>
        <p>Catalog</p>
            <Link to="/your-other-page-path" className={st.category}>
            All categories
            </Link>
    </div>
    )
}