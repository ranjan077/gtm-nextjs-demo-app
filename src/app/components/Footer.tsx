
'use client'
import { useEffect, useState } from 'react'
import styles from './footer.module.css'

const Footer = () => {
    const [isClient, setIsClient] = useState(false)
    useEffect(() => {
        setIsClient(true)
    }, [])
    return <div>
         { isClient && 
         <a href="#cookies settings" className={`ot-sdk-show-settings ${styles.cookiesettings}`}>Your Privacy Choices</a> 
        }
    </div>
}

export default Footer