"use client"
const DataLayerDemo = () => {
    const onLoginClick = () => {
        if(window.dataLayer) {
            dataLayer.push({
                event: 'login',
                login_type: 'buttonclick'
            })
        }
    }
    return <button id="login" onClick={onLoginClick}>Login Datalayer event</button>
}

export default DataLayerDemo