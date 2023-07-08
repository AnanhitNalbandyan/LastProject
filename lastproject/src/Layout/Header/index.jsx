import st from './style.module.scss'
import { NavLink } from 'react-router-dom'



export const Header = () => {
    

    return (
        <header className={st.container}>

            <div className={st.logoWrapper}>

                <span href="#"> <img className={st.logo} src='../Images/logo.png' alt="" /></span>

                <button className={st.btnCatalog}> <NavLink className={st.text} to='/catalog'>Catalog</NavLink></button> 
                
            </div>

                <nav >

                    <ul className={st.navWrapper}>
                        <li>
                            <NavLink className={({ isActive }) => (isActive ? st.active : '')}
                                        to='/main page'>Main Page</NavLink>
                        </li>
                        <li>
                            <NavLink className={({ isActive }) => (isActive ? st.active : '')}
                                        to='/all products'>All products</NavLink>
                        </li>
                        <li>
                            <NavLink className={({ isActive }) => (isActive ? st.active : '')}
                                        to='/all sales'>All sales</NavLink>
                        </li>
                    </ul>

                </nav>
                

            <span href="#"><img className={st.bag} src='./Images/shoppingbag.svg' alt="" /></span> 
            
            
        </header>
    )
}