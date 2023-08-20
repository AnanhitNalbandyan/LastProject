import st from './stayle.module.scss'
import {PiInstagramLogoThin, PiWhatsappLogoThin} from 'react-icons/pi'

export const ContactAddress = () => {
    

    return (
        <>
        <div className={st.container}>
            <div className={st.contactUs}>
            <h3 className={st.titleContact}>Contact</h3>
            <p className={st.phone}>+49 999 999 99 99</p>
            <div className={st.socialMedia}>
            <li className={st.icon}>
                <a href="https://www.instagram.com/">
                    <PiInstagramLogoThin className={st.contactLogo} />
                    Instagram
                </a>
                </li>
                <li className={st.icon}>
                <a href="https://www.whatsapp.com/">
                    <PiWhatsappLogoThin className={st.contactLogo} />
                    WhatsApp
                </a>
                </li>
            </div>
            </div>
            <div className={st.ourAddress}>
                <h3 className={st.titleAddress}>Address</h3>        
                <a href="https://goo.su/qUVF">
                    <address className={st.address}>Linkstraße 2, 8 OG, 10785, <br /> Berlin, Deutschland</address>
                </a>

            <div className={st.workingTime}>
                <p className={st.info}>Working Hours:</p>
                <p className={st.time}>24 hours a day</p>
            </div>
            </div>
        </div>
        </>
    )
}