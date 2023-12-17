import '../input/input.scss'

export const createInput = (id ,icon, placeholder, type) => {

    const elem = document.createElement ('label')
    elem.className = 'input' + ( type || '' )
    elem.for = id
    
    icon = icon || ''
    elem.innerHTML = `
        <div>${icon}</div>
        <input id='${id}' placeholder='${placeholder}'>
    `

    return elem
}