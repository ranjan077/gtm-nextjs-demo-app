
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
         <button id="ot-sdk-btn" className="ot-sdk-show-settings" style={{ width: "150px"}}>Cookie Settings</button>
        }
    </div>
}

export default Footer