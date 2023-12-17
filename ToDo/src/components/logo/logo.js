import '../logo/logo.scss'

export const createLogo = (x) => {

    const elem = document.createElement ('div')
    elem.className = 'logo'

    elem.style.width = x
    elem.style.height = x

    elem.innerHTML = `
    <img src='./public/logo.svg'>
    `
    return elem
}