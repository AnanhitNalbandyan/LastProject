import st from './style.module.scss'
import { ContactAddress } from "../../Components/ContactAddress"
import {Map} from '../../Components/Map'

export const Footer = () => {
    

    return (
        <>
            <div className={st.connectingItems}>
                <ContactAddress />
            </div>
            <div className={st.map}>
            <Map />
            </div>
        </>
    )
}