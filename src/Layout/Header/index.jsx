import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import bag  from '../../Images/shoppingbag.svg'
import logo from '../../Images/logo.svg'

import st from './style.module.scss'


export const Header = () => {
    
    const countTotalProducts = useSelector((state) => state.basket.products.length)


    return (
    
        <div className={st.container}>
                
                <div className={st.logoWrapper}>
                    <NavLink to="/">
                        <span href="#"> <img className={st.logo} src={logo} alt="" /></span>
                    </NavLink>
                    <button className={st.btnCatalog}> <NavLink className={st.text} to='/catalog'>Catalog</NavLink></button> 
                    
                </div>
                <div className={st.navBagWrapper}>
                    <nav >

                        <ul className={st.navWrapper}>
                            <li>
                                <NavLink className={({ isActive }) => (isActive ? st.active : '')}
                                            to='/mainPage'>Main Page</NavLink>
                            </li>
                            <li>
                                <NavLink className={({ isActive }) => (isActive ? st.active : '')}
                                            to='/allProducts'>All products</NavLink>
                            </li>
                            <li>
                                <NavLink className={({ isActive }) => (isActive ? st.active : '')}
                                            to='/allSales'>All sales</NavLink>
                            </li>
                        </ul>

                    </nav>
                    

                <span className={st.bagCount} href="#">
                    <NavLink to="/basket">
                        <span className={st.count}>{countTotalProducts}</span>
                        <img className={st.bag} src={bag} alt="Basket" /></NavLink>
                </span> 
                </div> 
        </div>    
    )
}