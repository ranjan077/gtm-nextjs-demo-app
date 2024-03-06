
'use client'
import { useEffect, useState } from 'react'
const Footer = () => {
    const [isClient, setIsClient] = useState(false)
    useEffect(() => {
        setIsClient(true)
    }, [])
    return <div>
         { isClient && <button id="ot-sdk-btn" className="ot-sdk-show-settings">My Cookie Settings</button> }
    </div>
}

export default Footer