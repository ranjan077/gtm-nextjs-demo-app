import { useEffect } from "react"

const DataLayerDemo = () => {
    const onLoginClick = () => {
        if(window.dataLayer) {
            dataLayer.push({
                event: 'login',
                type: 'buttonclick'
            })
        }
    }
    return <button id="login" onClick={onLoginClick}>Login Datalayer event</button>
}

export default DataLayerDemo