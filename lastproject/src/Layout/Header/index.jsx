import st from './style.module.scss'
import { NavLink } from 'react-router-dom'
import bag  from '../../Images/shoppingbag.svg'
import logo from '../../Images/logo.png'
import { useSelector } from 'react-redux'


export const Header = () => {
    
    const totalProducts = useSelector((state) => state.basket.totalProducts)


    return (
        <header className={st.container}>

            <div className={st.logoWrapper}>

                <span href="#"> <img className={st.logo} src={logo} alt="" /></span>

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
                

            <span href="#">
                <NavLink to="/basket"><span className={st.count}>{totalProducts}</span><img className={st.bag} src={bag} alt="Basket" /></NavLink>
            </span> 
            
            
        </header>
    )
}