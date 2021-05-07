setInterval(setClock, 1000)

const minHand = document.querySelector('[data-min]')
const hrHand = document.querySelector('[data-hr]')
const secHand = document.querySelector('[data-sec]')

function setClock() {
    currentTime = new Date()
    secRatio = currentTime.getSeconds()/60
    minRatio = (secRatio + currentTime.getMinutes())/60
    hrRatio = (minRatio + currentTime.getHours())/12
    setRotation(secHand, secRatio)
    setRotation(minHand, minRatio)
    setRotation(hrHand, hrRatio)
}

function setRotation(element, rotationRatio) {
    element.style.setProperty('--rotation', rotationRatio * 360)
}    

setClock()