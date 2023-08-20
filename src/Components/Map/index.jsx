import React from "react"
import st from './style.module.scss'

export const Map = () => {
    
    return (
        <>
            <div className={st.map}>
                <iframe
                    className={st.map}
                    title="map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2428.409222750825!2d13.37285601580702!3d52.50793287981184!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a8515353a68755%3A0xd0866511db4f838f!2sStarta%20Institute%20by%20Tel-Ran!5e0!3m2!1sru!2sde!4v1690382048173!5m2!1sru!2sde"
                    width="600"
                    height="450" 
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer">
                    
                    </iframe>
            
            
            
                
        </div>
        </>
    )
}
