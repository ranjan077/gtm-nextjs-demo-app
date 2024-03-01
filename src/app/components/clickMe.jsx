
const ClickMeBtn = () => {
    const handleBackGroundChange = () => {
        window?.dataLayer?.push({
            event: 'toggle-bg'
        })
    }
    return <button id="changebg" onClick={handleBackGroundChange}>Click me to change bg color</button>
}

export default ClickMeBtn