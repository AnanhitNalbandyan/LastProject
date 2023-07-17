import React from "react"
import st from './style.module.scss'

export const Map = () => {
    
    return (
        <>
        <div className={st.map}>
            <iframe
                className={st.map}
                title="map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d155421.70603723938!2d13.259928724393296!3d52.50693861635142!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a84e373f035901%3A0x42120465b5e3b70!2z0JHQtdGA0LvQuNC9!5e0!3m2!1sru!2sde!4v1688377536920!5m2!1sru!2sde"
                width="100%"
                height="450"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            />
            
                
        </div>
        </>
    )
}
